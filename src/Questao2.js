import Pilha from "./Pilhas"

class TrocarElemento{
    
    constructor(){
        this.pi = new Pilha(5);
        this.aux = new Pilha(5);
        this.fin = new Pilha(5);
    }


    push(novo){
        this.pi.push(novo);
    }

    Inverte(){
        this.fin.push(this.pi.pop());

       while(this.pi.size() != 1) {
           this.aux.push(this.pi.pop()); 
        }  

      while(this.aux.size() >= 1) {
            this.fin.push(this.aux.pop()); 
        }  
        this.fin.push(this.pi.pop());

        return this.fin.toString();
    }


}

export default TrocarElemento;