export namespace entity {
  export class login {
    static url = "/login"
    nickname: string
    password: string
    constructor(nickname: string, password: string) {
      this.nickname = nickname
      this.password = password
    }
  }
}