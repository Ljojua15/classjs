export const user = {
  name: "lasha",
  lastName: "jojua",
};

export function userName(name) {
  console.log(name);
}

const car = {
  model: `subaru`,
};

export default car;

export class UserFirst {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}
