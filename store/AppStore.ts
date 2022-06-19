import { Module, Mutation, VuexModule } from "vuex-module-decorators"
import { StackComponent, Toaster } from "~/types/api/store"

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
    return this.getStackComponents
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

  // @Mutation
  // removeStack() {

  // }

  @Mutation
  pushToaster() {

  }

}
