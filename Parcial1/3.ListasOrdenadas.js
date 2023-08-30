class Nodo{
    constructor(valor, siguiente = null){
        this.valor = valor;
        this.siguiente = siguiente;
    }
}
class Linkedlist{
    constructor(){
        this.cabeza = null;
        this.cola = null;
    }
    agregar(valor){
        const newNodo = new Nodo(valor);
        if(!this.cabeza){
            this.cabeza = newNodo;
            this.cola = newNodo;
        }else{
            this.cola.siguiente = newNodo;
            this.cola = newNodo;
        }
        this.longitud++;
    
    }

    imprimir(){
        let actual = this.cabeza;
        let resultado = '';
        while(actual){
            resultado += actual.valor + ' -> ';
            actual = actual.siguiente;
        }
        resultado += 'null';
        console.log(resultado);
    }
    concatenar(lista){
        this.cola.siguiente = lista.cabeza;
        this.cola = lista.cola;
        this.longitud += lista.longitud;
    }
}
// crear listas ordenadas
    const lista1 = new Linkedlist();
    lista1.agregar(1);
    lista1.agregar(3);
    lista1.agregar(5);
    lista1.agregar(7);
    lista1.agregar(9);
    
 const lista2 = new Linkedlist();
 lista2.agregar(2);
 lista2.agregar(4);
 lista2.agregar(6);
 lista2.agregar(8);
 lista2.agregar(10);

// Ordenar y concatenar listas
function ordenarListas(lista1, lista2){
    let listaOrdenada = new Linkedlist();
    let actual1 = lista1.cabeza;
    let actual2 = lista2.cabeza;
    while(actual1 && actual2){
        if(actual1.valor < actual2.valor){
            listaOrdenada.agregar(actual1.valor);
            actual1 = actual1.siguiente;
        }else{
            listaOrdenada.agregar(actual2.valor);
            actual2 = actual2.siguiente;
        }
    }
    while(actual1){
        listaOrdenada.agregar(actual1.valor);
        actual1 = actual1.siguiente;
    }
    while(actual2){
        listaOrdenada.agregar(actual2.valor);
        actual2 = actual2.siguiente;
    }
    return listaOrdenada;
}
ordenarListas(lista1, lista2).imprimir();
console.log(ordenarListas(lista1, lista2));
