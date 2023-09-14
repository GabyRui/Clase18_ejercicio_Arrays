/* ARRAYS - pregunta 1 y 2*/

const numbers = [11, 13, 15, 17, 19];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

const strings = ['Luis', 'Yoshida', 'Nami'];
console.log(strings[0]);
console.log(strings[1]);
console.log(strings[2]);

const mix = [false, 'Lopez', 6, 'blue'];
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);

/* PREGUNTA 3 y 4 */

console.log(numbers.length)
console.log(strings.length)
console.log(mix.length)
console.log(numbers[3])
console.log(strings[2])
console.log(mix[1])


/* PREGUNTA 5 */

const arrayBidimensional = ['Jose','Luis', 'Anne',['Ana', 'Maria', 'Susy']];

console.log(arrayBidimensional.length);

const arrayObjects = [
    
    { id: 1, name: 'Jose' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Felipe' },
    { id: 4, name: 'Ana' },
    { id: 5, name: 'Manly' },
    { id: 6, name: 'Mormy' },
];

console.log(arrayObjects.length);
console.log(arrayObjects[4].name);

/* PREGUNTA 6 y 7*/

/* Imperativo - For */
const Arraynumeros = [3, 6, 9, 10, 12];
for (let i = 0; i < Arraynumeros.length; i++) {
  console.log(Arraynumeros[i]);
};

/* Declarativo - ForEach y Map*/

/* map */

const Arraynum = [3, 6, 9, 10, 12];

const numNew = Arraynum.map(
    (Arraynum) => {
        return `numero - ${Arraynum}`
    }
)

console.log(numNew);

/* forEach*/

const suji = ['a', 'b', 'c', 'd', 'e'];
suji.forEach( (suji,index) => {
    console.log(suji);
    console.log(index);
});


/* PREGUNTA 8 -----------*/

const arrayNumbers1 = [1, 2, 3, 4, 5];

let suma = 0;

for(let i = 0; i < arrayNumbers1.length; i++){
    suma += arrayNumbers1[i];
}

const promedio = suma / arrayNumbers1.length;

console.log(promedio);

/* PREGUNTA 9 y 10 -----------*/

/* MUTABILIDAD */

const apellidos = ['Lopez', 'Gomez', 'Roy'];

console.log(apellidos);
const manga = 'Yukihira';

apellidos.push(manga);
console.log(apellidos);

/* ELIMINANDO ELEMENTOS DE UN ARREGALO MUTABLE - respondiendo pregunta 10*/

apellidos.pop();
apellidos.pop();
apellidos.pop();
console.log(apellidos);

/* Se eliminaron los 3 últimos elementos, considerando que se añadio con push la const con la variable manga. */


/* INMUTABILIDAD */

const comida = ['pan', 'ceviche', 'miu'];

const condimento = 'ajo';

const total = [...comida, condimento];

console.log(total);

/* PREGUNTA 11 
La respuesta se encuentra en texto-----------*/

/* PREGUNTA 12 */

const destruc = ['fine', 'ok', 'good'];

const [eluno,eldos,eltres]= destruc

console.log(eluno)
console.log(eldos)
console.log(eltres)

/* Comenzando a destructurar */

const others = [
    {id:1, name:'Myne'},
    {id:2, name:'Tatsu'},
    {id:3, name:'Leone'},
]

const [primero,segundo,tercero] = others

console.log(primero)
console.log(segundo)
console.log(tercero)

/* Otra forma de desestructurar */

others.forEach( others =>
    {const {id,name} = others
    console.log(id)
    console.log(name)
    });

