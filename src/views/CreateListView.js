import ListView from './ListView';
import { h } from 'vue';
export default function creacteListView(name) {
  return {
    // 재사용될 컴포넌트 인스턴스 옵션
    name: name,
    created() {
      this.$store.dispatch('START_SPINNER');
      // 로딩바 테스트
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
    render() {
      return h(ListView);
    },
  };
}
