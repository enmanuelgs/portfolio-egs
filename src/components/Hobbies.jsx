import React from 'react';

const Hobbies = () => {
    return (
        <section id="hobbies">
            <h2 className="numbered-heading">Hobbies</h2>
            <p>
                Aunque gran parte de mi tiempo lo dedico a estudiar, estas son algunas de las cosas que me apasionan y en las que invierto mi tiempo libre:
            </p>

            <ul className="hobbies-grid">
                <li>Programar</li>
                <li>Jugar videojuegos</li>
                <li>Escuchar música</li>
                <li>Cantar</li>
                <li>Leer</li>
                <li>Debates y Oratoria</li>
            </ul>
        </section>
    );
};

export default Hobbies;
