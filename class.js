// 封装
class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("Lily");
snake.run();

// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaobai = new Dog("xiaobai");
console.log(xiaobai.run());
console.log(xiaobai.bark());

// 多态
class Cat extends Animal {
  static categories = ["mammal"];
  constructor(name) {
    super(name);
    console.log(this.name);
  }

  run() {
    return `Meow, ${super.run()}`;
  }
}

const maomao = new Cat("maomao");
console.log(maomao.run());
console.log(Cat.categories);
