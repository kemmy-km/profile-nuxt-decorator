import { Component } from "nuxt-property-decorator"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"
import { StackComponent, Toaster } from "~/types/api/store"
// import { v4 as uuidv4 } from "uuid"

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

  /**  */
  // public get isShowToaster(): boolean {
  //   return this.toasters.length !== 0
  // }

  //
  // Mutation
  //
  /** ページを開く場合 */
  @Mutation
  pushStack(component: StackComponent) {
    this.stackComponents.push(component)
  }

  @Mutation
  pushToaster(toast: Toaster) {
    // this.toasters = [...this.toasters, Object.assign(toast, { id: uuidv4() })]
    this.toasters = [...this.toasters, Object.assign(toast, {id: Component })]
  }

  @Mutation
  removeStack() {
    return this.stackComponents.pop()
  }

}
