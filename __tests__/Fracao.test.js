import Fracao from "../src/Fracao";

let f , f1;

beforeEach(() => {
    f = new Fracao(1,3)
    f1 = new Fracao(2,3);    
});

test("Multiplicação", () => {
    expect(f.mult(f1)).toBe("2/9");
});

test("Divisão", () => {
    expect(f.div(f1)).toBe("3/6");
});
