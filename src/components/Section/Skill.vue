<template>
  <div class="skill-section bg-deep">
    <div class="container-fluid mt-5">
      <div class="title">
        <h1>SKILL MAPPING</h1>
      </div>
      <div class="menu row mt-5">
        <div v-for="career in careers" :key="career.name" class="col-sm-6 col-md-3 text-center">
          <button
            class="btn btn-primary btn-lg"
            :class="[{ disabled: career.disabled }, { active: career.active }]"
            @click="activeCareer(career)"
          >
            {{ career.name }}
          </button>
        </div>
      </div>
      <div class="content row mt-5">
        <div class="graph-switch" @click="activeGraph()">
          <div v-if="selected_graph == 'snakey'" class="col switch-item">
            Snakey Diagram <b-icon icon="arrow-right-short" />
          </div>
          <div v-else class="col switch-item">Bar Plot <b-icon icon="arrow-right-short" /></div>
        </div>
        <div class="col-12 col-md-3 d-flex flex-wrap">
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
        <div class="col-12 col-md ">
          <div class="bg-white rounded">
            <div class="embed-responsive embed-responsive-4by3">
              <iframe class="embed-responsive-item" :src="`/graph/${selected_graph}/${selected_content}`"> </iframe>
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
          position: [
            'overview',
            'devops and cloud technology',
            'information security',
            'it business and strategy',
            'it management',
            'network technology',
            'service and infrastructure',
            'software development',
            'storange and data'
          ]
        },
        {
          name: 'agriculture',
          active: false,
          disabled: true,
          position: []
        },
        {
          name: 'travel',
          active: false,
          disabled: true,
          position: []
        },
        {
          name: 'marketing',
          active: false,
          disabled: true,
          position: []
        }
      ],
      selected_career: [],
      selected_position: [],
      selected_content: '',
      selected_graph: 'snakey'
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
    },
    activePosition: function(position) {
      // prevent if same as selected
      if (position === this.selected_position) return;

      // update update state
      this.selected_position = position;
      this.selected_content = `${this.selected_career.name}/${this.selected_position}.html`;
    },

    activeGraph: function() {
      if (this.selected_graph == 'snakey') this.selected_graph = 'bar';
      else this.selected_graph = 'snakey';
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

  .content {
    position: relative;
    .graph-switch {
      position: absolute;
      right: 0;
      top: -30px;
      cursor: pointer;
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
    }
  }

  .menu {
    > div {
      margin-bottom: 30px;
    }
    button {
      border-width: 3px;
      min-width: 100%;
      text-transform: capitalize;
      &:not(.active) {
        background: none;
      }
      &.disabled {
        cursor: auto;
      }
    }
  }
}
</style>
