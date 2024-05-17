import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function About({ current }) {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={theme.mainBg} id="about">
        <h1>Nosotros</h1>
        </section>
    )
}

export default About