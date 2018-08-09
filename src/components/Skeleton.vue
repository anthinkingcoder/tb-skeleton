<template>
  <div class="skeleton">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'skeleton',
    props: {
      theme: {type: [String, Number], default: 'normal'},
      bgColor: {type: [String]},
      shape: {type: [String]},
      duration: {type: [Number,String]} //动画时长
    },
    data() {
      return {}
    },
    mounted() {
      //通知tb-Skeleton设置theme
      this.broadcastChildren(this, 'tb-skeleton', 'set-style')
    },
    methods: {
      broadcastChildren(el, componentName, eventName) {
        let $children = el.$children
        if ($children && $children.length > 0) {
          $children.forEach((child) => {
            let name = child.$options.name
            if (name === componentName) {
              child.$emit.apply(child, [eventName, {'theme': this.theme, 'bgColor': this.bgColor, 'shape': this.shape,'duration': this.duration}])
            } else if (name !== 'skeleton') {
              this.broadcastChildren(child, componentName, eventName)
            }
          })
        }
      }
    }
  }
</script>

<style>

</style>
