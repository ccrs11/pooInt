import { Personaje, Jedi, Sith, MaestroJedi } from "./objects.js";
const personaje1= new Personaje("juan",10);
personaje1.presentarse();
console.log(personaje1.getNombre);
const jedi1 = new Jedi("tomas",25);
jedi1.usarFuerza()