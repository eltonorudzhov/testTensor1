// Вывод списка на экран
export default function drowList(list){
    document.getElementById("bodylist").innerHTML = "";
    for (let elem of list.keys()){
    let liKey = document.createElement('li');
    liKey.innerHTML = elem;
    bodylist.append(liKey)
    liKey.classList.add("sticky")
        list.get(elem).forEach(element => {
        let liElement = document.createElement('li');
        liElement.innerHTML = element.name + ' ' + element.secondname;
        bodylist.append(liElement);
       });
    }
}