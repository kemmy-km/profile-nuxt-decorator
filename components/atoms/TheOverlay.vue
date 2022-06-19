<template>
  <div v-if="isLoaded" class="c-overlay" @click="removeOverlay" />
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator"
import { appStore } from "~/store"

@Component
export default class TheOverlay extends Vue {
  //
  // Data
  //
  isLoaded = false

  //
  // LifeCycle
  //
  mounted() {
    this.isLoaded = true
  }

  //
  // Method
  //
  removeOverlay() {
    appStore.switchOverlay(false)
  }
}
</script>

<style lang="scss" scoped>
.c-overlay {
  @include overlay;
  background: transparent;
  z-index: 4;
}
</style>
