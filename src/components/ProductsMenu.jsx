import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './../context/ThemeContext'
import GradeIcon from '@mui/icons-material/Grade';
import products from './../context/ProductsContext.json'
import ProductsCard from './ProductsCard'
import productsCategory from './../context/ProductsCategoryContext'

function ProductsMenu() {
    const { theme } = useContext(ThemeContext);
    const [select, setSelect] = useState('all');
    const [productsCategoryMenu, setProductsCategoryMenu] = useState([]);

    useEffect(() => {
        const productsCategoryMenu = productsCategory();
        setProductsCategoryMenu(productsCategoryMenu);
    }, []);

    const getNameSelected = () => {
        const item = productsCategoryMenu.find(d => d.id === select);
        return item ? item.name : '';
    };

    return (
        <div className='flex items-center justify-center max-h-screen bg-gray-100'>
            <div className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
                <div className='flex'>
                    {/* <!-- Sección Izquierda --> */}
                    <div className='w-1/4 p-4 border-r'>
                        <button key={'all'} className={'w-full py-2 mb-2 rounded' + (select === 'all' ? theme.highText : theme.mainText)} onClick={() => setSelect('all')}><GradeIcon/>{'Todos'}</button>
                        {productsCategoryMenu.map(element => (
                            <button key={element.id} className={'w-full py-2 mb-2 rounded' + (select === element.id ? theme.highText : theme.mainText)} onClick={() => setSelect(element.id)}>{element.icon}{element.name}</button>
                        ))}
                    </div>
                    {/* <!-- Sección Derecha --> */}
                    <div className='w-3/4 p-4'>
                        <h2 className={'text-xl font-bold mb-2' + theme.titleText}>{'Catalogo de ' + getNameSelected()}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {products.map(productInfo => (
                                select === 'all' ? (
                                    <ProductsCard key={'productCard' + productInfo.id} product={productInfo} />
                                ) : productInfo.category === select ? (
                                    <ProductsCard key={'productCard' + productInfo.id} product={productInfo} />
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsMenu;
