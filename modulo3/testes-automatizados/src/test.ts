
export default interface User {
	nome: string
	saldo: number
}

function performPurchase(user: User, value: number): User | undefined {
    if(user.saldo >= value) {
        return {
            ...user,
            saldo: user.saldo - value
    }
}
    return undefined
}