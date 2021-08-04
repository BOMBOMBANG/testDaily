// import type testClass from "./class"
import testIn from "./interface"
import testType, { name } from "./type"
class TestClass implements testIn{
  name: string
  sdas: string
  name2: string
  constructor() {
    this.name = name.name1
    this.sdas = name.name3
    this.name2 = name.name2
  }
}
