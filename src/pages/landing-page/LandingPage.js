import { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {

    const [email, setEmail] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const onSubmit = (e) => {
        window.localStorage.setItem(email, email)
        setEmail('')
    }

    return (
    <div className="landing-page">
        <div className="landing-page__content">
            <div className="landing-page__box">
                <h3>Procurando por alguém que crie a arte ideal para sua necessidade?</h3>
                    <h3>Este é o <span className="logo">ArtThatFits</span>, seu match de artista está aqui!</h3>
                <p>Insira seu e-mail abaixo para enviarmos mais informações sobre nosso negócio:</p>
                <div className="email-field-container">
                    <input onChange={onEmailChange} placeholder="Insira seu e-mail aqui" type="text" name="email" value={email}/>
                    <button type="button" onClick={onSubmit}>Enviar</button>
                </div>
            </div>
            <img alt="girl seeing art" src="/images/art_2.svg"/>
        </div>
    </div>)
}

export default LandingPage;