<template>
  <div>
    <!-- オーバーレイ -->
    <transition name="fade">
      <div v-if="isLoaded" :class="style.overlay" @click="removeStack" />
    </transition>
    <!-- コンテンツ -->
    <transition name="right">
      <!-- <v-card v-if="isLoaded" :class="style.content" :width="widthPercentage"> -->
      <v-card v-if="isLoaded" :class="style.content">
        <component :is="component" />
      </v-card>
    </transition>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { MOBILE_SCREEN_SIZE } from "~/constants/config"
import { appStore } from "~/store"

@Component
export default class TheStackNavigation extends Vue {
  // props: {
  //   component: {
  //     type: String,
  //   },
  //   index: {
  //     type: Number,
  //   },
  //   width: {
  //     type: String,
  //   },
  // },

  //
  // Prop
  //
  // @Prop({ default: null })
  @Prop({})
  component = ""

  @Prop({})
  index = 0

  @Prop({})
  width = ""

  //
  // Data
  //

  isLoaded = false

  //
  // Computed
  //
  // computed: {
  //   isTopPage: () => {
  //     return (this.index || 0) + 1 === appStore.getStackPage
  //   },

  //   style: () => {
  //     return {
  //       overlay: this.isTopPage ? "c-stack-navigation__overlay" : "c-stack-navigation__overlay__back",
  //       content: this.isTopPage ? "c-stack-navigation__content" : "c-stack-navigation__content__back",
  //     }
  //   },
  // },
  get getStackComponents() {
    return appStore.getStackComponents
  }

  get isTopPage() {
    return (this.index || 0) + 1 === appStore.getStackPage
  }

  get style() {
    return {
      overlay: this.isTopPage ? "c-stack-navigation__overlay" : "c-stack-navigation__overlay__back",
      content: this.isTopPage ? "c-stack-navigation__content" : "c-stack-navigation__content__back",
    }
  }

  get widthPercentage() {
    if (this.$vuetify.breakpoint.width <= MOBILE_SCREEN_SIZE) {
      return "100%"
    }
    if (this.width) {
      return this.width === "narrow" ? "50%" : "80%"
    }
    return this.isTopPage ? "80%" : "100%"
  }

  //
  // Method
  //

  mounted() {
    this.isLoaded = true
  }

  removeStack() {
    appStore.removeStack()
  }
}
</script>

<style lang="scss" scoped>
.c-stack-navigation {
  &__content {
    @include stack;
    z-index: 200;
    &__back {
      @include stack;
    }
    //
    background: #1e1e1e !important;
  }

  &__overlay {
    @include overlay;
    z-index: 199;
    &__back {
      @include overlay;
    }
  }
}
</style>
