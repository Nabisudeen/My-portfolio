// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">project</span>
            <span className="text-pink-500">=</span>
            <span className="text-gray-400">{" {"}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">&quot;name&quot;</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-300">&quot;{project.name}&quot;</span>
            <span className="text-gray-400">,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">&quot;tools&quot;</span>
            <span className="text-gray-400">: [</span>
            {
              project.tools.map((tool, i) => (
                <React.Fragment key={i}>
                  <span className="text-green-300">&quot;{tool}&quot;</span>
                  {
                    i < project.tools.length - 1 && <span className="text-gray-400">, </span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">],</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">&quot;My_role&quot;</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-300">&quot;{project.role}&quot;</span>
            <span className="text-gray-400">,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">&quot;description&quot;</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-300">&quot;{project.description}&quot;</span>
          </div>

          <div>
            <span className="text-gray-400">{"}"}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
