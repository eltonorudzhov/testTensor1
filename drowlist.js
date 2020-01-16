// Вывод списка на экран
export default function drowList(list, keyName, id) {
  document.getElementById("bodyList").innerHTML = "";
  for (let elem of list.keys()) {
    let liKey = document.createElement("li");
    liKey.innerHTML = elem;
    document.getElementById(id).append(liKey);
    liKey.classList.add("sticky");
    list.get(elem).forEach(element => {
      let liElement = document.createElement("li");
      let str = "";
      for (let changeKey in element) {
        if (changeKey == keyName) str += "<b>" + element[changeKey] + "</b>";
        else str += element[changeKey];
        str += " ";
      }
      liElement.innerHTML = str;
      document.getElementById(id).append(liElement);
    });
  }
}
