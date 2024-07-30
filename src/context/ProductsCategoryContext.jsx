import AddBoxIcon from '@mui/icons-material/AddBox';
import LiquorIcon from '@mui/icons-material/Liquor';
import WineBarIcon from '@mui/icons-material/WineBar';

const productsCategory = () => {

  const productsCategoryContext = [
    {'id': 'liquor', 'name': 'Licores', 'icon': <WineBarIcon/>},
    {'id': 'wine', 'name': 'Vinos', 'icon': <LiquorIcon/>},
    {'id': 'o', 'name': 'Otros', 'icon': <AddBoxIcon/>}
  ];

  return productsCategoryContext;
};

export default productsCategory;
