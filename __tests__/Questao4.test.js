import FilaComPilha from "../src/Questao4";



let f;

beforeEach(() => {
    f = new FilaComPilha(5);
});

test("Teste de overflow", () => {
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	expect(() => {
		f.enqueue(5);
	}).toThrowError("Overflow");
});

test("Teste de underflow", () => {
	expect(() => {
		f.dequeue();
	}).toThrowError("Underflow")
});

test("test", () => {
	f.enqueue(2);
	f.enqueue(2);
	f.enqueue(4);
	expect(f.dequeue()).toBe(2)
});
