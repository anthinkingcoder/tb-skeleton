import {TbSkeleton,Skeleton} from './components'
import "./styles/skeleton.scss";
const install = function (Vue) {
  Vue.component('TbSkeleton', TbSkeleton);
  Vue.component('Skeleton', Skeleton)
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


module.exports.default = module.exports = {
  install,
  TbSkeleton,
  Skeleton
}
