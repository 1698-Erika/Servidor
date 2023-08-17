
const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle Principal 123',
        ciudad: 'Ciudad Ejemplo'
    },
    hobbies: ['lectura', 'pintar', 'jardinería'],

    educacion: [      // Arreglo         
          {
            titulo: 'Licenciatura en Ciencias',
            especialidad: 'Informática',
            universidad: 'Universidad Ejemplo'
        },
        {
            titulo: 'Maestría en Administración de Empresas',
            especialidad: 'Marketing',
            universidad: 'Otra Universidad'
        }
        // educacion[0]
    ],
    activo: true,
    salario: 250
}

const error = {
    Mensaje: 'Esto es mi objeto error',
    Estatus: 23
}

console.log(`Mi nombre es ${persona.nombre}`)
console.log(`tengo ${persona.edad} de edad`)
console.log('Vivo en la' + persona.direccion.calle)
console.log( "La "+ persona.direccion.ciudad + " en la que vivo es muy pequeña ")
console.log('uni de mis hobbies principales es la' + persona.hobbies[0] )
console.log('El'+persona.hobbies[1] + ' más que un hobbies es una habilidad que me gusta realizar')
console.log('Mi abuelo me enseño como ser un buen jardinero y ahora la ' +persona.hobbies[2]+ 'es uno de mis hobbies')
console.log('Yo estudie' + persona.educacion[0].titulo )
console.log('en la especialidad de' + persona.educacion[0].especialidad )
console.log('en la universidad' + persona.educacion[0].universidad )
console.log("Me gustaria estudiar la carrera de "+persona.educacion[1].titulo)
console.log("Tener una especialidad en " + persona.educacion[1].especialidad+ "no me desagrada")
console.log('Tendria que buscar' +persona.educacion[1].universidad)
console.log("Soy muy bueno en varias cosas, es muy malo tener un salario de " + persona.salario)
console.log('Mi novia me dice que puedo encontrar un mejor trabajo dado que soy una persona activa y eso es ' +persona.activo)




