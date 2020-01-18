import Sortfunc from './src/js/sortfunc.js'
import CreateRoot from './src/js/createroot.js'
let list = [
    {
        name: "Вова",
        secondname: "Клева",
        age: 25
    },
    {
        name: "Вова",
        secondname: "Карантин",
        age: 12
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },
    {
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },
    {
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },{
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },{
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },{
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },{
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },
    {
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
    {
        name: "Максим",
        secondname: "Любашкин",
        age: 43
    },
    {
        name: "Эдвард",
        secondname: "Рукиножницы",
        age: 51
    },
    {
        name: "Захар",
        secondname: "Ламкин",
        age: 5
    },
]
let list2 = [
    {
        name: "Аня",
        secondname: "Сельдереева",
        age: 73
    },
    {
        name: "Ксюша",
        secondname: "Кактусова",
        age: 45
    },
    {
        name: "Наташа",
        secondname: "Пеналова",
        age: 22
    }
]
let root = new CreateRoot('mainBodyList')
let myUser = new Sortfunc(list, root )
let myUser2 = new Sortfunc(list2, root )
//myUser.findProperty()
