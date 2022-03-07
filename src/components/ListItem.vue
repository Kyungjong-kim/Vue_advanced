<template>
  <div>
    <ul class="list">
      <li class="post" v-for="item in listItems" v-bind:key="item.id">
        <div class="points">{{item.points || 0}}</div>
        <div>
          <p class="title">
            <template v-if="item.domain">
            <a :href="item.url">
              {{item.title}}
            </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{item.title}}
              </router-link>
            </template>
          </p>
          <small>
            {{item.time_ago}} by 
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-test">{{item.user}}</router-link>
            <a v-else :href="item.url">{{item.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  created(){
    const name = this.$route.name;
    if(name === 'ask') {
      this.$store.dispatch('FETCH_ASK');
    } else if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (name === 'jobs'){
      this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed:{
    listItems() {
      const name = this.$route.name;
      if(name === 'ask') {
       return this.$store.state.ask;
    } else if (name === 'news') {
      return this.$store.state.news;
    } else if (name === 'jobs'){
      return this.$store.state.jobs;
    }
    }
  }
}
</script>

<style scoped>
  .list {
    padding: 0;
    margin: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    display: flex;
    align-items: center;
    width: 80px;
    height: 60px;
    justify-content: center;
    color: #42b883;
  }
  .title {
    margin: 0;
  }
  .link-text {
    color: #828282;
  }
</style>