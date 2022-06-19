import { AxiosResponse } from "axios"
import { $axios } from "~/utils/api"
import { appStore } from "~/store"
// import { PLATFORM_FRONT_BASE_URL } from "~/constants/config"

const UNAUTHORIZED: number = 401
const FORBIDDEN: number = 403

/**  */
const commonErrorHandling = (error: any, title: string, message: string): void => {
  if (!error || !error.response) {
    // appStore.pushToaster({
    //   title: "",
    //   text: "",
    //   type: "error",
    // })
    return
  }

  switch (error.response.status) {
    case UNAUTHORIZED:
      appStore.pushToaster({ title: "認証失敗", text: "認証に失敗しました", type: "error"})
      return
    case FORBIDDEN:
      appStore.pushToaster({ title: "", text: "", type: "error"})
      return
    default:
      appStore.pushToaster({ title, text: message, type: "error"})
  }
}

/**  */
const commonGetErrorHandling = (error: any, title: string, message: string): void => {
  if (!error && !!error.response) {
    // if (error.response.status === FORBIDDEN) {
    //   redirectToUnauthorizedPage()
    //   return
    // }
  }
  commonErrorHandling(error, title, message)
}

/**  */
// export const redirectToUnauthorizedPage = (): void => {
//   removeTokenFromLocalStorage()
//   window.location.href = `${PLATFORM_FRONT_BASE_URL}/unauthorized`
//   window.location.href = `/index`
// }

/** APIリクエストのための共通オブジェクト */
export const request = {
  // TODO
  get: (url: string, data?:any): Promise<void | AxiosResponse<any>> => {
    return $axios.get(url, data).catch((error) => {
      if (!$axios.isCancel(error)) {
        commonGetErrorHandling(error, "エラー", "データが取得できません")
      }
    })
  },
  post: (url: string, data?:any): Promise<void | AxiosResponse<any>> => {
    return $axios.post(url, data).catch((error) => {
      commonErrorHandling(error, "エラー", "データの更新に失敗しました")
    })
  },
  put: (url: string, data?: any): Promise<void | AxiosResponse<any>> => {
    return $axios.put(url, data).catch((error) => {
      commonErrorHandling(error, "エラー", "データの更新に失敗しました")
    })
  },
  delete: (url: string, data?: any): Promise<void | AxiosResponse<any>> => {
    return $axios.delete(url, data).catch((error) => {
      commonErrorHandling(error, "エラー", "データの削除に失敗しました")
    })
  },
}
