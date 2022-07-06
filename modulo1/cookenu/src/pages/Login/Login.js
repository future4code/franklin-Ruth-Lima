import React from "react";
import { useNavigate } from "react-router-dom";
import {MainContainer, ImagemLogo, InputsContainer, BotaoPadraoLoginPage} from './styled'
import logo from "../../assets/logo.png"
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    
    const onSubmitCadastro = () => {
        navigate("/cadastro")
    }
    
    const [form, onChange, clear] = useForm({email: "", password: ""}) 

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        login(form, clear)
        navigate("/lista/receitas")
    }

    return(
        <MainContainer>
            <ImagemLogo src={logo}/>
            <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"email"}
                />
                <TextField
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"senha"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"password"}
                />
                <BotaoPadraoLoginPage>
                    <Button onSubmit={onSubmitForm}
                    type={"submit"}
                    fullWidth
                    variant={"container"}
                    color={"primary"}
                    >Fazer Login </Button>
                </BotaoPadraoLoginPage>
            </form>
           
            </InputsContainer>
            <BotaoPadraoLoginPage>
                <Button onClick={onSubmitCadastro}
                fullWidth
                >
                Fazer Cadastro
                </Button>
            </BotaoPadraoLoginPage >
        </MainContainer>
        
    )
}

export {LoginPage}