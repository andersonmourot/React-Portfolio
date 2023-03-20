import React from "react";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
          My name is Anderson Mourot and I am from Little Rock, Arkansas. I recently completed the SMU Fullstack Coding Bootcamp to learn the
          front-end and back-end skills needed to find a job I am passionate
          about. Using HTML, CSS, and JavaScript to build websites are some of my favorite skills I have acquired. 
          I have become very familiar with React and my ability to create dynamic applications that a user can easily navigate is something I value highly. 
          Designing applications with user authentication and security is something I have worked with in many projects through my course work and a skill I am confident in.
          In my free time I enjoy going to concerts, basketball with friends, and skiing. I also
          enjoy traveling around the world and seeing new cities and cultures. In my portfolio you can view
          examples of the apps I have created, as well as contact me for
          more information. Thank you for visiting!
        </p>
        <p>Contact me: andersongraymourot@gmail.com</p>
      </div>
    </section>
  );
}

export default About;
