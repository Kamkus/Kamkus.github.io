import React from "react";

interface Props{
     name: string,
     logo: string,
}

const TechnologyItem: React.FC<Props> = ( {name, logo} )  =>{
    return (
    <>
    <div className='group sm:w-[170px] w-full h-[100px] sm:h-[170px] border-2 flex flex-col border-gray-700 ease-in-out shadow-md rounded-md'>
        <img className="sm:w-[100px] group-hover:scale-110 ease-in-out duration-500 transition-all w-[55px] h-[55px] mt-4 self-center sm:h-[100px]" src={`./svgs/${logo}.svg`}  />
        <span className="text-white sm:text-2xl text-sm font-semibold self-center sm:mt-4">{name}</span>
    </div>
    </>
    )
}


export default TechnologyItem