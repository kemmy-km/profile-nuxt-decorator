//
export type Base64File = {
  name: string
  base64DataUri: string
}

export type Company = {
  id: string
  name: string
  logoUrl?: string
}

export type CompanyUser = {
  id: string
  firstName: string
  lastName: string
}

export type ConfirmDialog = {
  title: string
}

export type DialogType = "delete"

export type Dialog = {
  text: string
  title: string
  action?: () => void
  type?: DialogType
}

export type ErrorCell = {
  cell: string
  error: string
}

export type ErrorExcelDetail = {
  fileName: string
  errorCalls: ErrorCell[]
}

export type AttachmentFile = {

}

export type ExcelConfirmDialog = {
  title: string
  notice: string
}

export type TestExcelConfirmDialog = {

}

export type PdfModal = {
  fileName: string
  width?: string
}

export type StackComponent = {
  component: string
  width?: "narrow"
}

export type ToasterType = "error" | "success" | "warning"

export type Toaster = {
  text: string
  title: string
  type: ToasterType
  id?: string
}
