import { ThemeContext } from '../../context/ThemeContext'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useContext, useState } from 'react'
import data from './../context/CarrouselContext.json';

function Slide({next, prev, id}) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="h-screen flex flex-col space-y-4 items-center justify-center p-4">
            <h1 className={"text-4xl" + theme.mainText}>
                {data[id].title}
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 m-auto ">
                    <h3 className={"text-lg" + theme.lightText}>{data[id].body}</h3>
                </div>
                <div className="md:w-1/2 flex items-center">
                    <img src={data[id].multimedia} className="w-full"/>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={prev} className={"pl-3 pr-1 rounded-full" + theme.hoverNavbar}>
                    <ArrowBackIosIcon className={theme.lightText}/>
                </button> 
                <button onClick={next} className={"p-2 rounded-full" + theme.hoverNavbar}>
                    <ArrowForwardIosIcon className={theme.lightText}/>
                </button>
            </div>
        </div>
    )
}

export default Slide