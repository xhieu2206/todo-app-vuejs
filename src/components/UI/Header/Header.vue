<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-bottom: 2em;
  }
</style>
