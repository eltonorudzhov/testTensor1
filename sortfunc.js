import drowList from './drowlist.js'
import makeObject from './makeobject.js'
import findProperty from './findproperty.js'
class Sortfunc{
    constructor(){
        this.maplist = new Map()
        // берем параметр сортировки де
        this.keyname= findProperty()
        this.list = []

        // обработчик выбора способа сортировки
        let form = document.querySelector("form");   
        form.addEventListener("submit", (event) =>{
            let data = new FormData(form);
            console.log(data)
            for (const entry of data) { 
                this.keyname = entry[1]
            };
            this.list=this.list.sort(this.compareList)
            console.log(this.list)
            this.updateRoot()
            event.preventDefault();
        }, false);
    }


    setList(list){
        this.list=list.sort(this.compareList)
        this.updateRoot()
    }
    updateRoot(){
        this.maplist = makeObject(this.list, this.keyname)
        drowList(this.maplist);
    }
    compareList =(a, b)=>{
        if (a[this.keyname] > b[this.keyname]) return 1; 
        if (a[this.keyname] == b[this.keyname]) return 0;
        if (a[this.keyname] < b[this.keyname]) return -1;
    }
}
export default new Sortfunc();