import Sortfunc from './src/js/sortfunc.js'
import CreateRoot from './src/js/createroot.js'
import list1 from './src/js/lists/list1.js'
import list2 from './src/js/lists/list2.js'

let root = new CreateRoot('mainBodyList')
let myUser = new Sortfunc(list1, root )
let myUser2 = new Sortfunc(list2, root )
//myUser.findProperty()
