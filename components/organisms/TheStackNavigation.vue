<template>
  <div>
    <!-- オーバーレイ -->
    <transition name="fade">
      <!-- <div v-if="isLoaded" :class="style.overLay" @click="removeStack" /> -->
    </transition>
    <!-- コンテンツ -->
    <transition name="right">
      <v-card v-if="isLoaded" :class="style.content" :width="widthPercentage">
        <component :is="component" />
      </v-card>
    </transition>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator"
// import { appStore } from "~/store/AppStore"
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

  // get widthPercentage() {
  //   if (true) {
  //     return 100
  //   }
  // }

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

<style lang="scss">
.c-stack-navigation {
  &__content {
    // @include stack z-index: 200;
    &__back {
      // @include stack;
    }
    //
    background: blue !important;
  }

  &__overlay {
    // @include overlay;
    z-index: 199;
    &__back {
      // @include overlay;
    }
  }
}
</style>
