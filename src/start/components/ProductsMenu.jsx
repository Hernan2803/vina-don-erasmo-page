import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import WineBarIcon from '@mui/icons-material/WineBar'
import LiquorIcon from '@mui/icons-material/Liquor'
import products from './../context/ProductsContext.json'
import ProductsCard from './ProductsCard'

function ProductsMenu() {
    const { theme } = useContext(ThemeContext);
    const [select, setSelect] = useState("wine");

    return (
        <div className="flex items-center justify-center max-h-screen bg-gray-100">

            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden ">
                <div className="flex">
                    {/* <!-- Sección Izquierda --> */}
                    <div className="w-1/4 p-4 border-r">
                        <button className={"w-full py-2 mb-2 rounded" + (select === "wine" ? theme.primaryText : theme.mainText)} onClick={() => setSelect("wine")}><WineBarIcon/>Vinos</button>
                        <button className={"w-full py-2 mb-2 rounded" + (select === "liquor" ? theme.primaryText : theme.mainText)} onClick={() => setSelect("liquor")}><LiquorIcon/>Licores</button>
                    </div>
                    {/* <!-- Sección Derecha --> */}
                    <div className="w-3/4 p-4">
                        <h2 className="text-xl font-bold mb-2">{"Catalogo de " + (select === "wine" ? "Vinos" : "Licores")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map(productInfo => (
                                productInfo.category === select ? (
                                    <ProductsCard key={"productCard" + productInfo.sku} product={productInfo} />
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsMenu