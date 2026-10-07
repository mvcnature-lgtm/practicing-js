console.log("hola")
let name="Maria"
let lastname="de la Vega"
let middlename="Christlieb"
console.log("Hola mi nombre es " + name + " y mi apellido paterno es " +lastname +" y mi apellido materno es " +middlename)
console.log(`Hola mi nombre es ${name} y mi apellido paterno es ${lastname} y mi apellido materno es ${middlename} `)
let amigos=["Ana", "Maya", "Luchi", "Kira","Licha" ]
console.log(amigos) 
//imprimiendo un dato del array amigos
console.log(amigos[0])
console.log(amigos[1])
let cliente={
    id:236824,
    name:"Maria de la Vega",
    cp:31000,
    street:"Insurgentes",
    referencias:["Ricardo Garrido", "Fatima Fernandez"],
    Adult:true
}
console.log(cliente)
console.log(cliente.referencias)
console.log(cliente.referencias[0])

let edad = 18

if (edad>=18) 
{console.log ("Puedes entrar al Bar"); 
    
} else 
    {console.log("Eres menor de edad")
    
}