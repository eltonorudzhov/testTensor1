// Вывод списка на экран
export default function drowList(list, keyName, id) {
  // Очистка поля
  document.getElementById(id).innerHTML = "";
  for (let elem of list.keys()) {
    // Вывод ключа
    let liKey = document.createElement("li");
    let keyStr = "<strong>" + elem + "</strong>"
    liKey.innerHTML = keyStr;
    document.getElementById(id).append(liKey);
    liKey.classList.add("sticky");
    // Вывод значений по ключу
    list.get(elem).forEach(element => {
      let liElement = document.createElement("li");
      let str = "";
      for (let changeKey in element) {
        if (changeKey == keyName) str += "<strong>" + element[changeKey] + "</strong>";
        else str += element[changeKey];
        str += " ";
      }
      liElement.innerHTML = str;
      document.getElementById(id).append(liElement);
    });
  }
}
