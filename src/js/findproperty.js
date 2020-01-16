// Ищет выбранное свойство из радио 
export default function findProperty() {
  for (let elem of document.getElementById("sortType").children) {
    if (elem.checked) {
      return elem.value;
    }
  }
}
