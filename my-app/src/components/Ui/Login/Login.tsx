import React, { useState } from 'react';
import FormFild from '../FormFild/FormFild';
import ButtonForm from '../ButtonForm/ButtonForm';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './Login'
const Login = () => {
    const [loading, setLodang] = useState<string | boolean>('')
    const [succes, setSucces] = useState('')


    const CreateShemaForm = z.object({
        login: z.string().min(6, { message: 'Длина должна быть 6 или более символов' }),
        password: z.string().min(7, { message: 'Длина должна быть 7 или более символов' })
    })
    type ShemaForm = z.infer<typeof CreateShemaForm>

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ShemaForm>({
        resolver: zodResolver(CreateShemaForm)
    })
    const onSubmit = (data: ShemaForm) => {

        const lsGetValue = localStorage.getItem('login');
        console.log(lsGetValue)
        let dataArray = []

        if (lsGetValue) {
            dataArray = JSON.parse(lsGetValue)

        }
        dataArray.push(data)
        localStorage.setItem('login', JSON.stringify(dataArray))

        setLodang('Загрузка.....')

        setTimeout(() => {

            setLodang(false)
            setSucces('Ура, данные отправились')
            reset()
        }, 2500)

    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <FormFild label='Логин' errorMessage={errors.login?.message} colorErrorMes='form-error-color'>
                    <input
                        type="text"
                        placeholder='Введите логин'
                        {...register('login')} />
                </FormFild>
                <FormFild label='Пароль' errorMessage={errors.password?.message} colorErrorMes='form-error-color'>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        {...register('password')} />
                </FormFild>
                <ButtonForm type='submit' className='form-btn'> Войти</ButtonForm>

            </form>
            {loading}
            {succes}
        </>



    );
};

export default Login;