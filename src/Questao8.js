import Pilha from "./Pilhas";

class Parentesis{

    constructor(texto){
        this.texto = texto;
        this.pilha = new Pilha(texto.length); 
    }

    formacao(){

        let letra
        for (let i = 0; i < this.texto.length; i++) {
            letra = this.texto.charAt(i);
            if(letra === "[" || letra === "("){
                this.pilha.push(letra)
            }else if(letra === "]" || letra === ")"){
                if(this.pilha.isEmpty()){
                    return "mal formada";
                }else if(this.pilha.top() === "[" && letra === "]"){
                    this.pilha.pop();
                }else if(this.pilha.top() === "(" && letra === ")"){
                    this.pilha.pop();
                }
            }   
        }
        if(this.pilha.isEmpty()) {
            return "bem formada";
        }else {
            return "mal formada";
        }
    }

}

export default Parentesis;