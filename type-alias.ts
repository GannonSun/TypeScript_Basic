// 类型别名 用来复用的
let sum: (x: number, y: number) => number;
const resAlias = sum(1, 2);

type PlusType = (x: number, y: number) => number;
let sum2: PlusType;
const resAlias2 = sum2(1, 2);

type StrOrNum = string | number;
let strOrNum: StrOrNum = "123";
strOrNum = 123;

const str: "name" = "name";
const num: 1 = 1;
type Directions = "Up" | "Down" | "Left" | "Right";
let toWhere: Directions = "Up";

interface IName {
  name: string;
}
type IPerson = IName & { age: number };
let person: IPerson = { name: "gannonsun", age: 20 };
