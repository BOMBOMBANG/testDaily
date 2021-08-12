import { oldFunc } from "../utils/index.js";
export default {
    submit: function (params) {
        window.alert(JSON.stringify(params));
        oldFunc("xxxx", "sdasdassa");
    }
};
