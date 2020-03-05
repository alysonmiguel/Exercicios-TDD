import Clinica from "../src/Questao7";

let fila;

beforeEach(() => {
    fila = new Clinica();
});

test("Inserir cliente", () => {
    fila.InserirCliente(1);
    fila.InserirCliente(2);
    fila.InserirCliente(3);
    fila.InserirCliente(4);
    expect(fila.TamanhoFila1()).toBe(1);
})

test("Atendimento", () => {
    fila.InserirCliente(1);
    fila.InserirCliente(4);
    fila.InserirCliente(4);
    fila.InserirCliente(4);
    fila.InserirCliente(4);
    fila.Atendimento()
    expect(fila.TamanhoFila1()).toBe(2);
})