import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

const styles = {
  image: {
    width: '100px', // Adjust size for cleaner look
    height: 'auto',
    borderRadius: '5px', // Rounded corners for images
    marginRight: '15px',
  },
  resumeContainer: {
    maxWidth: '800px',
    margin: '0 auto', // Center the content
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
    color: '#555',
    marginBottom: '15px',
  },
  list: {
    paddingLeft: '20px',
  },
  jobContainer: {
    display: 'flex',
    marginBottom: '20px',
    borderBottom: '1px solid #dcdcdc', // Divider between job entries
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
    color: '#7f8c8d',
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
    width: '80px', // Adjust size to make it visually balanced
    height: 'auto',
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
              <li>Optimized web applications for maximum speed and scalability.</li>
            </ul>
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.list}>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>

        <h2 style={styles.sectionTitle}>Education</h2>
        <p style={styles.paragraph}>Software Development Boot Camp, University of California, Irvine (2024)</p>
        <p style={styles.paragraph}>Bachelors of Arts in Progress, California State University of Los Angeles (2023 - Present)</p>
        <p style={styles.paragraph}>Associates of Arts, Chaffey College (2023)</p>

        <h2 style={styles.sectionTitle}>Projects</h2>
        <p style={styles.paragraph}></p>

        <h2 style={styles.sectionTitle}>Work History</h2>

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
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <img
              src="https://media.giphy.com/avatars/YaamavaSocial/rKBjwA3oXOvz.jpg"
              alt="Yaamava Resort & Casino"
              style={styles.jobImage}
            />
            <div>
              <h3 style={styles.jobTitle}>Barista/Cook - Yaamava Resort & Casino</h3>
              <p style={styles.jobLocation}><strong>Location:</strong> Highland, CA | <strong>Duration:</strong> July 2021 to March 2022</p>
              <ul style={styles.list}>
                <li>Provided exceptional customer service as a cashier, efficiently processing transactions and managing customer orders.</li>
                <li>Specialized in crafting high-quality coffee beverages, including Starbucks-style drinks, adhering to company standards for taste and presentation.</li>
                <li>Prepared and baked a variety of pastries, ensuring freshness and quality while meeting customer demand.</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqLQe-R1uiUevhjkir4wxkTUywQs4_shsfg&s"
              alt="Monaco’s Pizza"
              style={styles.jobImage}
            />
            <div>
              <h3 style={styles.jobTitle}>Cook - Monaco’s Pizza</h3>
              <p style={styles.jobLocation}><strong>Location:</strong> Rancho Cucamonga, CA | <strong>Duration:</strong> November 2020 to March 2021</p>
              <ul style={styles.list}>
                <li>Prepared fresh sauces and pasta dishes from scratch, ensuring consistent quality and flavor.</li>
                <li>Operated stove, fryer, and pizza oven, efficiently cooking and assembling dishes in a fast-paced environment.</li>
                <li>Handcrafted pizzas from scratch, including dough preparation, toppings, and baking, ensuring a high-quality product.</li>
                <li>Managed inventory, ordered supplies, and prepped ingredients to maintain smooth kitchen operations.</li>
                <li>Maintained strict adherence to health and sanitation standards, ensuring a clean and safe kitchen environment.</li>
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
              <h3 style={styles.jobTitle}>Sales Associate - Staples</h3>
              <p style={styles.jobLocation}><strong>Location:</strong> Goleta, CA | <strong>Duration:</strong> October 2017 to January 2019</p>
              <ul style={styles.list}>
                <li>Greeted customers upon arrival, provided personalized assistance, and guided them to desired products, enhancing overall customer satisfaction.</li>
                <li>Restocked shelves and organized inventory to ensure product availability and a well-maintained store environment.</li>
                <li>Assisted customers with online orders, ensuring accurate order placement and efficient service.</li>
                <li>Managed inventory organization, ensuring items were easy to locate and accessible for both customers and staff.</li>
                <li>Operated equipment such as a cardboard baler and pallet jack to manage inventory and store organization.</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.jobContainer}>
          <div style={styles.jobInfo}>
            <img
              src="https://logos-world.net/wp-content/uploads/2023/01/Subway-Logo.jpg"
              alt="Subway"
              style={styles.jobImage}
            />
            <div>
              <h3 style={styles.jobTitle}>Subway Sandwich Artist - Subway</h3>
              <p style={styles.jobLocation}><strong>Location:</strong> Rancho Cucamonga, CA | <strong>Duration:</strong> November 2015 to October 2016</p>
              <ul style={styles.list}>
                <li>Greeted and assisted customers with their orders, providing excellent customer service in a fast-paced environment.</li>
                <li>Accurately noted customer orders and prepared sandwiches, beverages, and sides in a timely and efficient manner.</li>
                <li>Prepared and restocked fresh vegetables, meats, and bread daily, ensuring high-quality ingredients for customer orders.</li>
                <li>Performed cashiering duties, processing transactions and handling cash while maintaining accuracy.</li>
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
