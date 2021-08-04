(function () {
  console.log("tec");
})()
const commonAPI = require("../api/commonAPI")
commonAPI.API.login()
class TestJs {
  constructor() {
    this.name = "testJs"
    this.text = "我是老文件"
  }
  
  aFunc() {
    return "一个普通的方法"
  }

  static aStaticFunc() {
    return "一个静态方法"
  }
}

module.exports = {
  TestJs
}