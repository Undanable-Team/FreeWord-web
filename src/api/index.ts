import { create } from "domain";
import ky from "ky";
import { registerData } from './../container/RegistrPage/index';

const  strapiAPi = ky.create({
    prefixUrl: "http://localhost:1337/"
})

export const PostRegistr = (data: registerData) => {
return strapiAPi.post('api/auth/local/register', {json:data}).json()
    
    
}