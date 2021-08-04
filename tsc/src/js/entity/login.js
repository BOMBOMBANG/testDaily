"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity = void 0;
var entity;
(function (entity) {
    var login = /** @class */ (function () {
        function login(nickname, password) {
            this.nickname = nickname;
            this.password = password;
        }
        login.url = "/login";
        return login;
    }());
    entity.login = login;
})(entity = exports.entity || (exports.entity = {}));
