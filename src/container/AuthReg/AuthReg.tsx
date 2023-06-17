import React, { useEffect, useState } from 'react'
import styles from './authreg.module.sass'
import { Button, TextField } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackgroundParticles from '@/components/BackgroundParticles/BackgroundParticles'
import { userAuth } from '@/api'
import Cookies from 'cookies-js'
import ForgotPassword from '@/components/ForgetPass/ForgotPass'



export interface authData {
    identifier: string
    password: string
}

 const AuthReg= () => {
    
    const [user, setUser] = useState<authData>({
        identifier: '',
        password: '',
    })
   const [errors, setErrors] = useState<any>()

    const navigate = useRouter()

    const [loginSubmit, setLoginSubmit] = useState<boolean>(false)

    useEffect(() => {
        if (user.identifier !== '' && user.password !== '') {
            setLoginSubmit(false)
        } else {
            setLoginSubmit(true)
        }
    }, [user])
    

    const submit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // if(user.identifier == acc.identifier && user.password == acc.password ){
        //     navigate.push('/Test')
        // } else {
        //     console.log('error')
        // }
      
      const data = await  userAuth(user).then((data: any) => {
            Cookies.set("key", data.jwt)
            navigate.push("/Test")
            setUser({identifier: '',
            password: '',})
       
      }).catch((err) =>{ 
        setErrors('Неправельно введен Email или password')

      })

        // loginUser(user).then((resp) => {
        //     Cookie.set('token', resp.data.jwt, { expires: 7 })
        //     navigate.push('/')
        // })
    }

    const change = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev: authData) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }


    return (
        <div className={styles.wraper}>

      <form className={styles.form} onSubmit={submit}>        
            <h2 className={styles['form-title']}>Авторизация</h2>
            <div className={styles['form-content']}>
                <TextField
                    id="outlined-basic"
                    label="Логин"
                    variant="outlined"
                    
                    name="identifier"
                    required
                    color="secondary"
                    onChange={ change}
                />
                <TextField
                    id="outlined-basic"
                    type="password"
                    label="Пароль"
                    variant="outlined"
                    name="password"
                    required
                    onChange={change}
                />
                <Button variant="contained" type="submit" disabled={loginSubmit}>
                    Войти
                </Button>
                <span>
                    Нету аккаунта? Тогда <Link  className={styles.forget} href="/auth/register">зарегистрируйтесь</Link>
                </span>
                <span className={styles.forget}>
                    <ForgotPassword/>
                    </span>
                <span className={styles.err}>
                    {errors}
                </span>
            </div>
        </form>
       
        </div>
      
    )
}

export default AuthReg