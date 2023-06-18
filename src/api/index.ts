import { registerData } from "@/components/Register";
import { create } from "domain";
import ky from "ky";

const  strapiAPi = ky.create({
    prefixUrl: "http://localhost:1337/"
})

export const PostRegistr = (data: registerData) => {
return strapiAPi.post('api/auth/local/register', {json:data}).json()
}

export const userAuth = (data: authData) => {
  return strapiAPi.post('api/auth/local', { json: data }).json();
};