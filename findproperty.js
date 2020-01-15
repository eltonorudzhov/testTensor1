export default function findProperty(){   
    let c =  document.getElementById("sortType").children;
     for (let elem of document.getElementById("sortType").children) {
          if (elem.checked)
         {
          return elem.value
         }        
    }
}