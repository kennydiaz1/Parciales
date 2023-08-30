class Pila{
    constructor(){
        this.pila = [];
    }
    push(elemento){
        this.pila.push(elemento);
    }
    pop(){
        return this.pila.pop();
    }
    peek(){
        return this.pila[this.pila.length - 1];
    }
    size(){
        return this.pila.length;
    }
    print(){
        console.log(this.pila);
    }
}
const pila = new Pila();
pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
pila.push(5);
pila.print();
console.log(pila.peek());
console.log(pila.size());

// Funcion invertir Pila
function invertirPila(pila){
    let pilaInvertida = new Pila();
    while(pila.size() > 0){
        pilaInvertida.push(pila.pop());
    }
    return pilaInvertida;
}
console.log(invertirPila(pila).print());