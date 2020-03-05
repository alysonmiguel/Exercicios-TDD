import Pilha from "./Pilhas";

class FilaComPilha{

    pilha1 = new Pilha(5);
    pilha2 = new Pilha(5);

    enqueue(newData){
        this.pilha1.push(newData);
    }
    
    dequeue(){
            for (let i = 0; i < this.pilha1.size(); i++) {
                this.pilha2.push(this.pilha1.pop());
            }
        return this.pilha2.pop();
    }
}

export default FilaComPilha;