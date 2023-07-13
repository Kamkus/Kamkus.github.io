import React from "react";
import TechnologyItem from "./components/technologyItem";
import ExperienceItem from "./components/experienceItem";
import ItemList from "./data/ItemList";
import ExperienceList from "./data/ExperienceList";
import "./App.css";

interface technologyItem {
  name: string;
  logo: string;
}

const App: React.FC = () => {
  const technologyItems: technologyItem[] = ItemList;
  const experienceItems = ExperienceList
  return (
    <div className="App">
      <div className="text-white flex flex-col mt-16 w-max">
        <span className="sm:text-6xl text-3xl relative name">
          Kamil Markowski
        </span>
        <span className="self-end mt-[-12px] text-green-700 text relative font-bold">
          FRONTEND DEV
        </span>
      </div>
      <div className="mt-12">
        <span className="text-white sm:text-3xl font-semibold">
          Używane technologie:{" "}
        </span>
        <div className="grid w-screen sm:w-max p-1 gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-4">
          {technologyItems.map((item, idx) => (
            <TechnologyItem key={idx} name={item.name} logo={item.logo} />
          ))}
        </div>
      </div>
      <div className="mt-24 w-screen sm:w-[630px] md:w-[750px] lg:w-[1000px] xl:w-[1150px] flex flex-col">
        <span className="text-white font-semibold text-md sm:text-3xl">
          Doświadczenie:{" "}
        </span>
        {experienceItems.map((item,idx) =><ExperienceItem key={idx} name={item.name} video={item.video} usedTechnology={item.usedTechnology} text={item.text} date={item.date} />)}
      </div>
    </div>
  );
};

export default App;
