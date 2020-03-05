import bin from "../src/Questao5";

test("questao 5", () => {
    let pil = new bin();
    pil.convert(3);
    expect(pil.pilha1.toString()).toBe("[00000011]");
  });