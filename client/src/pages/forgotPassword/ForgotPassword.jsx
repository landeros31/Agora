import React, {useState} from 'react'
import axios from 'axios'
import {isEmail} from '../../components/utils/validation/Validation'
import {showErrMsg, showSuccessMsg} from '../../components/utils/notification/Notification'
import { Input } from '../../components/input/Input'
import './ForgotPassword.css'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('http://localhost:3005/api/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }
    
    return (
        <div className="container-main-forgotPassword">
            <div className="container-forgotPassword">
            <img className="logo" src="./assets/img/logo.png" alt="logo" />
            <h2 className="title-forgotPassword">OLVIDASTE TU CONTRASEÑA?</h2>

            <div className="container-info-forgotPassword">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <Input 
                label='Ingresa tu correo electronico'
                placeholder="Juan@hotmail.com"
                name='email'
                value={email}
                onChange={handleChangeInput}
                />
                <button className="button-forgotPassword" onClick={forgotPassword}>Verificar tu correo</button>
            </div>
            </div>
        </div>
    )
}

export default ForgotPassword