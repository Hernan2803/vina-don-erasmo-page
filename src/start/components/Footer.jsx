import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {

    const { theme } = useContext(ThemeContext)

    return (
    <footer className={theme.footerBg}>
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="/">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-8 w-auto lg:block" src={theme.folder + "/logo.png"} alt="Logo"/>
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:gap-6">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contacto</h2>
                        <ul className="text-gray-500 font-medium">
                            <li>
                                <a href="" className="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">Viña Don Erasmo</a>{/* . All Rights Reserved. */}</span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                        <FacebookIcon/>
                    </a>
                    <a href="https://github.com/Hernan2803/vina-don-erasmo-page" className="text-gray-500 hover:text-gray-900 ms-5">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
