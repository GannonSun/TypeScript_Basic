function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}

add(1, 2);
add(1, 2, 3);

interface ISum {
  (x: number, y: number, z?: number): number;
}
const add2 = (x: number, y: number, z?: number) => {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};

let add3: ISum = add2;
