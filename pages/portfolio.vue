<template>
  <div>
    <div class="container">
      <h2 class="heading__lv2">portfolio</h2>

      <div class="card-wrapper">
        <div v-for="(portfolio, i) in portfolios" :key="i" class="card">
          <div class="card-text">
            {{ portfolio.title }}
          </div>
          <v-spacer />
          <!-- <div class="img-wrapper">
            <img src="/image/icon__aws.jpeg" alt="" />
          </div> -->
          <p>
            {{ portfolio.other }}
          </p>
          <p>
            {{ portfolio.useSkill }}
          </p>
          <!-- <v-btn class="" outlined tile depressed @click="$emit('', $event)"> 詳細を見る </v-btn> -->
          <v-btn class="" outlined tile depressed @click="portfolio;"> 詳細を見る </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { PORTFOLIO } from "~/constants/default/portfolio"
import { appStore, portfolioStore } from "~/store"

@Component
export default class portfolio extends Vue {
  //
  // computed
  //
  get portfolios() {
    return PORTFOLIO
  }

  //
  // Method
  //

  pushStack(component: string) {
    appStore.pushStack({ component })
  }

  /** 詳細を見るクリック時にポートフォリオを表示 */
  pushStackPortfolio(portfolio: any) {
    portfolioStore.setPortfolio(portfolio)
    this.pushStack("PortfolioForm")
  }
}
</script>

<style lang="scss">
</style>
