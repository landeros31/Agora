import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
    showErrMsg,
    showSuccessMsg
} from '../../components/utils/notification/Notification'
import {
    isEmpty,
    isEmail,
    isLength,
    isMatch
} from '../../components/utils/validation/Validation'
import './Register.css'
import { Input } from '../../components/input/Input'

const initialState = {
    name: '',
    middleName:'',
    lastName: '',
    secondSurname:'',
    contactNumber: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {
        name,
        middleName,
        lastName,
        secondSurname,
        contactNumber,
        email,
        password,
        cf_password,
        err,
        success
    } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (isEmpty(name) || isEmpty(password))
            return setUser({
                ...user,
                err: 'Please fill in all fields.',
                success: ''
            })
            if (isEmpty(middleName) || isEmpty(password))
            return setUser({
                ...user,
                err: 'Please fill in all fields.',
                success: ''
            })
        if (isEmpty(lastName) || isEmpty(password))
            return setUser({
                ...user,
                err: 'Please fill in all fields.',
                success: ''
            })
            if (isEmpty(secondSurname) || isEmpty(password))
            return setUser({
                ...user,
                err: 'Please fill in all fields.',
                success: ''
            })

        if (!isEmail(email))
            return setUser({ ...user, err: 'Invalid emails.', success: '' })

        if (isLength(contactNumber))
            return setUser({
                ...user,
                err: 'telefono must be at least 10 characters.',
                success: ''
            })

        if (isLength(password))
            return setUser({
                ...user,
                err: 'Password must be at least 6 characters.',
                success: ''
            })

        if (!isMatch(password, cf_password))
            return setUser({ ...user, err: 'Password did not match..', success: '' })

        try {
            const res = await axios.post('http://localhost:3005/api/register', {
                name,
                middleName,
                lastName,
                secondSurname,
                contactNumber,
                email,
                password
            })

            setUser({ ...user, err: '', success: res.data.msg })
        } catch (err) {
            console.log(err.response)
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="container-register">
            <div className='register_page'>
                <img className='logo-register' src='./assets/img/logo.png' alt='logo' />
                <h2 className='title-register'>REGISTRATE</h2>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className="register-form-content">
                    <form className='register-form' onSubmit={handleSubmit}>
                        <div className="container-register-input">
                            <Input
                                label='Primer nombre'
                                placeholder="Juan"
                                name='name'
                                value={name}
                                onChange={handleChangeInput}
                            />
                            <Input
                                label='Segundo nombre'
                                placeholder="David"
                                name='middleName'
                                value={middleName}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="container-register-input">
                            <Input
                                label='Primer apellido'
                                placeholder="Perez"
                                name='lastName'
                                value={lastName}
                                onChange={handleChangeInput}
                            />
                            <Input
                                label='Segundo apellido'
                                placeholder="Diaz"
                                name='secondSurname'
                                value={secondSurname}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="container-register-input">
                            <Input
                                label='Correo'
                                placeholder="Luis@hotmail.com"
                                name='email'
                                value={email}
                                onChange={handleChangeInput}
                            />
                            <Input
                                label='Contraseña'
                                placeholder="******"
                                name='password'
                                value={password}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="container-register-input">
                            <Input
                                label='Confirmar contraseña'
                                placeholder="******"
                                name='cf_password'
                                value={cf_password}
                                onChange={handleChangeInput}
                            />
                            <Input
                                label='Telefono'
                                placeholder="+57 313 300 300"
                                name='contactNumber'
                                value={contactNumber}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="container-register-input">
                            <label>Ingresa una imagen</label>
                            <button className="button-photo"type="submit">Escoger un archivo</button>
                            </div>

                        <button className="button-submit-register" type='submit'>CREAR CUENTA</button>
                        <p className="link-register">
                            Ya tienes cuenta? <Link className="link-register" to='/login'>Login</Link>
                        </p>
                    </form>
                </div>


            </div>
        </div>

    )
}

export default Register
