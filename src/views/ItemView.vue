<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`">
                {{fetchedItem.user}}
          </router-link>
          </template>
        <template v-slot:time>{{'Posted '+ fetchedItem.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <!--사용자 상세정보-->
      <div>
        <div>
          <p v-html="fetchedItem.content"></p>
        </div>
      </div>
    </section>
    <section>
      <!-- 댓글 -->
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created(){
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>