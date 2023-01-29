//쇼핑 물품에 대한 정보를 담고 있는 생성자 함수
export function Item(itemName, perPrice, amount) {
  this.itemName = itemName;
  this.perPrice = perPrice;
  this.amount = amount;
}
export let defaultNum = Number(1);
export let items = [
  new Item("우유", 1500, defaultNum),
  new Item("커피", 2500, defaultNum),
  new Item("딸기", 10000, defaultNum),
  new Item("과자", 1200, defaultNum),
  new Item("빵", 1000, defaultNum),
];
