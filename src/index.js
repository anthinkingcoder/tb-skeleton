import {Col, Row} from './components'
import './styles/grid.scss'
const install = function (Vue) {
  Vue.component('Col', Col);
  Vue.component('Row', Row);
  Vue.component('iCol', Col);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Col,
  Row
};
