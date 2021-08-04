import { TestJs } from "../oldCode/test.js"
import { entity } from "../entity/login"
import { API } from "../api/commonAPI"
const testJs = new TestJs()
console.log(TestJs.aStaticFunc());
console.log(testJs.aFunc());
const params = new entity.login("xxxx", "XXXX")
API.login(params)
