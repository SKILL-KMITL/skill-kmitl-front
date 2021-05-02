<template>
  <div class="skill-section bg-deep">
    <div class="container-fluid mt-5">
      <div class="title">
        <h1>SKILLS MAPPING</h1>
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
        <div class="col-12 text-right">
          <div class="graph-date">
            {{ selected_career.updated }}
            | {{ selected_career.source }}
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
          name: 'IT',
          active: true,
          disabled: false,
          soft_skill: true,
          source: 'CompTIA Certification Roadmap',
          updated: '15/11/2020 (3732)',
          position: [
            'overview',
            'education',
            'DevOps and Cloud Technology',
            'Information Security',
            'IT Business and Strategy',
            'IT Management',
            'Network Technology',
            'Services and Infrastructure',
            'Software Development',
            'IT Storage and Data'
          ]
        },
        {
          name: 'Engineering and Technology',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '4/4/2020 (3391)',
          position: [
            'overview',
            'education',
            'Aerospace Engineers',
            'Automotive Engineers',
            'Bioengineers and Biomedical Engineers',
            'Computer Hardware Engineers',
            'Electrical Engineers',
            'Energy Engineers',
            'Fuel Cell Engineers',
            'Health and Safety Engineers',
            'Industrial Engineers',
            'Manufacturing Engineers',
            'Materials Engineers',
            'Mechanical Engineers',
            'Mechatronics Engineers',
            'Microsystems Engineers',
            'Nuclear Engineers',
            'Petroleum Engineers',
            'Photonics Engineers',
            'Radio Frequency and Identification Device',
            'Robotics Engineers',
            'Validation Engineers'
          ]
        },
        {
          name: 'Agriculture',
          source: 'AgCentric: Career Cluster',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '10/3/2021 (2144)',
          position: [
            'overview',
            'education',
            'Agribusiness',
            'Animal',
            'Biotechnology',
            'Environmental',
            'Food',
            'Natural resources',
            'Plant',
            'Power, Structural, Technical'
          ]
        },
        {
          name: 'Arts',
          source: 'The Art Career Project',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '28/3/2021 (2125)',
          position: [
            'overview',
            'education',
            'Journalism and Broadcasting',
            'Performing Arts',
            'Printing Technology',
            'Visual Arts',
            'Video Game Designers'
          ]
        },
        {
          name: 'Travel & Tourism',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '5/4/2020 (868)',
          position: [
            'overview',
            'education',
            'Reservation and Transportation',
            'Tour Guides and Escorts',
            'Travel Agents',
            'Travel Guides'
          ]
        },
        {
          name: 'Legal Services',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '5/4/2020 (1642)',
          position: [
            'overview',
            'education',
            'Administrative Law Judges',
            'Arbitrators, Mediators, and Conciliators',
            'Court Reporters',
            'Judicial Law Clerks',
            'Lawyers',
            'Legal Secretaries',
            'Magistrate Judges',
            'Paralegals and Legal Assistants',
            'Title Examiners and Abstractors'
          ]
        },
        {
          name: 'Finance',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '8/4/2020 (2422)',
          position: [
            'overview',
            'education',
            'Accountants and Auditors',
            'Bill and Account Collectors',
            'Brokerage Clerks',
            'Budget Analysts',
            'Credit Analysts',
            'Credit Authorizers',
            'Financial Managers',
            'Fraud Examiners',
            'Investment Analysts',
            'Loan Officers',
            'Personal Financial Advisors',
            'Personal Financial Planners',
            'Securities and Commodities',
            'Tax Preparers',
            'Treasurers and Controllers'
          ]
        },
        {
          name: 'Architecture',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '10/4/2020 (3407)',
          position: [
            'overview',
            'education',
            'Architects',
            'Architectural',
            'Brickmasons and Blockmasons',
            'Carpenters',
            'Civil Engineering and Technicians',
            'Construction Equipment Operators',
            'Construction Laborers',
            'Cost Estimators',
            'Crane and Tower Operators',
            'Drywall and Ceiling Tile Installers',
            'Electricians',
            'First-Line Supervisors of Construction',
            'Floor Layers',
            'Geodetic Surveyors',
            'Insulation Workers',
            'Interior Designers',
            'Landscape Architects',
            'Mining Machine Operators',
            'Painters',
            'Paving and Tamping Operators',
            'Pipelayers',
            'Plasterers and Stucco Masons',
            'Roofers',
            'Surveying and Mapping Technicians',
            'Transportation Engineers'
          ]
        },
        {
          name: 'Education and Training',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '15/4/2020 (3550)',
          position: [
            'overview',
            'education',
            'Kindergarten School Teachers',
            'Elementary School Teachers',
            'Adapted Physical Education',
            'Adult Basic Education',
            'Agricultural Sciences Teachers',
            'Anthropology and Archeology Teachers',
            'Architecture Teachers',
            'Art, Drama, and Music Teachers',
            'Atmospheric, Earth and Space Sciences Teachers',
            'Biological Science Teachers',
            'Business Teachers',
            'Chemistry Teachers',
            'Coaches and Scouts',
            'Communications Teachers',
            'Computer Science Teachers',
            'Economics Teachers',
            'Education Teachers',
            'Engineering Teachers',
            'English Language and Literature Teachers',
            'Family and Consumer Sciences Teachers',
            'Geography Teachers',
            'History Teachers',
            'Law Enforcement Teachers',
            'Law Teachers',
            'Mathematical Science Teachers'
          ]
        },
        {
          name: 'Science and Mathematics',
          active: false,
          disabled: false,
          soft_skill: true,
          source: 'O*NETOnLine',
          updated: '22/4/2020 (3741)',
          position: [
            'overview',
            'education',
            'Anthropologists and Archeologists',
            'Astronomers',
            'Atmospheric and Space Scientists',
            'Biochemists and Biophysicists',
            'Bioinformatics Scientists',
            'Cartographer',
            'Chemists',
            'Clinical Data Managers',
            'Conservation Scientists',
            'Economists',
            'Geographers',
            'Geoscientists',
            'Historians',
            'Hydrologists',
            'Materials Scientists',
            'Mathematicians',
            'Microbiologists',
            'Photogrammetrist',
            'Physicists',
            'Precision Agriculture Technicians',
            'Quality Control Analysts',
            'Statisticians',
            'Survey Researchers'
          ]
        },
        {
          name: 'Marketing',
          source: 'CareerTech: Marketing',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '1/5/2021 (3407)',
          position: [
            'overview',
            'education',
            'Advertising and Promotions Managers',
            'Advertising Sales Agents',
            'Cashiers',
            'Counter and Rental Clerks',
            'Demonstrators and Product Promoters',
            'Door-to-Door Sales Workers',
            'Driver and Sales Workers',
            'First-Line Supervisors of Non-Retail Sales',
            'First-Line Supervisors of Retail Sales',
            'Marketing Managers',
            'Parts Salespersons',
            'Property, Real Estate Managers',
            'Public Relations Managers',
            'Public Relations Specialists',
            'Real Estate Brokers',
            'Retail Salespersons',
            'Sales Engineers',
            'Sales Managers',
            'Securities and Commodities Sales Agents',
            'Telemarketers'
          ]
        },
        {
          name: 'Transportation',
          source: 'O*NETOnLine',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '23/4/2021 (3113)',
          position: [
            'overview',
            'education',
            'Air Traffic Controllers',
            'Bus Drivers',
            'Dispatchers',
            'Heavy and Tractor-Trailer Truck Drivers',
            'Industrial Truck and Tractor Operators',
            'Light Truck Drivers',
            'Locomotive Engineers',
            'Logisticians',
            'Logistics Analysts',
            'Logistics Engineers',
            'Rail Car Repairers',
            'Rail Yard Engineers',
            'Railroad Brake, Signal, and Switch Operators',
            'Railroad Conductors and Yardmasters',
            'Rail-Track Laying and Maintenance',
            'Ship Engineers',
            'Tank Car, Truck, and Ship Loaders',
            'Taxi Drivers',
            'Traffic Technicians',
            'Transportation and Distribution Managers'
          ]
        },
        {
          name: 'Health Science',
          source: 'O*NETOnLine',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '27/4/2021 (2705)',
          position: [
            'overview',
            'education',
            'Allergists and Immunologists',
            'Anesthesiologists',
            'Audiologists',
            'Bioengineers',
            'Cardiovascular Technologists and Technicians',
            'Chiropractors',
            'Cytogenetic Technologists',
            'Cytotechnologists',
            'Dentists',
            'Dermatologists',
            'Diagnostic Medical Sonographers',
            'Epidemiologists',
            'Histotechnologists',
            'Magnetic Resonance Imaging Technologists',
            'Medical and Clinical Laboratory',
            'Medical Scientists',
            'Neurodiagnostic Technologists',
            'Nuclear Medicine Technologists',
            'Ophthalmic Medical Technologists'
          ]
        },
        {
          name: 'Business Management & Administration',
          source: 'O*NETOnLine',
          active: false,
          disabled: false,
          soft_skill: true,
          updated: '2/5/2021 (792)',
          position: [
            'overview',
            'education',
            'Chief Executives',
            'Chief Sustainability Officers',
            'Compliance Managers',
            'General and Operations Managers',
            'Investment Fund Managers',
            'Loss Prevention Managers'
          ]
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
      margin-top: 10px;
      font-size: 13px;
      font-weight: lighter;
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
