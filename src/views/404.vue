<template>
  <div class="not-found"></div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({ components: {} })
  export default class NotFound extends Vue {}
</script>
<style lang="scss" scoped>
  .not-found {
  }
</style>
