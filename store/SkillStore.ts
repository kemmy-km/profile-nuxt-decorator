import { Module, VuexModule, Mutation } from "vuex-module-decorators"

@Module({
  name: "SkillStore",
  stateFactory: true,
  namespaced: true,
})

export default class SkillStore extends VuexModule {
  //
  // State
  //
  rawForm= ""
  rawTest = "test1"
  rawHoge = 10
  items= [
    { name: 'itemA', price: 1500 },
    { name: 'itemB', price: 700 },
    { name: 'itemC', price: 2000 },
    { name: 'itemD', price: 300 },
    { name: 'itemE', price: 5000 }
  ]

  //
  // getters
  //
  public get getForm() {
    // return state.rawForm
    return this.rawForm
  }

  public get getTest() {
    // return state.test
    return this.rawTest
}

  public get getHoge() {
    // return state.hoge
    return this.rawHoge
  }

  public get getItems() {
    // return state.items.filter(item => item.price >= 1000)
    return this.items.filter(item => item.price >= 1000)
  }

  //
  // Mutation
  //
  @Mutation
  setTest(test: string) {
    this.rawTest = test
  }

}

//
// const state = {
//   rawForm: "",
//   test: "test1",
//   hoge: 10,
//   items: [
//     { name: 'itemA', price: 1500 },
//     { name: 'itemB', price: 700 },
//     { name: 'itemC', price: 2000 },
//     { name: 'itemD', price: 300 },
//     { name: 'itemE', price: 5000 }
//   ],
// }

// const getters = {
//   // allSkillCards2: (state) => state.skillCards2
//   getForm() {
//     return state.rawForm
//   },
//   getTest: (state) => {
//     return state.test
//   },
//   getHoge: (state) => {
//     return state.hoge
//   },
//   getItems: state => {
//     return state.items.filter(item => item.price >= 1000)
//   },
// }

// const mutations = {
//   getForm(data) {
//     state.rawForm = data
//   }
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// }
