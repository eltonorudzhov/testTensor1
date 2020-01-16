import drowList from "./drowlist.js";
import makeObject from "./makeobject.js";
import findProperty from "./findproperty.js";
export default class Sortfunc {
  constructor(props, id) {
    this.id = id;
    // берем параметр сортировки
    this.keyName = findProperty();
    this.list = [];
    // создаем и сортируем список
    this.setList(props);
    // обработчик выбора способа сортировки
    document.querySelector("form").addEventListener(
      "submit",
      event => {
        this.sortSelect(document.querySelector("form"));
        event.preventDefault();
      },
      false
    );
  }
  // Выбор способа сортировки
  sortSelect = form => {
    let data = new FormData(form);
    for (const entry of data) {
      this.keyName = entry[1];
    }
    this.setList(this.list);
  };
  // создание и сортировка списка, вывод его на экран
  setList(list) {
    this.list = list.sort(this.compareList);
    let mapList = makeObject(this.list, this.keyName);
    drowList(mapList, this.keyName, this.id);
  }
  
  compareList = (a, b) => {
    if (a[this.keyName] > b[this.keyName]) return 1;
    if (a[this.keyName] == b[this.keyName]) return 0;
    if (a[this.keyName] < b[this.keyName]) return -1;
  };
}
