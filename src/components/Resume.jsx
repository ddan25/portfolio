import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiJquery, SiTypescript, SiBootstrap } from 'react-icons/si';


const styles = {
  image: {
    width: '100px',
    height: 'auto',
    borderRadius: '5px',
    marginRight: '15px',
  },
  resumeContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: '20px',
    borderBottom: '2px solid #bdc3c7',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  list: {
    paddingLeft: '20px',
  },
  jobContainer: {
    display: 'flex',
    marginBottom: '20px',
    borderBottom: '1px solid #dcdcdc',
    paddingBottom: '20px',
  },
  jobInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
    color: '#2c3e50',
  },
  jobLocation: {
    fontSize: '14px',
    color: '#2c3e50',
    marginTop: '5px',
  },
  jobDescription: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.5',
    marginTop: '10px',
  },
  jobImage: {
    marginRight: '15px',
    width: '80px',
    height: 'auto',
  },
  iconStyles: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
    fontSize: '18px',
  },
  techStyles: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #d1d9e6',
    borderRadius: '5px',
    padding: '5px 5px',
    marginTop: '5px',
    color: '#2c3e50',
    fontSize: '14px',
    fontStyle: 'italic',
    display: 'inline-block',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  techContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
};

function Resume() {
  return (
    <div>
      <Navbar />

      <div style={styles.resumeContainer}>
        <div style={styles.header}>
          <h1>Peter Daniel Ortiz</h1>
          <p>Email: peterortiz97@yahoo.com</p>
          <p>909-919-6313</p>
          <p>Portfolio: https://portfolio-gs2l.onrender.com</p>
        </div>

        <h2 style={styles.sectionTitle}>Summary</h2>
        <p style={styles.paragraph}>Highly motivated and results-driven software developer with nearly a year of experience in building dynamic and responsive web applications. Passionate about coding, continuous learning, and leveraging modern technologies to create innovative solutions. Experienced in collaborating with cross-functional teams to deliver high-quality, scalable products.</p>

        <h2 style={styles.sectionTitle}>Certifications</h2>
        <ul style={styles.list}>
          <li>
            <strong>Software Development Boot Camp, University of California, Irvine </strong> (August 2024 - November 2024)
            <ul style={styles.list}>
              <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB, enhancing user experience and performance.</li>
              <li>Collaborated with a cross-functional team of developers to deliver high-quality products on schedule.</li>
              <li>Designed and implemented responsive user interfaces with HTML, CSS, and JavaScript, ensuring compatibility across multiple browsers and devices.</li>
            </ul>
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li style={styles.iconStyles}><FaReact color="#61DBFB" /> React</li>
          <li style={styles.iconStyles}><FaNodeJs color="#3C873A" /> Node.js</li>
          <li style={styles.iconStyles}><FaJsSquare color="#F0DB4F" /> JavaScript</li>
          <li style={styles.iconStyles}><SiJquery color="#0769AD" /> jQuery</li>
          <li style={styles.iconStyles}><FaHtml5 color="#E44D26" /> HTML</li>
          <li style={styles.iconStyles}><FaCss3Alt color="#264de4" /> CSS</li>
          <li style={styles.iconStyles}><SiMongodb color="#4DB33D" /> MongoDB</li>
          <li style={styles.iconStyles}><FaDatabase color="#00758F" /> SQL</li>
          <li style={styles.iconStyles}><SiTypescript color="#007acc" /> TypeScript</li>
        </ul>



        <h2 style={styles.sectionTitle}>Education</h2>
        <p style={styles.paragraph}>Software Development Boot Camp, University of California, Irvine (2024)</p>
        <p style={styles.paragraph}>Bachelors of Arts in Progress, California State University of Los Angeles (2023 - Present)</p>
        <p style={styles.paragraph}>Associates of Arts, Chaffey College (2023)</p>

        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <div>
              <h3 style={styles.jobTitle}>Weather Dashboard (Back-End)</h3>
              <ul style={styles.list}>
                <li>Built a program that can show you a city's weather forecast.</li>
                <li>Used openweathermap.org <strong>API key</strong> to access weather forecast information.</li>
                <li>Used <strong>GitHub</strong> repository to progress throughout the project.</li>
                <li><strong>https://github.com/ddan25/Weather-Dashboard</strong></li>
              </ul>
              <ul style={styles.techContainer}>
                <li style={styles.techStyles}><SiTypescript size={18} color="#007acc" /></li>
                <li style={styles.techStyles}>REST API</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <div>
              <h3 style={styles.jobTitle}>Kanban (Back-End) </h3>
              <ul style={styles.list}>
                <li>Built a program that can assign task to team members in Todo, In Progress, and Done categories.</li>
                <li>Implemented the entire login system to allow <strong>CRUD</strong> operations on the user list and user validation.</li>
                <li>Used <strong>GitHub</strong> repository to progress throughout the project.</li>
                <li><strong>https://github.com/ddan25/kanban</strong></li>
              </ul>
              <ul style={styles.techContainer}>
                <li style={styles.techStyles}><SiTypescript size={18} color="#007acc" /></li>
                <li style={styles.techStyles}>REST API</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <div>
              <h3 style={styles.jobTitle}>Vinyl Vault (Full-Stack)</h3>
              <ul style={styles.list}>
                <li>Built a program that can search through the seeded data to find music and comment on songs.</li>
                <li>Led a team of 4: organized meetings, delegated tasks, helped teammates debug, etc.</li>
                <li>Implemented the entire login system to allow <strong>CRUD</strong> operations on the user list and user validation.</li>
                <li>Created fully responsive home page with search bar and profile page that displays user comments.</li>
                <li>Designed the overall website concept, layout & deployed on <strong>Render</strong>.</li>
                <li>Used <strong>GitHub</strong> repository to progress throughout the project.</li>
                <li><strong>https://github.com/larimae/vinyl-vault</strong></li>
              </ul>
              <ul style={styles.techContainer}>
                <li style={styles.techStyles}><FaJsSquare size={18} color="#F0DB4F" /></li>
                <li style={styles.techStyles}><SiBootstrap size={18} color="#7952B3" /></li>
                <li style={styles.techStyles}>GraphQL API</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <div>
              <h3 style={styles.jobTitle}>RestStar (Full-Stack)</h3>
              <ul style={styles.list}>
                <li>Built a Restaurant Point of Sales system to create orders, assign them to customers, and create invoices.</li>
                <li>Implemented the entire login system to allow <strong>CRUD</strong> operations on the user list and user validation.</li>
                <li>Led a team of 4: organized meetings, delegated tasks, helped teammates debug, etc.</li>
                <li>Designed the overall website concept, layout & deployed on <strong>Render</strong>.</li>
                <li>Used <strong>GitHub</strong> repository to progress throughout the project.</li>
                <li><strong>https://github.com/khorimoore/RestStar</strong></li>
              </ul>
              <ul style={styles.techContainer}>
                <li style={styles.techStyles}><FaJsSquare size={18} color="#F0DB4F" /></li>
                <li style={styles.techStyles}><FaHtml5 size={18} color="#E44D26" /></li>
                <li style={styles.techStyles}><SiBootstrap size={18} color="#7952B3" /></li>
                <li style={styles.techStyles}>REST API</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Management Work History</h2>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/MOD_Pizza_logo.svg/1200px-MOD_Pizza_logo.svg.png"
              alt="MOD Pizza"
              style={styles.jobImage}
            />
            <div>
              <h3 style={styles.jobTitle}>Shift Leader/Manager - MOD Pizza</h3>
              <p style={styles.jobLocation}><strong>Location:</strong> Upland, CA | <strong>Duration:</strong> August 2022 to May 2024</p>
              <ul style={styles.list}>
                <li>Ensured adherence to food safety standards, maintaining a safe and hygienic environment for both customers and employees.</li>
                <li>Oversaw food preparation processes, ensuring high-quality standards for all menu items and timely delivery.</li>
                <li>Managed employee breaks and shift rotations, optimizing team efficiency and maintaining high service standards during peak hours.</li>
                <li>Operated ovens to cook food to specification, maintaining consistency and quality.</li>
                <li>Delivered exceptional customer service, handling customer inquiries, complaints, and feedback in a professional manner.</li>
                <li>Performed end-of-day cash drops and organized funds for secure bank deposits, ensuring accuracy and accountability.</li>
                <li>Conducted thorough inventory audits to ensure stock accuracy and support efficient inventory management processes.</li>
              </ul>
            </div>
          </div>
        </div>


        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <img
              src="https://1000logos.net/wp-content/uploads/2022/03/Staples-Logo.png"
              alt="Staples"
              style={styles.jobImage}
            />
            <div>
              <h3 style={styles.jobTitle}>Shift Leader/Manager - Staples</h3>
              <p style={styles.jobLocation}><strong>Location:</strong> Goleta, CA | <strong>Duration:</strong> October 2017 to January 2019</p>
              <ul style={styles.list}>
                <li>Assisted customers in establishing personal and business lines of credit tailored to their financial needs.</li>
                <li>Delivered personalized support to personal and business credit partners, enhancing customer satisfaction and strengthening long-term relationships.</li>
                <li>Ensured accurate online order placement and fast, reliable service for all customers..</li>
                <li>Managed inventory organization, ensuring items were easy to locate and accessible for both customers and staff.</li>
                <li>Performed detailed inventory audits and successfully located and reconciled lost inventory to support accurate stock management.</li>
                <li>Operated equipment safely and trained team members on proper usage and safety protocols.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Resume;
