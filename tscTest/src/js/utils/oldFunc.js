import submitAPI from "../api/submitAPI.js"
export const oldFunc = (cb) => {
  submitAPI.submit({ code: "0" })
  cb()
}