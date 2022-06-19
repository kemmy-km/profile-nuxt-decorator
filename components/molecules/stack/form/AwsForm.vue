<template>
  <div>
    <v-container>
      <v-card outlined class="">
        <v-card-title>AWSスキル</v-card-title>
        <v-row> aaaa </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { AwsSkillRequest } from "~/types/api/skill"

@Component
export default class AwsForm extends Vue {
  //
  // Data
  //
  title = "aaaa"
  service = ""
  content = ""
  //
  // computed
  //
  //
  // methods
  //
  data: AwsSkillRequest = {
    // title: deepCopy(this.title),
    title: this.title,
    service: this.service,
    content: this.content,
  }
}
</script>

<style lang="scss" scoped>
</style>
