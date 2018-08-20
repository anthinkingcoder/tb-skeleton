<template>
  <div class="tb-skeleton" :class="classList" :style="styleList">
    <slot></slot>
  </div>
</template>

<script>
  const PREFIX = 'c-skeleton__tb';
  const DEFAULT_COLOR = '#dcdcdc'
  export default {
    name: 'tb-skeleton',
    props: {
      shape: {type: String}, //circle or radius or default
      theme: {type: [String, Number]},
      aspectRatio: {type: [String, Number], default: 0}, //长宽比
      width: {type: [String, Number], default: '100%', require: false}, //百分比
      height: {type: [String, Number], require: false},
      bgColor: {type: [String]},
      duration: {type: [Number, String]} //动画时长
    },
    data() {
      return {
        curTheme: this.theme,
        curBgColor: this.bgColor,
        curShape: this.shape,
        curDuration: this.duration
      }
    },
    computed: {
      curHeight() {
        if (!isNaN(this.height)) {
          return `${this.height}px`
        }
        return this.height
      },
      curWidth() {
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
        } else if (this.curTheme === 'flexible') {
          classList.push(`${PREFIX}--flexible`)
        } else if (this.curTheme === 'flex-outer') {
          classList.push(`${PREFIX}--flexouter`)
        } else if (this.curTheme === 'flex-inner') {
          classList.push(`${PREFIX}--flexinner`)
        }
        return classList
      },
      styleList() {
        let height = {}
        if (this.aspectRatio) {
          height['padding-bottom'] = `${this.aspectRatio * 100}%`
        } else {
          height['height'] = this.curHeight
        }
        return {
          ...height,
          'width': this.curWidth,
          'background-color': this.curBgColor,
          'animation-duration': this.curDuration ? `${this.curDuration}s` : ''
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

        if (style.duration && !this.curDuration) {
          this.curDuration = style.duration
        }
      })
    }
  }
</script>

<style>
</style>
