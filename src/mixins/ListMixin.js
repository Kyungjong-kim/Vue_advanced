export default {
  //resusable component option
  created() {
    this.$store.dispatch('START_SPINNER');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          this.$store.dispatch('END_SPINNER');
        })
        .catch((error) => console.log(error));
    }, 3000);
  },
}