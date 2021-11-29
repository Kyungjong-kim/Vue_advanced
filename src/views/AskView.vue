<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  created(){
    this.$store.dispatch('FETCH_ASK');
  },
  computed:{
    //#3 맵게터 사용법
    ...mapGetters([
      'fetchedAsk'
    ]),
    /*
    #1 맵스테이트 사용법
    ...mapState({
      ask: state => state.ask
    })
    #2 컴퓨티드 사용법
    ask() {
      return this.$store.state.ask
    }
    */
  }
}
</script>

<style>

</style>