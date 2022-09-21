export type User = {
	nome: string,
	saldo: number
}



export function performPurchase(user: User, value: number): User | undefined {
    if(user.saldo >= value) {
        user.saldo= user.saldo - value
        return user
            
}
    if(user.saldo < value){
        return undefined
    }
  
}


