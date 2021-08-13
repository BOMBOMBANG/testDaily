import { oldFunc } from "../../js/utils/oldFunc.js";
export var newFunc = function () {
    oldFunc(function () {
        alert("我调用了js的老方法");
    });
};
