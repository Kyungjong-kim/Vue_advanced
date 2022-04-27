import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    // $_ 제공되는 플러그인의 prefix 스타일가이드
  }
}