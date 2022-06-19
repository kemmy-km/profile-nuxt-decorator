import { Store } from "vuex"
import { getModule } from "vuex-module-decorators"
import AppStore from "~/store/AppStore"
import SkillStore from "~/store/SkillStore"
import ContactStore from "~/store/ContactStore"

/* eslint-disable */
export let appStore: AppStore
export let skillStore: SkillStore
export let contactStore: ContactStore

/**  */
export const initializeStores = (store: Store<any>): void => {
  appStore = getModule(AppStore, store)
  skillStore = getModule(SkillStore, store)
  contactStore = getModule(ContactStore, store)
}

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
