export class Personaje{
    #nombre
    #fuerza
    constructor(nombre,fuerza){
        this.#nombre=nombre;
        this.#fuerza=fuerza;
    }
    set setNombre(nombre){
        this.#nombre=nombre;
    }
    get getNombre(){
        return this.#nombre;
    }
    set setFuerza(fuerza){
        this.#fuerza=fuerza;
    }
    get getFuerza(){
        return this.#fuerza;
    }
    presentarse(){
        const divPres=document.querySelector('.presentarse');
        divPres.innerHTML=`<p>El personaje se llama ${this.#nombre} y tiene una fuerza de ${this.#fuerza}</p>`;
    }
    usarFuerza(){
    }
}

export class Jedi extends Personaje{
    constructor(nombre,fuerza){
    super(nombre,fuerza)
    }
    usarFuerza(){
        const divUsar=document.querySelector('.usarFuerza');
        divUsar.innerHTML=`<p>Jedi está utilizando la Fuerza paraproteger la galaxia</p>`;
    }
    entrenar(){
        let fuerzaJedi = parseInt(super.fuerza) + 10;
    }
}
export class MaestroJedi extends Jedi{
    constructor(nombre,fuerza){
        super(nombre,fuerza)
    }
    ensenar(){
        let fuerzaMaestroJedi = parseInt(super.fuerza) + 20;
    }
}
export class Sith extends Personaje{
    constructor(nombre,fuerza){
    super(nombre,fuerza)
    }
    usarFuerza(){
        const divUsar=document.querySelector('.usarFuerza');
        divPres.innerHTML=`<p>Sith está utilizando la Fuerza para conquistar la galaxia</p>`;
    }
    corromper(){
        let fuerzaSith = parseInt(super.fuerza) + 5;
    }
}