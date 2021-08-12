import submitAPI from "./submit.js" // 使用了ts编译后的js文件

export default {
  login: (nickname, password) => {
    window.alert(`账号：${nickname}；密码：${password} 登陆成功`)
    submitAPI.submit({xxxx: "xxxx"})
  }
}