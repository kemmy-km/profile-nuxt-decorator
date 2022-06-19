<template>
  <v-text-field :label="label" :rules="rules" autocomplete="off" dense class="" @input="$emit('input', $event)" />
  <!-- :value="dispValue"
    :flat="flat"
    :outlined="outlined"
    :solo="solo"
    :suffix="isSuffix ? suffixString : ''"
    :placeholder="placeholder"
    :hide-details="hideDetails"
    :disabled="disabled" -->
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator"
// import { formatDateExceptTime } from "~/utils/dateTime"

@Component
export default class VCommonField extends Vue {
  //
  // props
  //

  @Prop({ type: Boolean, default: false })
  disabled
  // disabled!: boolean

  @Prop({ type: Boolean, default: false })
  email
  // email!: boolean

  @Prop({ type: Boolean, default: false })
  required
  // required!: boolean

  @Prop({ default: "" })
  value
  // value!: string

  //
  // data
  //
  ruleOptions = {}

  //
  // computed
  //
  get rules() {
    if (this.required) {
      return [this.ruleOptions.required]
    }
  }

  // get dispValue() {
  //   if (this.isDateTime) return formatDateExceptTime(this.value)
  //   return this.value
  // }
}
</script>

<style lang="scss" scoped>
</style>
