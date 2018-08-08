<template>
  <div class="tb-skeleton" :class="classList" :style="styleList">
    <slot></slot>
  </div>
</template>

<script>
  const PREFIX = 'c-skeleton__tb';
  export default {
    name: 'tb-skeleton',
    props: {
      shape: {type: String}, //circle or radius or default
      theme: {type: [String, Number]},
      aspectRatio: {type: [String, Number], default: 1}, //长宽比
      width: {type: [String, Number], default: '100%', require: false}, //百分比
      height: {type: [String, Number], require: false},
      bgColor: {type: [String]}
    },
    data() {
      return {
        curTheme: this.theme,
        curBgColor: this.bgColor,
        curShape: this.shape,
      }
    },
    computed: {
      curHeight () {
        if (!isNaN(this.height)) {
          return `${this.height}px`
        }
        return this.height
      },
      curWidth () {
        if (!isNaN(this.width)) {
          return `${this.width}px`
        }
        return this.width
      },
      classList() {
        let classList = []
        classList.push(PREFIX)

        //set shape
        if (this.curShape === 'circle') {
          classList.push(`${PREFIX}--circle`)
        } else if (this.curShape === 'radius') {
          classList.push(`${PREFIX}--radius`)
        }

        //set theme
        if (this.curTheme === 'opacity') {
          classList.push(`${PREFIX}--opacity`)
        } else if (this.curTheme === 'gradient') {
          classList.push(`${PREFIX}--gradient`)
        }
        return classList
      },
      styleList() {
        return {
          'padding-bottom': this.curHeight || `${this.aspectRatio * 100}%`,
          'width': this.curWidth,
          'background-color': this.curBgColor,
        }
      }
    },
    created() {
      // update style
      this.$on('set-style', (style) => {
        if (!this.theme && style.theme) {
          this.curTheme = style.theme
        }
        if (style.bgColor && !this.bgColor) {
          this.curBgColor = style.bgColor
        }

        if (style.shape && !this.curShape) {
          this.curShape = style.shape
        }
      })
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "../styles/skeleton.scss";
</style>
