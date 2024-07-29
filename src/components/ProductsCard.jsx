import { useContext } from 'react'
import { ThemeContext } from './../context/ThemeContext'
import PropTypes from 'prop-types';
import MarkdownRenderer from './../utils/MarkdownRenderer';

function ProductsCard({product}) {

    const { theme } = useContext(ThemeContext)

    return (
        <div className="max-w-sm bg-main-purple-300 shadow-md rounded-lg overflow-hidden shadow-lg">
            <div className="flex">
                <img className="h-full w-1/4" src="" alt={product.image}/>
                <div className="px-6 py-4 w-3/4">
                    <div className="font-bold text-xl mb-2">{product.translations.sp.name}</div>
                    <p className="text-gray-700 text-base">
                        <MarkdownRenderer markdown={product.translations.sp.description}/>
                    </p>
                </div>
            </div>
        </div>
    )
}

ProductsCard.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        image: PropTypes.string,
        translations: PropTypes.shape({
            sp: PropTypes.shape({
                description: PropTypes.string,
                name: PropTypes.string,
            }),
        }),
    }).isRequired,
};

export default ProductsCard;
