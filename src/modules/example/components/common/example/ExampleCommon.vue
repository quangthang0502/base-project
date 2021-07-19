<template>
  <div class="example-common">example</div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({ components: {} })
  export default class ExampleCommon extends Vue {}
</script>
<style lang="scss" scoped>
  .example-common {
  }
</style>
