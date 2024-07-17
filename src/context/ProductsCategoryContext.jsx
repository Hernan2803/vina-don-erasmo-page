import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import productsCategoryJSON from './ProductsCategoryContext.json';

const productsCategory = () => {

  const productsCategoryContext = [];
  productsCategoryJSON.map((category) => {
    productsCategoryContext.push(
      {
        'id': category.id,
        'name': category.name,
        'icon': category.id === 'wine' ? <WineBarIcon/> : <LiquorIcon/>
      }
    );
  });

  return productsCategoryContext;
};

export default productsCategory;
