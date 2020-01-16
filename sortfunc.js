import drowList from './drowlist.js'
import makeObject from './makeobject.js'
import findProperty from './findproperty.js'
export default class Sortfunc{
    constructor(props,id){
        this.id = id
        this.mapList = new Map()
        // берем параметр сортировки де
        this.keyName= findProperty()
        this.list=[]
        this.setList(props)
        console.log(this.id)
        // обработчик выбора способа сортировки
        document.querySelector("form").addEventListener("submit", (event) =>{
            this.hendl(document.querySelector("form"))
            event.preventDefault();
        }, false);
    }

    hendl=(form)=>{    
            let data = new FormData(form);
            for (const entry of data) { 
                this.keyName = entry[1]
            };
        this.setList(this.list)
    }

    setList(list){
        this.list=list.sort(this.compareList)
        console.log(this.list)
        this.updateRoot()
    }
    updateRoot(){
        this.mapList = makeObject(this.list, this.keyName)
        drowList(this.mapList,this.keyName, this.id);
    }
    compareList =(a, b)=>{
        if (a[this.keyName] > b[this.keyName]) return 1; 
        if (a[this.keyName] == b[this.keyName]) return 0;
        if (a[this.keyName] < b[this.keyName]) return -1;
    }
}
