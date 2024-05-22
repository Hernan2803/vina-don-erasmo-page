import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';

function ProductsCard({product}) {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.translations.sp.name}</div>
                    <p className="text-gray-700 text-base">
                    {product.translations.sp.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard