<template>
  <div class="skill-section bg-deep">
    <div class="container-fluid mt-5">
      <div class="title">
        <h1>SKILL MAPPING</h1>
      </div>
      <div class="menu row mt-5">
        <div v-for="career in careers" :key="career.name" class="col-6 col-md-3 text-center">
          <button
            class="btn btn-primary btn-lg"
            :class="[{ disabled: career.disabled }, { active: career.active }]"
            @click="activeCareer(career)"
          >
            {{ career.name }}
          </button>
        </div>
      </div>
      <div class="content row">
        <div class="col-12 col-md-3 d-flex flex-wrap graph-menu">
          <div class="graph-date col">
            {{ selected_career.updated }}
          </div>
          <div class="bg-white p-2 rounded w-100">
            <ul class="text-dark">
              <li
                v-for="position in selected_career.position"
                v-show="selected_position"
                :key="position"
                class="mt-2 font-weight-bold"
                :class="{ active: position == selected_position }"
                @click="activePosition(position)"
              >
                {{ position }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md graph-content">
          <div class="graph-switch flex flex-row mb-3">
            <div
              class="btn btn-success btn-sm"
              :class="{ active: selected_graph == 'sankey_hard' }"
              @click="selected_graph = 'sankey_hard'"
            >
              Sankey hard skill
            </div>
            <div
              class="btn btn-success btn-sm"
              :class="{ active: selected_graph == 'bar_hard' }"
              @click="selected_graph = 'bar_hard'"
            >
              Barplot hard skill
            </div>
            <div
              v-if="selected_career.soft_skill"
              class="btn btn-secondary btn-sm"
              :class="{ active: selected_graph == 'sankey_soft' }"
              @click="selected_graph = 'sankey_soft'"
            >
              Sankey soft skill
            </div>
            <div
              v-if="selected_career.soft_skill"
              class="btn btn-secondary btn-sm"
              :class="{ active: selected_graph == 'bar_soft' }"
              @click="selected_graph = 'bar_soft'"
            >
              Bar soft skill
            </div>
            <!-- <div v-if="selected_graph == 'snakey'" class="col switch-item">
              Snakey Diagram <b-icon icon="arrow-right-short" />
            </div>
            <div v-else class="col switch-item">Bar Plot <b-icon icon="arrow-right-short" /></div> -->
          </div>
          <div class="bg-white rounded">
            {{ `/graph/${selected_graph}/${selected_content}` }}
            <div class="pc-graph d-none d-md-flex embed-responsive embed-responsive-4by3">
              <iframe class="embed-responsive-item" :src="`/graph/${selected_graph}/${selected_content}`"> </iframe>
            </div>
            <div class="mobile-graph d-flex d-md-none justify-content-center align-items-center h-100">
              <a target="_blank" :href="`/graph/${selected_graph}/${selected_content}`">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillSection',
  data() {
    return {
      careers: [
        {
          name: 'it',
          active: true,
          disabled: false,
          soft_skill: false,
          updated: '15/11/2020 (2720)',
          position: [
            'overview',
            'devops and cloud technology',
            'information security',
            'IT business and strategy',
            'IT management',
            'network technology',
            'service and infrastructure',
            'software development',
            'storage and data'
          ]
        },
        {
          name: 'finance',
          active: false,
          disabled: false,
          soft_skill: false,
          updated: '20/1/2021 (1390)',
          position: ['overview', 'banks', 'corporates', 'institutions', 'public accounting']
        },
        {
          name: 'marketing',
          active: false,
          disabled: false,
          soft_skill: false,
          updated: '3/2/2021 (2284)',
          position: [
            'overview',
            'brand marketing',
            'content marketing',
            'digital marketing',
            'general marketing',
            'marketing communications',
            'product marketing'
          ]
        },
        {
          name: 'arts',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '20/2/2021 (1783)',
          position: [
            'overview',
            'digital art',
            'fashion',
            'fine art',
            'flim',
            'music',
            'performing art',
            'photography',
            'theater'
          ]
        },
        {
          name: 'agriculture',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '8/3/2021 (1691)',
          position: [
            'overview',
            'education',
            'agribusiness',
            'animal',
            'biotechnology',
            'environmental',
            'food',
            'natural resources',
            'plant',
            'power, structural, technical'
          ]
        },
        {
          name: 'engineering',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '2/3/2021 (722)',
          position: [
            'overview',
            'education',
            'automotive',
            'chemical engineer',
            'civil engineer',
            'electrical engineer',
            'interdisciplinary',
            'telecommunication'
          ]
        },
        {
          name: 'transportation',
          active: false,
          disabled: false,

          soft_skill: true,
          updated: '1/3/2021 (629)',
          position: ['overview', 'education', 'railroad']
        },

        {
          name: 'travel',
          active: false,
          disabled: true,
          position: []
        }
      ],
      selected_career: [],
      selected_position: [],
      selected_content: '',
      selected_graph: 'sankey_hard'
    };
  },
  mounted() {
    this.selected_career = this.careers[0];
    this.selected_position = this.selected_career.position[0];
    this.selected_content = `${this.selected_career.name}/${this.selected_position}.html`;
  },
  methods: {
    activeCareer: function(career) {
      // prevent if same as selected
      if (career === this.selected_career.name) return;

      // prevent if data is disabled
      const index = this.careers.findIndex((item) => item == career);
      if (this.careers[index].disabled) return;

      // update update state
      this.careers.map((item) => (item.active = false));
      this.careers[index].active = true;
      this.selected_career = this.careers[index];
      this.selected_content = `${this.selected_career.name}/${this.selected_career.position[0]}.html`;
      this.selected_position = this.selected_career.position[0];
      console.log(this.selected_content);
    },
    activePosition: function(position) {
      // prevent if same as selected
      if (position === this.selected_position) return;

      // update update state
      this.selected_position = position;
      this.selected_content = `${this.selected_career.name}/${this.selected_position}.html`;
    }
  }
};
</script>

<style lang="scss">
.rounded {
  border-radius: 5px !important;
}
.skill-section {
  padding: 30px;
  min-height: 65vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @include media-breakpoint-down(md) {
    padding: 0;
  }

  .mobile-graph {
    min-height: 20vh;
    font-size: 20px;
    font-weight: bold;
  }

  .content {
    margin-top: 30px;
    position: relative;
    .graph-date {
      position: absolute;
      left: 0;
      top: -30px;
      @include media-breakpoint-down(md) {
        font-size: 13px;
      }
    }
    .graph-switch {
      @include media-breakpoint-down(md) {
        font-size: 13px;
      }
    }
    @include media-breakpoint-down(md) {
      margin-top: 10px;
    }
  }
  ul {
    padding: 0;
    li {
      list-style-type: none;
      text-transform: capitalize;
      transition: 0.3s ease-out;
      font-size: 15px;
      cursor: pointer;
      background: #f2f2f2;
      padding: 5px 10px;
      border-radius: 5px;

      &.active {
        color: #fff;
        background: #44a1ff;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .title {
    text-align: center;
    h1 {
      display: inline;
      font-weight: bold;
      color: #fff;
      font-size: 40px;
      letter-spacing: 3px;
      border-bottom: 5px solid #1c86f2;
      @include media-breakpoint-down(md) {
        font-size: 25px;
      }
    }
  }

  .menu {
    > div {
      margin-bottom: 30px;
      @include media-breakpoint-down(sm) {
        margin-bottom: 10px;
      }
    }
    button {
      border-width: 3px;
      min-width: 100%;
      text-transform: uppercase;
      &:not(.active) {
        background: none;
      }
      &.disabled {
        cursor: auto;
      }

      @include media-breakpoint-down(md) {
        font-size: 13px;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .graph-menu {
      ul {
        overflow-y: scroll;
        li {
          font-size: 10px;
        }
        @include media-breakpoint-down(sm) {
          max-height: 20vh;
        }
      }
    }

    @include media-breakpoint-down(sm) {
      .graph-content {
        margin-top: 35px;
        padding-bottom: 5vh;
      }
    }
  }
}
</style>
