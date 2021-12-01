<template>
  <div>
    <section>
      <!--질문 상세정보-->
      <div>
        <h2>{{fetchedItem.title}}</h2>
        <div class="user-container">
            <div>
              <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
              <router-link :to="`/user/${fetchedItem.user}`">
              {{fetchedItem.user}}
              </router-link>
              <div class="time">
                {{fetchedItem.time_ago}}
              </div>
             </div>
        </div>
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
import { mapGetters } from 'vuex';
export default {
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