import {
  PortfolioRequest,
  PortfolioResponse,
} from "~/types/api/portfolio"
import { request } from "~/utils/request"

/** 一覧取得 */
export const getPortfolio = async (data?: PortfolioRequest): Promise<PortfolioResponse | undefined> => {
  const results = await request.get(`/get/portfolios/`, {params: data})
  if (!results || !results.data) return
  return results.data
}
