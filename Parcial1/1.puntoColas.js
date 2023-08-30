class Cola {
    constructor() {
        this.cola = [];
    }
    encolar(elemento) {
        this.cola.push(elemento);
        return this.cola;
    }
    desencolar() {
        return this.cola.shift();
    }
    estaVacia() {
        return this.cola.length === 0;
    }
    verPrimero() {
        return this.cola[0];
    }
    verUltimo() {
        return this.cola[this.cola.length - 1];
    }
    verCola() {
        return this.cola;
    }
    longitud() {
        return this.cola.length;
    }
}
const cola = new Cola( );
cola.encolar(1.1);
cola.encolar(2.2);
cola.encolar(3.3);
cola.encolar(4.4);
cola.encolar(5.5);
console.log(cola.verCola());

// Funcion invertir Cola
function invertirCola(cola) {
cola.reverse();
return cola;
}
console.log(invertirCola(cola.verCola()));




