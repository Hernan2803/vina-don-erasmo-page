import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import ProductsMenu from '../components/ProductsMenu';

function Products({ current }) {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={theme.mainBg} id="products">
            <div className="md:container md:mx-auto">
                <ProductsMenu/>
            </div>
        </section>
    )
}

export default Products