class Sortfunc{
    constructor(props, id){
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
            event.preventDefault();
        }, false);
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
}
export default new Sortfunc();