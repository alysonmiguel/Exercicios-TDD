import Fila from "./Fila";

class Clinica{
    constructor(){
        this.fila1 = new Fila(10);
        this.fila2 = new Fila(3)
      }

    InserirCliente(newData){
        if(this.fila2.size() < 3){
            this.fila2.enqueue(newData);
        }else{
            this.fila1.enqueue(newData);
        }
    }

    Atendimento(){
            while(this.fila2.size() < 3 && this.fila1.size() > 0 ){
                this.fila2.enqueue(this.fila1.dequeue());   
            }
            for (let i = 0; i < this.fila2.size(); i++) {
                this.fila2.dequeue();   
            }
    }
    TamanhoFila1(){
        return this.fila1.size();
    }

}



export default Clinica