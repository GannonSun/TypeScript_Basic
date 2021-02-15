function echo<T>(arg: T): T {
  return arg;
}

let result = echo(true);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(["string", 123]);

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echo([1, 2, 3]);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength("123");
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);

class Queue<T> {
  private data = [];

  push(item: T) {
    return this.data.push(item);
  }

  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
// queue.push("str ");

interface IKeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: IKeyPair<number, string> = { key: 1, value: "string" };
let kp2: IKeyPair<string, number> = { key: "string", value: 1 };

let arr: number[] = [1, 2, 3];
let arr3: Array<number> = [1, 2, 3];
