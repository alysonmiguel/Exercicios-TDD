import Pilha from "../src/Questao2";

test("questao 2", () => {
    let pil = new Pilha(5)
    let aux = new Pilha(5);
    let fin = new Pilha(5);
  
    pil.push(1);
    pil.push(2);
    pil.push(3);
    pil.push(4);
    pil.push(5);
  
    fin.push(pil.pop());
  
    aux.push(pil.pop());
    aux.push(pil.pop());
    aux.push(pil.pop());
  
    fin.push(aux.pop());
    fin.push(aux.pop());
    fin.push(aux.pop());
  
    fin.push(pil.pop());
  
    expect(fin.top()).toBe(1);
  });
  