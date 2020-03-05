import PilhaComFila from "../src/Questao3";

test("LIFO", () => {
    let p = new PilhaComFila();
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(3);
    
expect(p.pop()).toBe(3)
});