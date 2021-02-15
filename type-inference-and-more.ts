// type inference 类型推论
let str = "string";

// union types 联合类型
let numOrString: number | string;
numOrString = "123";
numOrString = 123;

function getLength(input: number | string): number {
  const str1 = input as string;
  if (str1.length) {
    return str1.length;
  } else {
    const num1 = input as number;
    return num1.toString().length;
  }
}

// type guard 类型守卫
function getLength2(input: number | string): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}
