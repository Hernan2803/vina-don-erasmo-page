import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={theme.mainBg} id="home">
            <h1>Inicio</h1>
        </section>
    )
}

export default Home