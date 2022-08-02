import React from "react";
import { useNavigate } from "react-router-dom";
import {MainContainer, ImagemLogo, InputsContainer, BotaoFazerCadastro} from './styled'
import logo from "../../assets/logo.png"
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { cadastro } from "../../services/user";


const Cadastro = () => {
    
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({name: " ", email: " ", password: " "})

    const onSubmitForm = (event) => {
        event.preventDefault()
        cadastro(form, clear)
        navigate("/lista/receitas")
    }
    
    return(
        <MainContainer>
            <ImagemLogo src={logo}/>
            <InputsContainer>
            <form onSubmit={onSubmitForm}>
            <TextField
                name={"name"}
                value={form.name}
                onChange={onChange}
                label={"Nome"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"name"}
                />
                <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"Email"}
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
                label={"Senha"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"password"}
                />
           </form>
           </InputsContainer>
            <BotaoFazerCadastro>
                <Button  
                type={"submit"}
                fullWidth
                variant={"text"}
                onSubmit={onSubmitForm}
                >
                Cadastrar
                </Button>
            </BotaoFazerCadastro> 
        </MainContainer>
    )
}

export {Cadastro}