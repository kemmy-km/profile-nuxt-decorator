<template>
  <div>
    <h2 class="heading__lv2">Skill</h2>

    <div class="container">
      <h2 class="heading__lv2">Skill</h2>

      <div class="card-wrapper">
        <div v-for="skill in skills" :key="skill.code" class="card">
          <div class="card-text">{{ skill.title }}</div>
          <v-spacer />
          <div class="img-wrapper">
            <img src="~/assets/image/icon__aws.jpeg" alt="" />
          </div>
          <p>
            {{ skill.other }}
          </p>
          <v-btn class="" outlined tile depressed @click="pushStackSkill(skill)"> 詳細を見る </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator"
import { SKILL } from "~/constants/default/skill"
import { appStore } from "~/store"
// import { skillStore } from "~/store"

@Component
export default class Skill extends Vue {
  //
  // Computed
  //
  // get items() {
  //   return SKILL
  // }
  get skills() {
    return SKILL
  }

  //
  // Method
  //
  pushStack(component) {
    appStore.pushStack({ component })
  }

  /** 詳細ボタンのクリック時に、詳細フォームを開く */
  pushStackAws() {
    this.pushStack("AwsForm")
    // this.pushStack("SkillForm")
  }

  pushStackSkill() {
    this.pushStack("SkillForm")
  }

  /**  */
  switchOverlay() {
    appStore.switchOverlay(true)
  }

  // computed: {
  //   items: () => {
  //     return SKILL
  //   },
  // },
  // methods: {
  //   pushStack: (component) => {
  //     appStore.pushStack({ component })
  //   },
  //   pushStackAWS: () => {
  //     skillStore.getForm(false)
  //     this.pushStack("AwsForm")
  //   },
  // },
}
</script>

<style lang="scss">
</style>
