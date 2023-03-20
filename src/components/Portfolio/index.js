import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'virtual-event-pro',
      description: 'Event planning app',
      link: "https://virtual-event-pro.herokuapp.com/",
      repo: "https://github.com/andersonmourot/virtual-event-pro"
    },
    {
      name: 'work-day-scheduler',
      description: 'Daily planner',
      link: "https://andersonmourot.github.io/planner-project/",
      repo: "https://github.com/andersonmourot/planner-project"
    },
    {
      name: 'weather-dashboard',
      description: 'Weather searching engine',
      link: "https://andersonmourot.github.io/Weather-Dashboard/",
      repo: "https://github.com/andersonmourot/Weather-Dashboard"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
