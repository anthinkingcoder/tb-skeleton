<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'skeleton',
    props: {
      theme: {type: [String, Number], default: 'normal'},
      bgColor: {type: [String]},
      shape: {type: [String]}
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
              child.$emit.apply(child, [eventName, {'theme': this.theme, 'bgColor': this.bgColor, 'shape': this.shape}])
            } else if (name !== 'skeleton') {
              this.broadcastChildren(child, componentName, eventName)
            }
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
</style>
