import Pilha from "../src/Questao2";

let pi

beforeEach(() => {
  pi = new Pilha(5); 
});

test("questao 2", () => {
    pi.push(1);
    pi.push(2);
    pi.push(3);
    pi.push(4);
    pi.push(5);
    expect(pi.Inverte()).toBe("[52341]");
  });
  
