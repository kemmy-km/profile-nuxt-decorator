import { Action, Module, VuexModule, Mutation } from "vuex-module-decorators"
import { getPortfolio } from "~/apis/portfolio"
// import { PortfolioResponse } from "~/types/api/portfolio"

@Module({
  name: "PortfolioStore",
  stateFactory: true,
  namespaced: true,
})

export default class PortfolioStore extends VuexModule {

  //
  // State
  //
  rawPortfolio = undefined

  //
  // Getter
  //
  public get portfolio() {
    return this.rawPortfolio
  }

  @Mutation
  setPortfolio(data : any) {
    this.rawPortfolio = data
  }

  //
  // Action
  //
  @Action({ rawError: true })
  public async fetchPortfolio(data: any) {
    const results = await getPortfolio(data)
    // if (!results || !results.length) {
    //   this.resetPortfolio()
    //   return
    // }
    this.setPortfolio(results)
  }


}
