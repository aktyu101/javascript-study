export default function people(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.info = () => {
    return `${this.name} 나이는 ${this.age}이고 주소는${this.address}입니다.`;
  };
}
