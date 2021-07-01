import React from "react";
import { ExternalLinkIcon, FolderAddIcon } from "@heroicons/react/outline";

const Pproject = ({ projectsp }) => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center md:container md:mx-20 mt-60"
    >
      <div className="md:conatiner md:mx-40 grid cols-1 md:grid-cols-3 gap-2 mb-10 ">
        {projectsp.map((x, i) => {
          return (
            <div key={i} className="flex flex-col bg-blue-shade p-5">
              <div className="flex justify-between">
                <FolderAddIcon className="h-8 w-8 text-gray-300 cursor-pointer" />
                <ExternalLinkIcon className="h-8 w-8 text-gray-300 cursor-pointer" />
              </div>
              <div className="text-gray-200 my-3">
                <h1 className="text-xl">{x.name}</h1>
                <p className=" text-gray-400 mt-2">{x.description}</p>
              </div>

              <div className="flex flex-row text-sm text-gray-300">
                {x.tech.map((tech, i) => {
                  return (
                    <p className="mr-3 text-green-400" key={i}>
                      {tech}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pproject;
