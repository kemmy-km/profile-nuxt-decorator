<template>
  <v-select
    :id="id"
    :items="items"
    :rules="rules"
    :disabled="disabled"
    class="g-select"
    dense
    @input="$emit('input', $event)"
  >
    <template #label> {{ label }}<span v-if="required" style="color: red"> *</span></template>
  </v-select>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component
export default class VSelectField extends Vue {
  //
  //
  //
  @Prop({ default: "" })
  id

  @Prop({ default: "" })
  label

  @Prop({ default: "" })
  option

  @Prop({ default: "" })
  placeholder

  @Prop({ type: Boolean, default: false })
  required

  @Prop({ type: Boolean, default: false })
  disabled

  //
  // Data
  //
  menuProps = {
    maxHeight: 500,
  }

  ruleOptions = {
    required: (value) => !!value || "必須項目です。",
  }

  //
  //
  //
  get isViewOnly() {
    return authStore.isViewOnly
  }

  get items() {
    switch (this.option) {
      case "":
        return aaa
    }
  }

  get rules() {
    if (this.required) {
      return [this.ruleOptions.required]
    }
  }
}
</script>

<style lang="scss">
</style>
