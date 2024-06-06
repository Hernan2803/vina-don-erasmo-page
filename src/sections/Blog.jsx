import { ThemeContext } from './../context/ThemeContext'
import { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import publications from './../context/BlogContext.json' 

function Blog() {

    const { theme } = useContext(ThemeContext)

    return (
        <section className={"pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" + theme.mainBg} id="blog">
            <h2 className={theme.sectionText}>Novedades</h2>



            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="grid gap-8 lg:grid-cols-2">
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Tutorial
                            </span>
                            <span className="text-sm">14 days ago</span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to quickly deploy a static website</a></h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                <span className="font-medium dark:text-white">
                                    Jese Leos
                                </span>
                            </div>
                            <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                
                            </a>
                        </div>
                    </article> 

                    <div className="w-3/4 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {publications.map(publication => (
                                <BlogCard key={"publicationtCard" + publication.id} publication={publication}/>
                            ))}
                        </div>
                    </div>              
                </div>  
            </div>

        </section>
    )
}

export default Blog