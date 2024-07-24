import { ThemeContext } from './../context/ThemeContext'
import { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import publications from './../context/BlogContext.json'

function Blog() {

    const { theme } = useContext(ThemeContext)

    return (
        <section className={'pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]' + theme.mainBg} id='blog'>
            <h2 className={theme.sectionText}>Novedades</h2>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                {publications.map(publication => (
                    <BlogCard key={'publicationtCard' + publication.id} publication={publication}/>
                ))}
            </div>
        </section>
    )
}

export default Blog