import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import ProductsMenu from '../components/ProductsMenu'

function Products() {

    const { theme } = useContext(ThemeContext)

    return (
        <section className={"pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" + theme.mainBg} id="products">
            <h2 className={theme.sectionText}>Productos</h2>
            <div className="container mx-auto">
                <ProductsMenu/>
            </div>
        </section>
    )
}

export default Products