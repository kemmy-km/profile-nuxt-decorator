import { Plugin } from "@nuxt/types"
// import { CRE_MANAGEMENT_API_URL } from "~/constants/config"
import { initializeAxios } from "~/utils/api"

const accessor: Plugin = ({ $axios }) => {
  // $axios.setBaseURL(CRE_MANAGEMENT_API_URL)
  // $axios.onRequest((config: any) => {
  //   config.headers.common.authorization = "Bearer " + localStorage.getItem("vue-token")
  // })
  initializeAxios($axios)
}

export default accessor
