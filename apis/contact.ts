import {
  ContactRequest,
} from "~/types/api/contact"
import { request } from "~/utils/request"

/** フォーム送信 */
export const postContactForm = async (data?: ContactRequest): Promise<boolean> => {
  const results = await request.post(`/post/contact/`, {params: data})
  if (!results) return false
  return results.status === 200
}
