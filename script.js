function newObj(Mark, Model, Engine, Price) {
const obj = Object.create ({
   Mark: {
     writable: false
   },
   Model,
   Engine,
   Price
});
    
console.log(obj);
Object.prototype.getPrice = () =>{
    return obj.Price;
}

console.log(obj.getPrice());
}

newObj('Ford', 'F150', 'V8', '26000$');

newObj('Ford', 'Fiesta', 'R4', '14000$');



class Auto {
    constructor(Mark, Model, Engine, Price) {
       this.Mark = Mark;
       this.Model = Model;
       this.Engine = Engine;
       this.Price = Price
    }
}

const Auto_1 = new Auto('Mercedes', 'Sprinter', 'R_Turbo', '55000$');
console.log(Auto_1);
const Auto_2 = new Auto('Ford', 'Transit', 'R_Turbo', '38000$');
console.log(Auto_2);
const Auto_3 = new Auto('Renault', 'Master', 'R_Turbo', '36000$');
console.log(Auto_3);
