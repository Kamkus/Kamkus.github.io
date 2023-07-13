import React from "react";

interface Props{
    name: string,
    video: JSX.Element,
    usedTechnology: string[],
    text: string,
    date: string,
}

const ExperienceItem: React.FC<Props> = ( {name,video,usedTechnology, text, date} )  =>{
    return (
        <div className="w-full h-max flex border-b-2 border-dashed">
          <div className="hidden sm:w-[150px] w-[50px] relative min-h-full sm:flex justify-center">
            <div className="h-full w-[2px] bg-green-700"></div>
            <div className="h-[50px] w-[80px] absolute text-sm flex items-center justify-center hover:bg-green-900 top-4 rounded-lg text-white text-center bg-green-700 transition-colors duration-500">
              <span className="font-semibold">{date}</span>
            </div>
          </div>
          <div className="w-full h-full pb-4 pt-4 sm:pr-14 sm:ml-5">
            <div className="w-full h-full shadow-md rounded-md border-2 p-3 border-green-700">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-white font-semibold text-3xl">
                  {name}
                </span>
                <div className="flex flex-wrap gap-3 max-w-full">
                {usedTechnology.map((item,index)=>
                <div key={index} className="bg-green-600 p-1 rounded-lg font-semibold text-white text-xs">
                  {item}
                </div>)}
                </div>
              </div>
              <div className="flex w-full flex-col lg:flex-row gap-4">
                <div className="sm:w-max flex justify-center items-center w-full h-max">
                  {video}
                </div>
                <div className="w-full h-[300px] text-center lg:text-left">
                    <span className="text-white text-xs sm:text-sm lg:text-md font-semibold w-fit">{text}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default ExperienceItem