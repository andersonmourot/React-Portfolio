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
      link: "https://andersonmourot.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/andersonmourot/Work-Day-Scheduler"
    },
    {
      name: 'expense-tracker',
      description: 'Expense tracking app',
      link: "https://cryptic-hollows-38655.herokuapp.com/login",
      repo: "https://github.com/andersonmourot/Expense-Tracker-Project"
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
