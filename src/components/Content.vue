<template>
  <div class="content-container">
    <div id="move" class="row p-5">
      <div v-if="field" class="col-12 mb-5 text-white text-center">
        <div class="font-weight-bold">YOUR JOB FIELD</div>
        <div v-for="f in field" :key="f" class="font-weight-bold text-gradient" style="font-size: 35px">
          {{ f }}
        </div>
      </div>
      <div class="col content-list">
        <div class="content-wrapper rounded bg-white p-3">
          <transition name="fade" mode="out-in">
            <div
              v-if="loading"
              key="loading"
              class="loading text-center d-flex align-items-center justify-content-center"
            >
              <div
                key="loading"
                class="spinner-border text-primary mt-3"
                style="height: 45px; width: 45px"
                role="status"
              />
            </div>
            <div v-else key="content">
              <div v-for="(job, index) in jobs" :key="index" class="content-item mt-1" @click="updateSelect(job)">
                <div class="content-card rounded p-3 d-flex flex-row mb-3">
                  <div style="width: 70px; height: 70px; background: #EFEFEF" class="rounded"></div>
                  <div class="flex flex-column ml-3">
                    <div class=" font-weight-bold">
                      {{ job.job_title }}
                    </div>
                    <div class="tag rounded d-inline px-2 text-white" style="font-size: 12px; background: #1abcfe">
                      NEW
                    </div>
                    <div class="company mt-3" style="font-size: 13px; color: #414141">
                      {{ job.company }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="col content-item">
        <div class="content-wrapper rounded bg-white p-3">
          <transition name="fade" mode="out-in">
            <div
              v-if="loading2"
              key="loading"
              class="loading text-center d-flex align-items-center justify-content-center"
            >
              <div
                key="loading"
                class="spinner-border text-primary mt-3"
                style="height: 45px; width: 45px"
                role="status"
              />
            </div>
            <div v-else key="content">
              <div class="d-flex flex-row head">
                <div style="width: 70px; height: 70px; background: #EFEFEF" class="rounded"></div>
                <div class="flex flex-column ml-3">
                  <div class=" font-weight-bold">
                    {{ select.job_title }}
                  </div>
                  <div class="tag rounded d-inline px-2 text-white" style="font-size: 12px; background: #1abcfe">
                    NEW
                  </div>
                  <div class="company mt-1" style="font-size: 13px; color: #414141">
                    {{ select.company }}
                  </div>
                </div>
              </div>
              <div v-if="select.sim" class="mt-3">
                Suitability: <span class="font-weight-bold">{{ select.sim }}</span>
              </div>
              <div class="mt-3" style="font-size: 14px">
                {{ select.desc }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="row pt-2 px-5 pb-5 text-white">
      <div class="col-12 text-center text-gradient">
        MATCHING
      </div>
      <div class="col-12 text-center text-white-50">
        Match your personal profile with our job position
      </div>
      <div class="col-12 mt-5">
        <form class="w-100" @submit.prevent="submit">
          <div class="form-group">
            <textarea
              v-model="profile"
              class="form-control"
              placeholder="Your personal profile"
              style="min-height: 200px"
            ></textarea>
          </div>
          <div class="text-center">
            <div v-if="loading3">
              <div
                key="loading"
                class="spinner-border text-primary mt-3"
                style="height: 45px; width: 45px"
                role="status"
              />
            </div>
            <button v-else type="submit" class="btn btn-graident mb-2">
              Matching
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import env from '@/environment';
import axios from 'axios';
import Jobs from '@/type/jobs';
import { set } from 'vue/types/umd';

@Component({
  name: 'Content',
  data() {
    return {
      select: new Jobs()[0],
      profile: `I am a fullstack development for 3 years, Specialize in frontend stack (Vue), backend stack (express, go(new)) and also have experience in DevOps (CI/CD with github actions, gitlab CI, Docker, GCP, AWS) now looking for an opportunities for fullstack, data science field as co-op or Internship.`
    };
  }
})
export default class Content extends Vue {
  payload = '';
  $axios: any;
  loading = true;
  loading2 = true;
  loading3 = false;
  field: any = null;
  jobs: any = new Jobs();
  select: any;
  profile: any;

  async mounted() {
    const resp = await this.$axios.get(`${env.BACK_URI}/jobs`).catch((err) => err);
    this.loading = false;
    this.loading2 = false;
    if (resp.data) {
      this.jobs = resp.data;
      this.select = this.jobs[0];
    }
  }

  updateSelect(item) {
    this.loading2 = true;
    this.select = item;
    setTimeout(() => {
      this.loading2 = false;
    }, 300);
  }

  async submit() {
    const payload = { profile: this.profile };

    this.loading = true;
    this.loading2 = true;
    this.loading3 = true;
    const resp = await this.$axios.post(`${env.BACK_URI}/jobs/recommendation`, payload).catch((err) => err);
    if (resp.data) {
      this.jobs = resp.data;
      this.select = this.jobs[0];
      this.field = [...new Set(this.jobs.map((item) => item.job_type))];
      const el: any = document.querySelector('#move');
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.loading = false;
    this.loading2 = false;
    this.loading3 = false;
  }
}
</script>

<style lang="scss" scroped>
.loading {
  height: calc(50vh - 20px);
}
.text-gradient {
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(90deg, #ae75f7, #11bc7a, #0190ca);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.3s ease-out;
}

.btn-graident {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #ae75f7, #11bc7a, #0190ca);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, #ae75f7, #11bc7a, #0190ca);
  border-radius: 10px;
  transition: 0.3s ease-out;

  &:hover {
    opacity: 0.8;
    transform: translateY(1px);
  }
}
.content-wrapper {
  min-height: 50vh;
  max-height: 50vh;
  overflow-y: scroll;
  .content-card {
    box-shadow: 0 1px 5px 0px rgba($color: #000000, $alpha: 0.3);
  }
  .content-item {
    transition: 0.3s ease-out;
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
    }
  }
}
</style>
