import {
  SkillRequest,
  SkillResponse,
} from "~/types/api/skill"
import { request } from "~/utils/request"

/** 一覧取得 */
export const getSkill = async (data?: SkillRequest): Promise<SkillResponse | undefined> => {
  const results = await request.get(`/get/skills/`, {params: data})
  if (!results || !results.data) return
  return results.data
}
