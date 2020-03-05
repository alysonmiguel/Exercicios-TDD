import Pilha from "./Pilhas";

class bin{

    pilha1 = new Pilha(8);

    convert(num) {  
        for (let i = num; i > 0;) {
          this.pilha1.push(parseInt(num % 2));
          i = Math.floor(num /= 2);
        }

        return this.pilha1.toStringBinario();
      }
}
export default bin;