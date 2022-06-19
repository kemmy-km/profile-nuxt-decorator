import { Module, Mutation, VuexModule } from "vuex-module-decorators"

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
}
