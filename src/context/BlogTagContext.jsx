import GradeIcon from '@mui/icons-material/Grade';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CampaignIcon from '@mui/icons-material/Campaign';

const blogTag = () => {

  const blogTagContext = [
    {'id': 'ad', 'name': 'Anuncio', 'icon': <CampaignIcon/>},
    {'id': 'fair', 'name': 'Feria', 'icon': <StorefrontIcon/>},
    {'id': 'o', 'name': 'Otros', 'icon': <GradeIcon/>}
  ];
  
  return blogTagContext;
};

export default blogTag;
