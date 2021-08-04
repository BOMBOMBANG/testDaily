"use strict";
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
})(entity || (entity = {}));
