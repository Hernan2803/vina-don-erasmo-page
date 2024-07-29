import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './../context/ThemeContext';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography} from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import blogTag from './../context/BlogTagContext.jsx';
import ExpandedInfo from './ExpandedInfo.jsx';
import getDateConverted from './../utils/getDateConverted';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function BlogCard({publication}) {

    const { theme } = useContext(ThemeContext);
    const [blogTagMenu, setBlogTagMenu] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const blogTagMenu = blogTag();
        setBlogTagMenu(blogTagMenu);
    }, []);

    const getIconTag = (id) => {
        const item = blogTagMenu.find(d => d.id === id);
        return item ? item.icon : '';
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                        {getIconTag(publication.tag)}
                    </Avatar>
                }
                title={publication.title}
                subheader={getDateConverted(publication.id.slice(0, 8))}
            />
            <CardMedia component='img' height='194' image={publication.image} alt={publication.title + ' image'}/>
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                {publication.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={() => handleExpandClick()} aria-label='show more'><ZoomOutMapIcon/></ExpandMore>
            </CardActions>
            <ExpandedInfo data={publication} expanded={expanded} setExpanded={handleExpandClick} icon={getIconTag(publication.tag)}/>
        </Card>
    );
}

BlogCard.propTypes = {
    publication: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string,
        tag: PropTypes.string,
        title: PropTypes.string,
    }).isRequired
};

export default BlogCard;
