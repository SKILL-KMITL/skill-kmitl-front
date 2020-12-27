import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters, mapMutations } from 'vuex';

@Component({
  // computed: mapGetters(['DATA_USER']),
  methods: {
    // ...mapActions(['CALL_USER_DATA', 'deleteStudents']),
    // ...mapMutations(['UPDATE_USER'])
  }
})
export default class UserMix extends Vue {}
