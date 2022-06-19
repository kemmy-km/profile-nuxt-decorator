import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators"
import { appStore } from "~/store"
import { ContactRequest } from "~/types/api/contact"
import { postContactForm } from "~/apis/contact"

@Module({
  name: "ContactStore",
  stateFactory: true,
  namespaced: true,
})

export default class ContactStore extends VuexModule {
  //
  // State
  //
  rawFormValue = undefined

  //
  // Getter
  //
  get getStoreFormValue() {
    return this.rawFormValue
  }

  // Mutation
  @Mutation
  setStoreFormValue(data: any) {
    this.rawFormValue = data
  }

  @Action({ rawError: true })
  public async postContactForm(data: ContactRequest) {
    const results = await postContactForm(data)
    if (!results) return false
    appStore.pushToaster({ title: "成功", text: "更新に成功しました", type: "success"})
    return true
  }

}
