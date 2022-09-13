export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if(!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' invàlido")
        }

        if(!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' invàlido")
        }
    
        if(!email.includes('@')){
            throw new Error("Email invàlido")
        }
    } 
}