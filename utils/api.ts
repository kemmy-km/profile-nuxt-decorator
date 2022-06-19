import { NuxtAxiosInstance } from "@nuxtjs/axios"

// eslint-disable-next-line
let $axios: NuxtAxiosInstance

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance
}

export { $axios }

export const setCurrentCompanyIdHeader = (currentCompanyId: string) => {
  $axios.setHeader("x-company-id", currentCompanyId)
}

export const setUserIdHeader = (userId: string) => {
  $axios.setHeader("x-login-user-id", userId)
}
