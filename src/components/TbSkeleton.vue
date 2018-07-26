<template>
  <div  :class="classList" :style="styleList">
    <slot></slot>
  </div>
</template>

<script>
  const PREFIX = 'tb-skeleton';
  export default {
    name: 'tb-skeleton',
    props: {
      shape: {type: String, default: ''}, //circle or ''
      theme: {type: [String,Number], default: 'normal'},
      aspectRatio: {type: [String, Number], default: 1}, //长宽比
    },
    data() {
      return {}
    },
    computed: {
      classList() {
        let classList = []
        classList.push(PREFIX)
        if (this.shape === 'circle') {
          classList.push(`${PREFIX}--circle`)
        }
        if (this.theme === 'opacity') {
          classList.push(`${PREFIX}--opacity`)
        } else if (this.theme === 'gradient') {
          classList.push(`${PREFIX}--gradient`)
        }
        return classList
      },
      styleList() {
        return {
          'padding-bottom': `${this.aspectRatio * 100}%`
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "../styles/skeleton";
</style>
