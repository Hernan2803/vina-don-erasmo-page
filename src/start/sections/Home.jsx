import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Carousel from '../components/Carousel'

function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={"pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] + theme.mainBg" + theme.mainBg} id="home">
            <div className="container mx-auto">
                <Carousel/>
            </div>
        </section>
    )
}

export default Home