<template>
  <div class="c-system-button">
    <v-btn depressed class="c-system-button__main-btn" @click="$emit('click'), $event">
      {{ label }}
    </v-btn>
    <v-menu open-on-hover offset-y bottom left>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" class="c-system-button__dropdown-btn" v-on="on">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" link @click="item.action">
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

script.<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class SystemButton extends Vue {
  @Prop({ type: String, default: "" })
  label!: string

  @Prop()
  items!: { label: string; action: () => void }[]
}
</script>

<style lang="scss" scoped>
.c-system-button {
  display: flex;
  height: 44px;
  button {
    height: inherit !important;
  }
  &__main-btn {
    width: 112px !important;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    border-radius: 5px 0 0 5px;
  }
  &__dropdown-btn {
    min-width: 40px !important;
    width: 40px;
    border-left: solid 0.1px #1e80d0;
    border-radius: 0 5px 5px 0;
    box-shadow: none;
  }
}
</style>
