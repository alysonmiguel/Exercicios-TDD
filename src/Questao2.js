class Pilha{
    constructor(tamanho){
        this.tamanho = tamanho;
        this.dados = []; 
        this.topo = -1;
    }

    push(newData){
        if(this.isFull()){
            throw new Error("Overflow");
        }else{
            this.dados[++this.topo] = newData;
        }
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Está vazio")
        }else{
           return this.dados[this.topo--];
        }
    }
 
    size(){
        return  this.topo +1;
    }

    isFull(){
      return this.size() == this.tamanho;
    }

    isEmpty(){
        return this.size() === 0
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Está vazio")
        }else{
            return this.dados[this.topo];
        }
    }
   
}

// so pode ta no pop push peek
export default Pilha;