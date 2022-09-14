

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
public getCpf():void{
    console.log(this.cpf)
}
public getName():void{
    console.log(this.name)
}
public getAge():void{
    console.log(this.age)
}
  }

  const ruth = new UserAccount("234567890", "Ruth", 26)
  ruth.getCpf()
  ruth.getName()
  ruth.getAge()
  

class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string, value: number, date: string){
        console.log("Chamando o construtor da classe Transaction")
        this.description = description;
        this.value = value;
        this.date = date;
    }
public getDescription():void{
    console.log(this.description)
    }
public getValue():void{
        console.log(this.value)
    }
public getDate():void{
    console.log(this.date)
}
}

  const info = new Transaction("realizacao de uma transação", 234, "30-08-2022")
  info.getDescription()
  info.getValue()
  info.getDate()
  

  class Bank {
      private accounts: UserAccount[]

      constructor(accounts: UserAccount[]){
          this.accounts = accounts
      }
      public getAccount():void{
          console.log(this.accounts)
      }
  }

  