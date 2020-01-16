// Вывод списка на экран
export default function drowList(list,keyname){
    document.getElementById("bodylist").innerHTML = "";
    for (let elem of list.keys()){
    let liKey = document.createElement('li');
    liKey.innerHTML = elem;
    bodylist.append(liKey)
    liKey.classList.add("sticky")
        list.get(elem).forEach(element => {
        let liElement = document.createElement('li');
        let str="";
        for (let changeKey in element) {
            if (changeKey == keyname)
               str+="<b>"+element[changeKey]+"</b>"
            else
               str+=element[changeKey]
            str+=' '
          }
        liElement.innerHTML = str;
        bodylist.append(liElement);
       });
    }
}