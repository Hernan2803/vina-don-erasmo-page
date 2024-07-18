import GradeIcon from '@mui/icons-material/Grade';
import LiquorIcon from '@mui/icons-material/Liquor';
import WineBarIcon from '@mui/icons-material/WineBar';

const productsCategory = () => {

  const productsCategoryContext = [
    {'id': 'liquor', 'name': 'Licores', 'icon': <WineBarIcon/>},
    {'id': 'wine', 'name': 'Vinos', 'icon': <LiquorIcon/>},
    {'id': 'o', 'name': 'Otros', 'icon': <GradeIcon/>}
  ];

  return productsCategoryContext;
};

export default productsCategory;
