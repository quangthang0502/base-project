<template>
  <div id="app" :class="theme">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import { getRepo } from './services'

  const theme = namespace('theme')

  @Component
  export default class App extends Vue {
    @theme.State('theme') theme!: string

    async created(): Promise<void> {
      const a = getRepo('example', 'example')
      const data = await a?.all()
      console.log(data)
    }
  }
</script>

<style lang="scss"></style>
