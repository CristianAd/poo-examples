

class Person {
    constructor (nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }
}



const individuo1 = new Person ("jOhh", 30)
const individuo2 = new Person ("Marta", 40)

// Relación / asociación
 individuo2.parent = individuo1

console.log( individuo2)

// Asociación en sentido de agregación

const empresa = {
        name: "CoCA-COLA",
        employes: []
    
}

class Person2 {
    constructor(nombre, edad){
        this.name = nombre,
        this.age = edad
    }
}

const personA = new Person2 ("Emmyl", 20)
const personB = new Person2 ("Miky", 30)

empresa.employes.push(personA)
empresa.employes.push(personB)

console.log(empresa)

//PRICIPIOS POO --> ENCAPSULAICÓN, HERENCIA Y POLIMORFISMO

function Company(nombre) {
    let prestigio = ["i"]
    this.name = nombre
    this.size = ""

    this.level = function () {
        return prestigio
    }

    this.addLeel = function (params) {
        prestigio.push(params)
    }

}

 
const entidad = new Company ("Coca-Cola")
console.log(entidad)


console.log(Company.level)
console.log(entidad.level())

entidad.addLeel({dificulty: "medio"})

console.log(entidad.level())

