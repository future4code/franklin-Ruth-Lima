import { performPurchase } from "../src"
import {User} from "../src"


describe("verifica se um usuário pode fazer uma compra ou não", () => {
    test("testa um usuário com o saldo maior do que o valor de compra", () => {
        const user: User = {
            nome: "Ruth",
            saldo: 200
        }
        const result = performPurchase(user, 100)

        expect(result).toEqual({
            nome: "Ruth",
            saldo: 100
        });
    });

    test("testa um usuario com o saldo igual ao valor de compra", () => {
        const user: User = {
            nome: "Ruth",
            saldo: 50
        }
        
        const result = performPurchase(user, 50)

        expect(result).toEqual({
            nome: "Ruth",
            saldo: 0
        });
    });

    test("testa um usuario com o saldo menor do que o valor de compra", () => {
        const user: User = {
            nome: "Ruth",
            saldo: 70
        }
        
        const result = performPurchase(user, 80)

        expect(result).not.toBeDefined()
    })
});

