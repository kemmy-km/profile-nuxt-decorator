<template>
  <div>
    <h2>
      <span class="">メニュー</span>
    </h2>
    <!-- <ul>
      <li v-for="(item, i) in sideMenu" :key="i">
        <nuxt-link :to="item.link">
          <span class="text">{{ item.label }}</span>
        </nuxt-link>
      </li>
    </ul> -->
    <v-list>
      <v-list-item v-for="(item, i) in sideMenu" :key="i" :to="item.link" router exact>
        <v-list-item-content>
          <v-list-item-title v-text="item.label" />
        </v-list-item-content>
        <!-- <nuxt-link :to="item.link"> -->
        <!-- {{ item.label }} -->
        <!-- </nuxt-link> -->
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator"
import { SIDE_MENU } from "~/constants/config"

@Component
export default class TheSideMenu extends Vue {
  //
  // Computed
  //
  get sideMenu() {
    return SIDE_MENU
  }
}
</script>

<style lang="scss">
@import "/assets/index.scss";
</style>
