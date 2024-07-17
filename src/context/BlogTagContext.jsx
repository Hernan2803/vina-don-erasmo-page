import GradeIcon from '@mui/icons-material/Grade';
import StorefrontIcon from '@mui/icons-material/Storefront';
import blogTagJSON from './BlogTagContext.json';

const blogTag = () => {

  const blogTagContext = [];
  blogTagJSON.map((item) => {
    blogTagContext.push(
      {
        'id': item.id,
        'name': item.name,
        'icon': item.id === 'ad' ? <GradeIcon/> : <StorefrontIcon/>
      }
    );
  });

  return blogTagContext;
};

export default blogTag;
