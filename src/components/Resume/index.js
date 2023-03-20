import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://docs.google.com/document/d/1zTbcfJn25Nduy70J9shicxz3l5dDaf5M6_dlP18Mrd4/edit?usp=sharing">resumé</a>
        </p>
        <h3>Front-end Experience</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>MERN Stack</li>
          <li>State Manipulation</li>
          <li>Model-View-Controller Pattern</li>
        </ul>
        <h3>Back-end Experiece</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Object-Oriented Programming</li>
          <li>Bcrypt</li>
          <li>User Authentication</li>
        </ul>
        <p>Contact me: andersongraymourot@gmail.com</p>
      </div>
    </section>
  );
}

export default Resume;
