// import dayjs from "dayjs"

export const deepCopy = (value: any) => {
  return JSON.parse(JSON.stringify(value))
}

/** 日付が存在するか判定（2/31などを除く） */
// export const isValidDate = (date: string, format: string) => {
//   return dayjs(date, format).format(format) === date
// }
