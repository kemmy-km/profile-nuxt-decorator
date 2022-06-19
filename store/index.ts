import { Store } from "vuex"
import { getModule } from "vuex-module-decorators"
import AppStore from "~/store/AppStore"
import SkillStore from "~/store/SkillStore"
// import ContractStore from "~/store/ContractStore"

// /**
//  *
//  */
/* eslint-disable */
export let appStore: AppStore
export let skillStore: SkillStore
// export let contractStore: ContractStore

// eslint-disable-next-line
/* eslint-disable */
// let appStore: AppStore
// let skillStore: SkillStore

// const initializer(store: Store<any>): void => {
//   appStore = getModule(AppStore, store)
// }
// function initializeStores(store: Store<any>): void {
//   appStore = getModule(AppStore, store)
//   skillStore = getModule(SkillStore, store)
// }

/**  */
export const initializeStores = (store: Store<any>): void => {
  appStore = getModule(AppStore, store)
  skillStore = getModule(SkillStore, store)
  // contractStore = getModule(ContractStore, store)
}

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]

// export { initializeStores, appStore, skillStore }
