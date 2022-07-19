import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("Retorna true se o array possui um ou mais itens repetidos", () => {
        const resultado = checaItensDuplicados([1, 2 ,1]);
    
        expect(resultado).toEqual(true);
      });

      test("Retorna true se o array possui um ou mais itens repetidos", () => {
        const resultado = checaItensDuplicados(["a", "a", "b", "c"]);
    
        expect(resultado).toEqual(true);
      });

      test("Retorna false somente se todos os itens do array forem distintos", () => {
        const resultado = checaItensDuplicados([1, 2, 3]);
    
        expect(resultado).toEqual(false);
      });

      test("Retorna false se o array for vazio", () => {
        const resultado = checaItensDuplicados([]);
    
        expect(resultado).toEqual(false);
      });
});
