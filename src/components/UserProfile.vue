<template>
        <div class="user-container">
            <div>
              <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
              <div>
              {{userInfo.id}}
              </div>
              <div class="time">
                {{userInfo.created}}
              </div>
             </div>
        </div>
</template>

<script>
export default {
  computed: {
    userInfo(){
      return this.$store.state.user
    }
  },
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