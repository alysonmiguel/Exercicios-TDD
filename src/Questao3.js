import Fila from "./Fila";

class PilhaComFila {
  fila1 = new Fila(5);
  fila2 = new Fila(5);

  push(newData) {
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
     
    console.log(this.fila1);
    console.log(this.fila2);

  }

  pop(){
    if(this.fila1.isEmpty()){
      throw new Error("Underflow");
    }else{
       return this.fila1.dequeue();
    }
  }

  
 
}
export default PilhaComFila;
