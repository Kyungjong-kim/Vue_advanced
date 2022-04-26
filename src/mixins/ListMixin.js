export default {
  //resusable component option
  // created() {
  //   this.$store.dispatch('START_SPINNER');
  //     this.$store
  //       .dispatch('FETCH_LIST', this.$route.name)
  //       .then(() => {
  //         console.log('5');
  //         console.log('fetched');
  //         this.$store.dispatch('END_SPINNER');
  //       })
  //       .catch((error) => console.log(error));
  // }, 데이터는 라우터가드를 통해 컨트롤
  mounted() {
    this.$store.dispatch('END_SPINNER');
  },
}