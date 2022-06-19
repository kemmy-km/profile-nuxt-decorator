<template>
  <div>
    <TheStackHeader />
    <v-container>
      <v-card outlined class="">
        <v-card-title>スキル詳細</v-card-title>
        <!-- <v-row>  </v-row> -->
      </v-card>
    </v-container>

    <v-container>
      <div class="card-wrapper">
        <div v-for="(skill, i) in awsSkills" :key="i" class="card">
          <div class="card-text">
            {{ skill.title }}
          </div>
          <v-spacer />
          <p>
            {{ skill.other }}
          </p>
        </div>
        <!-- クリックしたスキルのskill.codeに応じてフォームに表示させる内容を動的に表示させたい -->
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
// import { AwsSkillRequest } from "~/types/api/skill"
import { AWS_SKILL } from "~/constants/default/awsSkill"
import { SKILL } from "~/constants/default/skill"

@Component
export default class SkillForm extends Vue {
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

  get awsSkills() {
    return AWS_SKILL
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
