import Parentesis from "../src/Questao8"

test("Bem-formada", () => {
    let parentesis = new Parentesis("[()[()]]()");
    expect(parentesis.formacao()).toBe("bem formada");
})

test("Mal-formada", () => {
    let parentesis = new Parentesis("(()]");
    expect(parentesis.formacao()).toBe("mal formada");
})

