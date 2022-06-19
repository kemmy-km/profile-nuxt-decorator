<template>
  <v-list class="g-form-navigation__header">
    <v-btn class="g-form-navigation__header__icon" icon @click="removeStack">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-list-item-content>
      <v-list-item-title class="g-h3"> {{ title }} </v-list-item-title>
    </v-list-item-content>
    <v-spacer />
    <!-- <v-btn>
      {{ subBtnLabel }}
    </v-btn> -->
  </v-list>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { appStore } from "~/store"

@Component
export default class TheStackHeader extends Vue {
  //
  // Prop
  //
  @Prop({ default: "" })
  title

  //
  // Computed
  //

  //
  // Method
  //
  removeStack() {
    appStore.removeStack()
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/foundation/base";
</style>
