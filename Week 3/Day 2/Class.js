// const navi = {
//     name: "navi", 
//     Age: 5,
// }


// class bunny { constructor(name) {
//     this.name = name;
//     this.hops = 0; }
//     }
//     const Navi = new bunny(‘Navi’);
//     const Sherlock = new bunny(‘Sherlock’)
//     console.log(Navi.name);
//     console.log(Navi.name);




// class bunny {
//     constructor(name) { 
//         this._name = name; 
//         this._hops = 0;
//     }
//     get name() {
//     return this._name;
//     }
//     get hops() {
//     return this._hops; 
//     }
//     increaseHops() { 
//         this._hops ++;
//     } 
// }

// const Navi = new bunny('Navi')
// console.log(Navi)

// const Sherlock = new bunny ('sherlock')
// console.log(Sherlock)




class people {
    constructor(name,age, hairColour) { 
        this._name = name; 
        this._age = age;
        this._hairColour = hairColour;
    }


}


const kennedy = new people ('kennedy', 18, 'green')
console.log(kennedy)