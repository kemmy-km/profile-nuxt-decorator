<template>
  <v-textarea
    :label="label"
    :value="value"
    :rules="rules"
    autocomplete="off"
    dense
    :disabled="disabled"
    :rows="test"
    :class="classes"
    :suffix="isSuffix ? suffixString : ''"
    @input="$emit('input', $event)"
  >
  </v-textarea>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class VTextField extends Vue {
  // Props
  @Prop({ default: "" })
  label!: string

  @Prop({ default: "" })
  value!: string

  @Prop({ type: Boolean, default: false })
  disabled!: boolean

  @Prop({ type: Number, required: false })
  rows!: Number

  @Prop({ default: "" })
  option!: string

  @Prop({ type: Boolean, default: false })
  required!: boolean

  @Prop({ type: Boolean, default: false })
  isSuffix!: boolean

  @Prop({ default: "" })
  suffixString!: string

  @Prop({ default: "" })
  test!: string

  // data
  ruleOptions = {
    required: (value: string) => !!value || "必須事項です",
  }

  // computed
  get rules() {
    if (this.required) {
      return [this.ruleOptions.required]
    }
  }

  get classes() {
    switch (this.option) {
      case "test":
        return "g-input-text c-contract-form__textarea"
      default:
        return "g-text-area"
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
