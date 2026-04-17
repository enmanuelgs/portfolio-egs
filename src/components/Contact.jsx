import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="numbered-heading overline">¿Qué sigue?</h2>
            <h2 className="title">Ponte en contacto</h2>

            <p className="contact-text">
                Mi bandeja de entrada siempre está abierta.
                Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible por responderte!
            </p>

            <a
                href="mailto:enmanuelgs002@gmail.com?subject=Hola Enmanuel!"
                className="email-link"
            >
                Di Hola
            </a>
        </section>
    );
};

export default Contact;
