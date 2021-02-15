class AnimalTs {
  name: string;
  constructor(name) {
    this.name = name;
  }

  run() {
    return `${this.name} is running`;
  }
}

const snakeTs = new AnimalTs("Lily");
console.log(snakeTs.run());

class DogTs extends AnimalTs {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaohei = new DogTs("xiaohei");
console.log(xiaohei.bark());
