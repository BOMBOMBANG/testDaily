"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_js_1 = require("../oldCode/test.js");
var login_1 = require("../entity/login");
var commonAPI_1 = require("../api/commonAPI");
var testJs = new test_js_1.TestJs();
console.log(test_js_1.TestJs.aStaticFunc());
console.log(testJs.aFunc());
var params = new login_1.entity.login("xxxx", "XXXX");
commonAPI_1.API.login(params);
