

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

// HERENCIA


class Superman {
    constructor(nombre, accesorio){
        this.nombre = nombre
    }
}

class Accesorio extends Superman {
    
    constructor(){
        super();
        this.version = ""
    }
}


const personaje = new Superman("klark")

console.log(personaje)

const personajeCompleto = new Accesorio
console.log(personajeCompleto)


// 

class DatosPersonales{
    constructor(nombre, apellido){
        this.nombre =nombre
        this.apellido = apellido
    }
}


class NivelJugador extends DatosPersonales{
    constructor(nivel, puntos){
        super();
        this.nivel = nivel
        this.puntos = puntos
    }
}


const  datosCompletos = new NivelJugador

console.log(datosCompletos)

// POLIMORFISMO PARAMETRICO

function cuerpoObjeto() {
    this.itemsss = []

    this.funcionalidad = function (params) {
        this.itemsss.push(params)
    }
}

const comportamiento1 = new cuerpoObjeto
comportamiento1.funcionalidad("soyTexto")

console.log(comportamiento1)

const comportamiento2 = new cuerpoObjeto
comportamiento2.funcionalidad(12049)

console.log(comportamiento2)

// SUBTYPE POLIMORFISM

class Persona {
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }
}


class Career extends Persona{
    constructor(language, name, lastName){
        super(name, lastName)
        this.language = language
    }
}


const ejemplo1 = new Person ("Alex", "Rey")
console.log(ejemplo1)


const ejemplo2 = new Career("Javascript", "Cris", "Newton")
console.log(ejemplo2)

