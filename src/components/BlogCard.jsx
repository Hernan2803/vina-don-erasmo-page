import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './../context/ThemeContext'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import blogTag from './../context/BlogTagContext.jsx'

function BlogCard({publication}) {

    const { theme } = useContext(ThemeContext)
    const [blogTagMenu, setBlogTagMenu] = useState([]);

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

    let dateString = publication.id.slice(0, 8);

    // Formatear la fecha en el formato deseado
    let formattedDate = `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}`;

    let fechaInicial = new Date(`${formattedDate}T00:00:00`);
    let fechaActual = new Date();

    // Calcular la diferencia en milisegundos
    let diferenciaEnMilisegundos = fechaActual - fechaInicial;

    // Convertir la diferencia en días, semanas, meses y años
    let dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    let semanas = Math.floor(dias / 7);
    let meses = fechaActual.getMonth() - fechaInicial.getMonth() + (12 * (fechaActual.getFullYear() - fechaInicial.getFullYear()));
    let años = fechaActual.getFullYear() - fechaInicial.getFullYear();

    var timeMsg = "1 día"
    if (años > 0) {
        timeMsg = `${años} año${años > 1 ? 's' : ''}`;
    } else if (meses > 0) {
        timeMsg = `${meses} mes${meses > 1 ? 'es' : ''}`;
    } else if (semanas > 0) {
        timeMsg = `${semanas} semana${semanas > 1 ? 's' : ''}`;
    } else {
        timeMsg = `${dias} día${dias > 1 ? 's' : ''}`;
    }

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                    {getIconTag(publication.tag)}{getNameTag(publication.tag)}
                </span>

                <span className="text-sm">{timeMsg}</span>
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">{publication.title}</a></h2>
            <p className="mb-5 font-light text-gray-500">{publication.description}</p>

            <div className="flex justify-between items-center">
                <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline">
                    Ver más<ArrowForwardIcon/>
                </a>
            </div>
        </article>
    )
}

export default BlogCard