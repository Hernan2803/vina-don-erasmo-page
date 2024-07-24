import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './../context/ThemeContext';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import blogTag from './../context/BlogTagContext.jsx';

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

function convertirFecha(fechaStr) {
    // Parse the date in YYYYMMDD format
    const year = fechaStr.substring(0, 4);
    const month = fechaStr.substring(4, 6);
    const day = fechaStr.substring(6, 8);

    // Create a Date object
    const date = new Date(year, month - 1, day);

    // Get the name of the month in Spanish
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const nameMonth = months[date.getMonth()];

    // Format the date to 'Month DD, YYYY'
    const dateFormatted = `${nameMonth} ${day}, ${year}`;

    return dateFormatted;
}

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
    const getNameTag = (id) => {
        const item = blogTagMenu.find(d => d.id === id);
        return item ? item.name : '';
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
                subheader={convertirFecha(publication.id.slice(0, 8))}
            />
            <CardMedia component='img'
                height='194'
                image={publication.image}
                alt={publication.title + ' image'}
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                {publication.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='Me gusta'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='Compsrtir'>
                    <ShareIcon/>
                </IconButton>
                <ExpandMore expand={expanded} onClick={() => handleExpandClick()} aria-label='show more'>
                    <ZoomOutMapIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default BlogCard;

BlogCard.propTypes = {
    publication: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string,
        tag: PropTypes.string,
        title: PropTypes.string,
    }).isRequired
};
