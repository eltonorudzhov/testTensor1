import Sortfunc from './src/js/sortfunc.js'
import CreateRoot from './src/js/createroot.js'
import people from './src/js/lists/people.js'
import fruits from './src/js/lists/fruits.js'

let root = new CreateRoot('mainBodyList')
let myUser1 = new Sortfunc(people, root )
let myUser2 = new Sortfunc(fruits, root )
