<template>
  <div id="contact">
    <v-container>
      <v-form ref="form">
        <v-card v-if="formStep === 1" outlined>
          <!-- <h2 class="heading__lv2">フォーム</h2> -->
          <v-card-title>フォーム</v-card-title>
          <v-row class="d-flex">
            <v-col cols="12" sm="12" class="d-flex">
              <v-card-text v-model="name">氏名</v-card-text>
              <VCommonTextFiled v-model="name" label="氏名" cols="12" />
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
              <!-- <v-textarea> </v-textarea> -->
              <VTextAreaField v-model="content" label="内容" />
            </v-col>
          </v-row>

          <v-row class="d-flex justify-center">
            <v-col cols="8" sm="8" class="text-center" @click="clickStepConfirm()">
              <!-- storeFormValue() -->
              <v-btn>確認</v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-card v-if="formStep === 2" outlined>
          <v-card-title>フォーム</v-card-title>

          <p>氏名：{{ name }}</p>
          <p>要件：{{ use }}</p>
          <p>内容：{{ content }}</p>

          <!-- <p>
            {{ getStoreFormValue }}
          </p> -->

          <v-row class="d-flex justify-center">
            <v-col cols="8" sm="8" class="text-center" @click="clickStepConfirmBack()">
              <v-btn>戻る</v-btn>
            </v-col>

            <v-col cols="8" sm="8" class="text-center" @click="clickStepPostContactForm()">
              <v-btn>送信</v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-card v-if="formStep === 3" outlined>
          <v-card-title>送信されました</v-card-title>
        </v-card>
      </v-form>
    </v-container>

    <!-- <v-row justify="center">
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
        </v-card>
      </v-col>
    </v-row> -->
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

  /** 氏名 */
  name = ""
  /** 要件 */
  use = ""
  /** 内容 */
  content = ""

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
  /** 確認ページを表示 */
  clickStepConfirm() {
    this.formStep++
  }

  /** 初期ページを表示 */
  clickStepConfirmBack() {
    this.formStep--
  }

  /** フォームを送信 */
  clickStepPostContactForm() {
    contactStore.postContactForm()
    this.formStep++
  }

  // storeFormValue(event) {
  //   // mutationsを直接呼ぶ場合
  //   // this.$store.commit("ContactFormStore/setStoreFormValue", data)
  //   return contactStore.setStoreFormValue
  // }
}
// export default {
//   computed: {
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
  min-width: 500px;
  width: 500px;
}

.v-card__text {
  max-width: 200px;
}

.v-application .d-flex {
  align-items: center;
}
</style>
