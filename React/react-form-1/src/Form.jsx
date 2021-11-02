import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'
const Form = () => {
    const [isSubmited, setIsSubmited] = useState(false);

    function submitForm() {
        setIsSubmited(true)
    }
    return (
        <>
            <div className="form-container">
                <spa className="close-btn">
x
                </spa>
             
                {!isSubmited ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
            </div>



        </>
    )
}

export default Form
