<template>
  <div :class="rowClassList" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  const ROW_PREFIX = 'simple-row';
  const ROW_FLEX_PREFIX = `${ROW_PREFIX}-flex`;
  export default {
    name:ROW_PREFIX,
    props: {
      gutter: {
        type: Number
      },
      type: {
        type: String,
        required: false,
        validator: function (value) {
          return ['', 'flex'].indexOf(value) !== -1;
        }
      },
      justify: {
        type: String,
        default: 'start',
        validator: function (value) {
          return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) !== -1;
        },
      },
      align: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
        },
      },
      className: {
        type: String
      },
    },
    data() {
      return {
      }
    },
    computed: {
      rowClassList() {
        let list = [this.type == 'flex' ? ROW_FLEX_PREFIX : ROW_PREFIX];
        if (this.type === 'flex') {
          list.push({
            [`${ROW_FLEX_PREFIX}-${this.justify}`]: this.justify,
            [`${ROW_FLEX_PREFIX}-${this.align}`]: this.align,
          })
        }
        list.push({[`${this.className}`]: this.className});
        return list;
      },
      rowStyle() {
        return this.gutter !== 0 ? {
          'margin-left': `${-this.gutter/2}px`,
          'margin-right': `${-this.gutter/2}px`
        } : {};
      }
    },
    mounted() {

    },
    methods: {
      updateGutter() {
        this.$children.forEach(children => {
          let componentName = children.$options.name;
          if (componentName === 'simple-col') {
            children.gutter = this.gutter;
          }
        });
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*@svg 1px-border {*/
    /*height: 2px;*/
    /*@rect {*/
      /*fill: var(--color, black);*/
      /*width: 100%;*/
      /*height: 50%;*/
    /*}*/
  /*}*/
</style>
