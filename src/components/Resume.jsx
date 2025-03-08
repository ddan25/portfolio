
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

function Resume() {
  return (
    <div>
      <Navbar />

      <div className="resume">
        <p>Email: peterortiz97@yahoo.com</p>

        <h2>Summary</h2>
        <p>Highly motivated software developer with about a year of experience in building web applications. Passionate about coding and learning new technologies.</p>

        <h2>Experience</h2>
        <ul>
          <li>
            <strong>University of California, Irvine </strong> (August 2024 - November 2024)
            <ul>
              <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
              <li>Collaborated with a cross-functional team to deliver high-quality products on time.</li>
              <li>Designed and implemented user interfaces using HTML, CSS, and JavaScript.</li>
              <li>Optimized web applications for maximum speed and scalability.</li>
            </ul>
          </li>
        </ul>

        <h2>Education</h2>
        <p>Associates of Arts, Chaffey College (2023)</p>
        <p>Software Development Boot Camp, University of California, Irvine (2024)</p>
        <p>Bachelors of Arts in Progress, California State University of Los Angeles (2023 - Present)</p>

        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>HTML/CSS</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;
