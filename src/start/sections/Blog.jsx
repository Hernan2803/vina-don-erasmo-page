import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Blog({ current }) {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={theme.mainBg} id="blog">
        <h1>Blog</h1>
        </section>
    )
}

export default Blog