import {TbSkeleton, Skeleton} from './components'

const install = function (Vue) {
  Vue.component('TbSkeleton', TbSkeleton);
  Vue.component('Skeleton', Skeleton)
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  TbSkeleton,
  Skeleton
}

export default {
  install,
  TbSkeleton,
  Skeleton
}
