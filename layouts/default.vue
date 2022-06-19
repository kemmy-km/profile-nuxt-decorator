<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <div class="d-flex list-header">
        <h2>title</h2>
        <v-btn @click.stop="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-list>
        <v-list-item v-for="(item, i) in sideMenu" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>

    <!-- <TheStackNavigation
      v-for="(stackComponent, index) in stackComponents"
      :key="index"
      :component="stackComponent.component"
      :index="index"
    /> -->

    <!-- <TheDialog v-if="isShowDialog" /> -->
    <!-- <TheOverlay v-if="isShowOverlay" /> -->

    <v-main>
      <v-container class="d-flex">
        <div class="l-default">
          <div class="l-default__side">
            <TheSideMenu />
            <!-- <p>getters: {{ $store.getters["SkillStore/getTest"] }}</p> -->
            <!-- <p>getters: {{ $store.getters["SkillStore/getHoge"] }}</p> -->
            <p>computed:getTest()の戻り値: {{ getTest }}</p>
            <p>computed: {{ getHoge }}</p>

            <!-- <p>
              {{ $store.getters["SkillStore/getItems"][0] }}
              {{ $store.getters["SkillStore/getItems"][0].name }}
              {{ $store.getters["SkillStore/getItems"][1] }}
              {{ $store.getters["SkillStore/getItems"][1].price }}
            </p> -->
          </div>
        </div>
        <div class="l-default__main">
          <Nuxt />
        </div>
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator"
// import TheSideMenu from "~/components/organisms/TheSideMenu.vue"
// import appStore from "~/store"
// import { getTest, getHoge } from "~/store/SkillStore"
// import { skillStore } from "~/store/SkillStore"
import { skillStore } from "~/store"
import { SIDE_MENU } from "~/constants/config"

@Component
export default class default1 extends Vue {
  //
  // Data
  //
  clipped = false
  drawer = false
  fixed = false
  items = [
    {
      icon: "mdi-apps",
      title: "Welcome",
      to: "/",
    },
    {
      icon: "mdi-chart-bubble",
      title: "About",
      to: "/about",
    },
    {
      icon: "mdi-chart-bubble",
      title: "Skill",
      to: "/skill",
    },
    {
      icon: "mdi-chart-bubble",
      title: "Portfolio",
      to: "/portfolio",
    },
    {
      icon: "mdi-chart-bubble",
      title: "Contact",
      to: "/contact",
    },
  ]

  miniVariant = false
  right = true
  rightDrawer = false
  title = "KM Profile"
  // isSideOpen= true
  open = false

  //
  // Computed
  //
  sideMenu() {
    return SIDE_MENU
  }

  get getTest() {
    // return this.$store.getters["SkillStore/getTest"]
    return skillStore.getTest
  }

  get getHoge() {
    return skillStore.getHoge
  }
  // computed: {
  //   getTest() {
  //     return this.$store.getters["SkillStore/getTest"]
  //   },
  //   getHoge() {
  //     return this.$store.getters["SkillStore/getHoge"]
  //   },
  // },

  // computed() {
  // stackComponents: () => {
  //   return AppStore.getStackComponents ? AppStore.getStackComponents : []
  //   return this.$store.getters["getStackComponents"] ? $store.getters["getStackComponents"] : []
  // },
  // isShowDialog: () => {
  //   return !!AppStore.getDialog.length
  // },
  // },

  mounted() {}

  // methods: {
  //   toggleSideMenu: (isSideOpen) => {
  //     this.isSideOpen = isSideOpen
  //   },
  // },
}
</script>

<style lang="scss">
.list-header {
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
}
</style>
