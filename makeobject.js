export default function makeObject(list, check_property){
    console.log("SSSSSSS", list)
    let newlist = new Map()
     switch(check_property) {
         case 'name':  
         case 'secondname':  
         for (let elem of list) {
           newlist.has(elem[check_property][0])?
             newlist.get(elem[check_property][0]).push(elem):
                 newlist.set(elem[check_property][0], new Array(elem) )
                 
         }

           break
         case 'age':
           let headerage = 10;
           for (let elem of list) {
             while(headerage<elem[check_property])
                headerage+=10 
           
               newlist.has(headerage)?
                newlist.get(headerage).push(elem):
                 newlist.set(headerage, new Array(elem) )
            
         }
           break
         default:
           
           break
       }
       console.log("ЫЫ",newlist)
       return newlist
    
}
