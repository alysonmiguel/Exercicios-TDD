import Pilha from "./Pilhas";

class bin{

    pilha1 = new Pilha(8);
    pilha2 = new Pilha(8);

    convert(num) {  
        for (let i = num; i >= 0; i--) {
          this.pilha1.push(parseInt((num % 2)))
          num /= 2
        }
        for(let i =0; i <= this.topo; i++){
            this.pilha2.push(this.pilha1.pop());
        }
    
        console.log(this.pilha1.toString());
        console.log(this.pilha2.toString());
        
     }
}
export default bin;