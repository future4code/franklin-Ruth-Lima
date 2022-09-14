import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import { USER_ROLES } from '../model/User'

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

export default class Authenticator {
    generateToken = (payload: authenticationData) => {
       return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as ITokenPayload
        } catch (error) {
            return null
        }
    }

}