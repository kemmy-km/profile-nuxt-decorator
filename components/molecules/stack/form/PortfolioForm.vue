<template>
  <div>
    <TheStackHeader />
    <v-container>
      <v-card outlined class="">
        <v-card-title>ポートフォリオ詳細</v-card-title>
        <!-- <v-row>  </v-row> -->
      </v-card>
    </v-container>

    <v-container>
      <div class="card-wrapper">
        <!-- <div v-for="(skill, i) in awsSkills" :key="i" class="card">
          <div class="card-text">
            {{ skill.title }}
          </div>
          <v-spacer />
          <p>
            {{ skill.other }}
          </p>
        </div> -->
        <div v-for="(portfolio, i) in portfolios" :key="i" class="card">
          <div class="card-text">
            {{ portfolio.title }}
          </div>
          <v-spacer />
          <p>
            {{ portfolio.other }}
          </p>
          <p>
            {{ portfolio.useSkill }}
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
// import { AwsSkillRequest } from "~/types/api/skill"
// import { AWS_SKILLS } from "~/constants/default/awsSkill"
import { PORTFOLIO } from "~/constants/default/portfolio"

@Component
export default class PortfolioForm extends Vue {
  //
  // Data
  //
  title = "aaaa"
  service = ""
  content = ""
  //
  // computed
  //
  // get awsSkills() {
  //   return AWS_SKILLS
  // }

  get portfolios() {
    return PORTFOLIO
  }
  //
  // methods
  //
  // data: AwsSkillRequest = {
  //   // title: deepCopy(this.title),
  //   title: this.title,
  //   service: this.service,
  //   content: this.content,
  // }
}
</script>

<style lang="scss" scoped>
</style>
