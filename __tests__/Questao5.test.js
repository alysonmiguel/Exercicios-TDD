import bin from "../src/Questao5";

test("questao 5", () => {
    let pil = new bin();
    expect(pil.convert(33)).toBe("[100001]");
  });