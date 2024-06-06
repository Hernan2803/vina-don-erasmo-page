import { ThemeContext } from '../context/ThemeContext'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useContext, useState } from 'react'
import data from './../context/CarrouselContext.json'

function Slide({next, prev, id}) {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <div>
                <div className="h-screen flex items-center justify-center p-5">
                    <div className="justify-items-center h-full w-full bg-gray-100">

                        <div className="w-5/6 h-5/6 shadow-md rounded-lg overflow-hidden flex">
                                
                                <div className="w-2/3 p-4">
                                    <h2 className={"text-4xl" + theme.mainText}>{data[id].title}</h2>
                                    <h3 className={"text-lg" + theme.lightText}>{data[id].body}</h3>
                                    <p className="text-gray-700">Este es un ejemplo de tarjeta con separación diagonal usando Tailwind CSS.</p>
                                </div>
                                <div className="w-1/3">
                                    <img src="https://via.placeholder.com/150" alt="Imagen" className="object-cover h-full w-full"/>
                                </div>
                            
                        </div>
                    </div>



                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5">
                        <button onClick={prev} className={"pl-3 pr-1 rounded-full" + theme.hoverNavbar}>
                            <ArrowBackIosIcon className={theme.lightText}/>
                        </button> 
                        <button onClick={next} className={"p-2 rounded-full" + theme.hoverNavbar}>
                            <ArrowForwardIosIcon className={theme.lightText}/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slide