<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      theme: {type: [String, Number], default: 'normal'},
    },
    data() {
      return {}
    },
    mounted() {
      //通知tb-Skeleton设置theme
      this.$children.forEach((children) => {
        console.info(children)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
