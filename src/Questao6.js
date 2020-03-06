import Fila from "./Fila";

class DeQ {

    constructor(){
        this.fila1 = new Fila(5);
        this.fila2 = new Fila(5)
      }
    
    
    inserirInicio(newData) {
        if (this.fila1.isFull()){
            throw new Error("Cheio");
        } else if (this.fila1.fim > 0) {
  
        for (let i = 0; i <= this.fila1.size(); i++) {
            this.fila2.enqueue(this.fila1.dequeue());
        }
  
        this.fila1.clear();
  
        this.fila1.enqueue(newData);
        
        for (let i = 0; i <= this.fila2.size(); i++) {
          this.fila1.enqueue(this.fila2.dequeue());
        }
        
        this.fila2.clear();
      }else{
         this.fila1.enqueue(newData);
      }
    }

    InserirFim(newData) {
        this.fila1.enqueue(newData)
    }
  
    RemoverInicio() {
       this.fila1.dequeue();
    }
  
    RemoverFim() {
        for (let i = 0; i < this.fila1.size(); i++) {
            this.fila2.enqueue(this.fila1.dequeue());
        }
        this.fila1.clear();
        for (let i = 0; i <= this.fila2.size(); i++) {
            this.fila1.enqueue(this.fila2.dequeue());
        }
        
    }

    toString(){
        return this.fila1.toString();
    }
  
    size(){
        return this.fila1.size();
    }
  }
  
  export default DeQ;