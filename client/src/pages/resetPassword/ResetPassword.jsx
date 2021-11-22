import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../../components/utils/notification/Notification'
import {isLength, isMatch} from '../../components/utils/validation/Validation'
import './ResetPassword.css'
import { Input } from '../../components/input/Input'

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {token} = useParams()

    const {password, cf_password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post('http://localhost:3005/api/reset', {password}, {
                headers: {Authorization: token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }
    return (
        <div className="container-main-resetPassword">
            <div className="container-resetPassword">
            <img className="logo" src="./assets/img/logo.png" alt="logo" />
            <h2 className="title-resetPassword">RESTABLECER CONTRASEÑA</h2>
            <div className="container-info-resetPassword">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <Input
                label='Contraseña'
                placeholder="******"
                name='password'
                value={password}
                onChange={handleChangeInput} />
                <Input
                 label='Confirmar contraseña'
                 placeholder="******"
                 name='cf_password'
                 value={cf_password}
                 onChange={handleChangeInput} />
                <button className="button-resetPassword" onClick={handleResetPass}>Reset Password</button>
            </div>
            </div>
        </div>
    )
}

export default ResetPassword