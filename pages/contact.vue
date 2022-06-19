<template>
  <div id="contact">
    <v-container>
      <v-form ref="form">
        <v-card v-if="formStep === 1" outlined>
          <!-- <h2 class="heading__lv2">フォーム</h2> -->
          <v-card-title>フォーム</v-card-title>
          <v-row class="d-flex">
            <v-col cols="4" sm="4">
              <v-card-text>氏名</v-card-text>
            </v-col>
            <v-col cols="8" sm="8">
              <v-text-field> </v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="8" sm="4">
              <v-card-text>ご用件</v-card-text>
            </v-col>
            <v-col cols="8" sm="8">
              <v-select :items="items"> </v-select>
            </v-col>

            <!-- <v-col cols="8" sm="8">
              <VSelectField label="ご用件" option="use" />
            </v-col> -->
          </v-row>

          <v-row class="d-flex">
            <v-col cols="8" sm="4">
              <v-card-text>内容</v-card-text>
            </v-col>
            <v-col cols="8" sm="8">
              <v-textarea> </v-textarea>
            </v-col>
          </v-row>

          <v-row class="d-flex justify-center">
            <v-col
              cols="8"
              sm="8"
              class="text-center"
              @click="
                clickStepConfirm()
                storeFormValue()
              "
            >
              <v-btn>確認</v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-card v-if="formStep === 2" outlined>
          <v-card-title>フォーム</v-card-title>
          <p>aaa</p>

          <p>
            {{ getStoreFormValue }}
          </p>

          <v-row class="d-flex justify-center">
            <v-col cols="8" sm="8" @click="clickStepConfirmBack()" class="text-center">
              <v-btn>戻る</v-btn>
            </v-col>

            <v-col cols="8" sm="8" @click="clickStepConfirm()" class="text-center">
              <v-btn>送信</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-form>
    </v-container>

    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo />
          <VuetifyLogo />
        </v-card>
        <v-card>
          <v-card-title class="headline">aaa </v-card-title>
          <v-card-text>
            <p>contact</p>
            <div class="text-xs-right">
              <em><small>&mdash; KM</small></em>
            </div>
            <hr class="my-3" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/about"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator"
import { useOptions } from "~/constants/options"
import { contactStore } from "~/store"

@Component
export default class Contract extends Vue {
  //
  // Data
  //
  formStep = 1

  //
  // Computed
  //
  get items() {
    return useOptions
  }

  get getStoreFormValue() {
    return contactStore.getStoreFormValue
  }

  //
  // Methods
  //
  clickStepConfirm() {
    this.formStep++
  }

  clickStepConfirmBack() {
    this.formStep--
  }

  // storeFormValue(event) {
  //   // mutationsを直接呼ぶ場合
  //   // this.$store.commit("ContactFormStore/setStoreFormValue", data)
  //   return contactStore.setStoreFormValue
  // }
}
// export default {
//   data() {
//     return {
//       formStep: 1,
//     }
//   },
//   computed: {
//     items: () => {
//       return useOptions
//     },

//     getStoreFormValue() {
//       return this.$store.getters["ContactFormStore/getStoreFormValue"]
//     },
//   },
//   methods: {
//     clickStepConfirm() {
//       this.formStep++
//     },
//     clickStepConfirmBack() {
//       this.formStep--
//     },
//     storeFormValue(event) {
//       // mutationsを直接呼ぶ場合
//       // this.$store.commit("ContactFormStore/setStoreFormValue", data)

//       // actionsで呼ぶ場合
//       this.$store.dispatch("ContactFormStore/setStoreFormValue", event.target.value)
//     },
//   },
// }
</script>

<style lang="scss" scoped>
.v-card {
  min-width: 400px;
  width: 500px;
}
</style>
