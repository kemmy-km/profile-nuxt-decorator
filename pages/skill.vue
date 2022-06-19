<template>
  <div>
    <h2 class="heading__lv2">Skill</h2>

    <v-container class="card-wrapper">
      <v-card v-for="(item, i) in items" :key="i">
        <v-card-text> {{ item.title }} </v-card-text>
        <v-row>
          <v-col> </v-col>
        </v-row>

        <v-btn class="btn">詳細を見る</v-btn>
      </v-card>
    </v-container>

    <div class="container">
      <h2 class="heading__lv2">Skill</h2>
      <div class="card">
        <div class="card-text">AWS</div>
        <v-spacer />
        <v-btn class="" outlined tile depressed @click="$emit('', $event)"> 詳細を見る </v-btn>
      </div>
    </div>

    <hr />

    <div class="container">
      <h2 class="heading__lv2">Skill</h2>

      <div class="card-wrapper">
        <div v-for="(item, i) in items" :key="i" class="card">
          <div class="card-text">{{ item.title }}</div>
          <v-spacer />
          <div class="img-wrapper">
            <img src="~/assets/image/icon__aws.jpeg" alt="" />
          </div>
          <p>
            {{ item.other }}
          </p>
          <v-btn class="" outlined tile depressed @click="$emit('', $event)"> 詳細を見る </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { SKILL } from "~/constants/default/skill"
import { appStore } from "~/store"
// import { skillStore } from "~/store"

@Component
export default class Skill extends Vue {
  //
  // Computed
  //
  get items() {
    return SKILL
  }

  //
  // Method
  //
  pushStack(component: any) {
    appStore.pushStack({ component })
  }

  pushStackAWS() {
    // skillStore.getForm(false)
    this.pushStack("AwsForm")
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
@import "assets/foundation/_base.scss";
</style>
