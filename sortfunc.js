import drowList from './drowlist.js'
import makeObject from './makeobject.js'
class Sortfunc{
    constructor(){
        this.maplist = new Map()
        // берем параметр сортировки де
        this.check_property= this.findProperty()
        
        this.list = []

        // обработчик выбора способа сортировки
       let form = document.querySelector("form");   
        form.addEventListener("submit", (event) =>{
            let data = new FormData(form);
            console.log(data)
            for (const entry of data) { 
                this.check_property = entry[1]
            };
            this.list=this.list.sort(this.compareList)
            console.log(this.list)
            this.makeObject()
            event.preventDefault();
        }, false);

      /*  makeObject(this.list, this.check_property)
        drowList(this.maplist);*/

    }


    setList(list){
        this.list=list.sort(this.compareList)
        console.log(list)
    }
    
    compareList =(a, b)=>{
        console.log(this.check_property)
         let check = this.check_property
        if (a[check] > b[check]) return 1; 
        if (a[check] == b[check]) return 0;
        if (a[check] < b[check]) return -1;
    }
       
    findProperty(){   
        let c =  document.getElementById("sortType").children;
        console.log(c);
         for (let elem of document.getElementById("sortType").children) {
              if (elem.checked)
             {
              return elem.value
             }        
        }
    }
    
        makeObject(){
       let newlist = new Map()  
        switch(this.check_property) {
            case 'name':  

            case 'secondname':  
            
            for (let elem of this.list) {
              newlist.has(elem[this.check_property][0])?
                newlist.get(elem[this.check_property][0]).push(elem):
                    newlist.set(elem[this.check_property][0], new Array(elem) )
            }
              break
            case 'age':
                let headerage = 10;
                for (let elem of this.list) {
                    if (elem!=this.list[length-1])
                  while(headerage<elem[this.check_property])
                     headerage+=10 
                
                    newlist.has(headerage)?
                     newlist.get(headerage).push(elem):
                      newlist.set(headerage, new Array(elem) )
                }
              break
            default:
              
              break
          }
          this.maplist=newlist
        console.log("DDD",newlist)
    }
    drowobject(){
        for (let elem of this.maplist.keys()){
        let liFirst = document.createElement('li');
        liFirst.innerHTML = elem;
        bodylist.append(liFirst)
        liFirst.classList.toggle("sticky")
        console.log(liFirst);
           this.maplist.get(elem).forEach(element => {
            let liFirst = document.createElement('li');
            liFirst.innerHTML = element.name + ' ' + element.secondname;
            bodylist.append(liFirst);
           });
        }
    }
    
}
export default new Sortfunc();