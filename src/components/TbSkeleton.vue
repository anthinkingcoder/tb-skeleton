<template>
  <div :class="classList" :style="styleList">
    <slot></slot>
  </div>
</template>

<script>
  const PREFIX = 'tb-skeleton';
  export default {
    name: 'tb-skeleton',
    props: {
      shape: {type: String, default: ''}, //circle or ''
      theme: {type: [String, Number]},
      aspectRatio: {type: [String, Number], default: 1}, //长宽比
      width: {type: [String, Number], default: '100%', require: false},
      height: {type: [String, Number], require: false},
      bgColor: {type:[String]}
    },
    data() {
      return {
        curTheme: this.theme,
        curBgColor: this.bgColor
      }
    },
    computed: {
      classList() {
        let classList = []
        classList.push(PREFIX)
        if (this.shape === 'circle') {
          classList.push(`${PREFIX}--circle`)
        }
        if (this.curTheme === 'opacity') {
          classList.push(`${PREFIX}--opacity`)
        } else if (this.curTheme === 'gradient') {
          classList.push(`${PREFIX}--gradient`)
        }
        return classList
      },
      styleList() {
        return {
          'padding-bottom': this.height || `${this.aspectRatio * 100}%`,
          'width': this.width,
          'background-color': this.curBgColor
        }
      }
    },
    created() {
      this.$on('set-style', (style) => {
//        console.info(style)
        if (!this.theme && style.theme) {
          this.curTheme = style.theme
        }
        if (style.bgColor && !this.bgColor) {
          this.curBgColor = style.bgColor
        }
      })
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "../styles/skeleton";
</style>
