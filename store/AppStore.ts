// import { Component } from "nuxt-property-decorator"
import { v4 as uuidv4 } from "uuid"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"
import { StackComponent, Toaster, Dialog } from "~/types/store"

@Module({
  name: "AppStore",
  stateFactory: true,
  namespaced: true,
})

export default class AppStore extends VuexModule {
  //
  // state
  //
  private stackComponents: StackComponent[] = []
  private dialog: Dialog[] = []
  public toasters: Toaster[] = []

  //
  // getters
  //
  public get getStackComponents(): any[] {
    return this.stackComponents
  }

  // public get getStackPage(): number {
  //   return this.stackComponents.length || 0
  // }

  public get getToasters() {
    return this.toasters
  }

  /**  */
  // public get isShowToaster(): boolean {
  //   return this.toasters.length !== 0
  // }

  //
  // Mutation
  //
  @Mutation
  pushDialog(data: Dialog) {
    this.dialog = [data]
  }

  /** ページを開く場合 */
  @Mutation
  pushStack(component: StackComponent) {
    this.stackComponents.push(component)
  }

  @Mutation
  removeDialog() {
    this.dialog.pop()
  }

  @Mutation
  pushToaster(toast: Toaster) {
    this.toasters = [...this.toasters, Object.assign(toast, {id: uuidv4() })]
  }

  @Mutation
  removeStack() {
    // 配列の最後を除去
    return this.stackComponents.pop()
  }

  /** トースターを閉じる */
  @Mutation
  removeToaster(id: string) {
    this.toasters.forEach((v: Toaster, index: number) => {
      if (v.id === id) {
        this.toasters.splice(index, 1)
      }
    })
  }

}
