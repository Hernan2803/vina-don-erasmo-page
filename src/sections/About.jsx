import { ThemeContext } from './../context/ThemeContext'
import { useContext } from 'react'
import MarkdownRenderer from './../utils/MarkdownRenderer';
import data from "./../context/AboutContext.json"

function About() {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={"pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" + theme.mainBg} id="about">
            <h2 className={theme.sectionText}>Nosotros</h2>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="flex items-center -mx-3 sm:-mx-4">
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <div className="py-3 sm:py-4">
                                    <img src="https://i.ibb.co/gFb3ns6/image-1.jpg" alt="" className="w-full rounded-2xl"/>
                                </div>
                                <div className="py-3 sm:py-4">
                                    <img src="https://i.ibb.co/rfHFq15/image-2.jpg" alt="" className="w-full rounded-2xl"/>
                                </div>
                            </div>
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <div className="relative z-10 my-4">
                                    <img
                                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                {data.name}
                            </h2>
                            <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                <MarkdownRenderer markdown={data.slogan}/>
                            </p>
                            <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                <MarkdownRenderer markdown={data.description}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About