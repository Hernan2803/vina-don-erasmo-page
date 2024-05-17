import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Products({ current }) {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={theme.mainBg} id="products">
            <h1>Products</h1>
        </section>
    )
}

export default Products