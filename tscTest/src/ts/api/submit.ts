import { oldFunc } from "../utils/index.js"

export default {
  submit: <T>(params: T) => {
    window.alert(JSON.stringify(params))
    oldFunc("xxxx", "sdasdassa")
  }
}