import React, { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom'

import CredentialManager from '../../../common/Auth/CredentialsManager'

const CredentialsForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const [auth, setAuth] = useState(false)

    function onSubmit(data) {
        CredentialManager.setUserToken('dfafdsafda')
        CredentialManager.setAuthenticatedUser(true)
        setAuth(true)
    
    }

    if(auth){
        return <Redirect to='/home'  />
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                    type='text'
                    id='inputUser'
                    name='user'
                    ref={register({ required: "Enter your user name" })}
                    placeholder='Digite seu usuário'
                    maxLength='44'
                    className={errors.user && 'ma-input-error'}

                />

                <input
                    type='password'
                    id='inputPassword'
                    name='password'
                    ref={register({ required: "Enter your password" })}
                    placeholder='Digite sua senha'
                    maxLength='15'
                    className={errors.password && 'ma-input-error'}
                />

                <button type='submit'><span>Entrar</span></button>
            </form>
            <div className='ma-div-navifation'>
                <a href="#" onClick={e => props.setLogin(false)}>Esqueci a senha</a>
            </div>
        </Fragment>
    )
}

export default CredentialsForm