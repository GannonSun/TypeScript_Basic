interface IPerson {
  name: string;
  age: number;
}

let gannonsun: IPerson = {
  name: "gannonsun",
  age: 20,
};
// 可选
type IPartial = Partial<IPerson>;
let gannonsun2: IPartial = {
  name: "gannonsun",
};
// 剔除
type IOmit = Omit<IPerson, "name">;
let gannonsun3: IOmit = {
  age: 20,
};
