import React from 'react'
import { useForm } from "react-hook-form";
import { FaArrowLeft } from 'react-icons/fa';

const ResetPassForm = (props) => {

    const { register, handleSubmit, errors, setError } = useForm();

    function onSubmit(data) {
        console.log("Data submitted: ", data);
        setError("email", {
            type: "manual",
            message: "E-mail não cadastrado."
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <p>Informe um e-mail cadastrado no qual você receberá os passos para redefinição de senha.</p>
            <input
                type='email'
                id='inputEmail'
                name='email'
                ref={register({ required: 'Digite um e-mail valido.' })}
                placeholder='E-mail'
                maxLength='44'
                className={errors.email && 'ma-input-error'}

            />
            {errors.email && <p className='ma-p-error'>{errors.email.message}</p>}
            <button type='submit'><span>Enviar</span></button>
            <div className='ma-div-navifation'>
                <a href='#' onClick={e => props.setLogin(true)}><FaArrowLeft />Voltar</a>
            </div>
        </form>
    )
}

export default ResetPassForm