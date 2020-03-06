import DeQ from "../src/Questao6";

let fila;

beforeEach(() => {
    fila = new DeQ();
});

test("Inserir no inicio", () => {
    fila.inserirInicio(1);
    fila.inserirInicio(3);
    expect(fila.size()).toBe(2);
});

test("Inserir no fim", () => {
    let fila = new DeQ();
    fila.InserirFim(1);
    fila.InserirFim(3);
    fila.InserirFim(2);
    fila.InserirFim(5);
expect(fila.toString()).toBe("[1325]");
});

test("Remover no inicio", () => {
    let fila = new DeQ();
    fila.InserirFim(1);
    fila.InserirFim(2);
    fila.InserirFim(3);
    fila.RemoverInicio();
expect(fila.toString()).toBe("[23]");
});

test("Remover no fim", () => {
    let fila = new DeQ();
    fila.InserirFim(1);
    fila.InserirFim(2);
    fila.InserirFim(3);
    fila.RemoverFim();
expect(fila.toString()).toBe("[12]");
});