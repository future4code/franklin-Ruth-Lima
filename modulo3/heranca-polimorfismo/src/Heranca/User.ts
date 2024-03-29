export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          console.log(this.id)
          return this.id
      }
  
      public getEmail(): string {
          console.log(this.email)
          return this.email
      }
  
      public getName(): string {
          console.log(this.name)
          return this.name
      }

      public getIntroduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
      }
     
  }

  