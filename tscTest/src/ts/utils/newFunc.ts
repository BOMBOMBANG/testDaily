import { oldFunc } from "../../js/utils/oldFunc.js" 

export const newFunc = () => {
  oldFunc(() => {
    alert("我调用了js的老方法")
  })
}