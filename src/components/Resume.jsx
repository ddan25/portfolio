
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

const styles = {
  image: {
    width: '150px',
    height: 'auto',
  },
};

function Resume() {
  return (
    <div>
      <Navbar />

      <div className="resume">
        <p>Email: peterortiz97@yahoo.com</p>

        <h2>Summary</h2>
        <p>Highly motivated and results-driven software developer with nearly a year of experience in building dynamic and responsive web applications. Passionate about coding, continuous learning, and leveraging modern technologies to create innovative solutions. Experienced in collaborating with cross-functional teams to deliver high-quality, scalable products.</p>

        <h2>Certifications</h2>
        <ul>
          <li>
            <strong>Software Development Boot Camp, University of California, Irvine </strong> (August 2024 - November 2024)
            <ul>
              <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB, enhancing user experience and performance.</li>
              <li>Collaborated with a cross-functional team of designers, developers, and stakeholders to deliver high-quality products on schedule.</li>
              <li>Designed and implemented responsive user interfaces with HTML, CSS, and JavaScript, ensuring compatibility across multiple browsers and devices.</li>
              <li>Optimized web applications for maximum speed and scalability.</li>
            </ul>
          </li>
        </ul>
        <ul>
        <li>
        <strong>Coding Languags</strong>
        <ul>
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
        </li>
        </ul>

        <h2>Education</h2>
        <p>Software Development Boot Camp, University of California, Irvine (2024)</p>
        <p>Associates of Arts, Chaffey College (2023)</p>
        <p>Bachelors of Arts in Progress, California State University of Los Angeles (2023 - Present)</p>


        <h2>Work History</h2>
      </div>
      <div class="job">
      <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/MOD_Pizza_logo.svg/1200px-MOD_Pizza_logo.svg.png" // URL of the image
          alt="MOD Pizza"
          style={styles.image} // Optional: use style to adjust the image
        />
        <h3>Shift Leader/Manager - MOD Pizza</h3>
        <p><strong>Location:</strong> Upland, CA | <strong>Duration:</strong> August 2022 to May 2024</p>
        <ul>
          <li>Ensured adherence to food safety standards, maintaining a safe and hygienic environment for both customers and employees.</li>
          <li>Oversaw food preparation processes, ensuring high-quality standards for all menu items and timely delivery.</li>
          <li>Managed employee breaks and shift rotations, optimizing team efficiency and maintaining high service standards during peak hours.</li>
          <li>Operated ovens to cook food to specification, maintaining consistency and quality.</li>
          <li>Delivered exceptional customer service, handling customer inquiries, complaints, and feedback in a professional manner.</li>
          <li>Managed online orders, ensuring accuracy, timely preparation, and delivery to customers.</li>
          <li>Proficiently operated POS system, processing orders, payments, and refunds while maintaining accurate financial records.</li>
          <li>Responsible for cash handling and inventory management, including cash drops, reconciliation, and restocking supplies.</li>
          <li>Led shifts as acting manager, supervising staff, delegating tasks, and ensuring smooth operations.</li>
          <li>Managed opening and closing procedures, including securing the store, counting cash, and setting up or shutting down equipment.</li>
          <li>Maintained store cleanliness and organization, meeting or exceeding inspection standards for health and safety.</li>
        </ul>

      </div>

      <div class="job">
      <img
          src="https://media.giphy.com/avatars/YaamavaSocial/rKBjwA3oXOvz.jpg" // URL of the image
          alt="Yaamava Resort & Casino"
          style={styles.image} // Optional: use style to adjust the image
        />
        <h3>Barista/Cook - Yaamava Resort & Casino</h3>
        <p><strong>Location:</strong> Highland, CA | <strong>Duration:</strong> July 2021 to March 2022</p>
        <ul>
          <li>Provided exceptional customer service as a cashier, efficiently processing transactions and managing customer orders.</li>
          <li>Specialized in crafting high-quality coffee beverages, including Starbucks-style drinks, adhering to company standards for taste and presentation.</li>
          <li>Prepared and baked a variety of pastries, ensuring freshness and quality while meeting customer demand.</li>
          <li>Maintained a clean and organized workspace, ensuring all baking and coffee equipment was in proper working condition.</li>
          <li>Packaged baked goods and beverages for takeout orders, ensuring proper presentation and accuracy of customer requests.</li>
          <li>Managed order completion in a fast-paced environment, ensuring timely and accurate preparation while maintaining high service standards.</li>
          <li>Assisted in inventory management and restocking supplies to ensure seamless operations during shifts.</li>
        </ul>
      </div>

      <div class="job">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqLQe-R1uiUevhjkir4wxkTUywQs4_shsfg&s" // URL of the image
          alt="Monaco’s Pizza"
          style={styles.image} // Optional: use style to adjust the image
        />
        <h3>Cook - Monaco’s Pizza</h3>
        <p><strong>Location:</strong> Rancho Cucamonga, CA | <strong>Duration:</strong> November 2020 to March 2021</p>
        <ul>
          <li>Prepared fresh sauces and pasta dishes from scratch, ensuring consistent quality and flavor.</li>
          <li>Operated stove, fryer, and pizza oven, efficiently cooking and assembling dishes in a fast-paced environment.</li>
          <li>Handcrafted pizzas from scratch, including dough preparation, toppings, and baking, ensuring a high-quality product.</li>
          <li>Managed inventory, ordered supplies, and prepped ingredients to maintain smooth kitchen operations.</li>
          <li>Maintained strict adherence to health and sanitation standards, ensuring a clean and safe kitchen environment.</li>
          <li>Trained and mentored new employees, helping them integrate quickly and effectively into kitchen operations.</li>
          <li>Assisted in front-of-house tasks, including busting tables and ensuring a clean dining area for customers.</li>
        </ul>
      </div>

      <div class="job">
      <img
          src="https://1000logos.net/wp-content/uploads/2022/03/Staples-Logo.png" // URL of the image
          alt="Staples"
          style={styles.image} // Optional: use style to adjust the image
        />
        <h3>Sales Associate - Staples</h3>
        <p><strong>Location:</strong> Goleta, CA | <strong>Duration:</strong> October 2017 to January 2019</p>
        <ul>
          <li>Greeted customers upon arrival, provided personalized assistance, and guided them to desired products, enhancing overall customer satisfaction.</li>
          <li>Restocked shelves and organized inventory to ensure product availability and a well-maintained store environment.</li>
          <li>Assisted customers with online orders, ensuring accurate order placement and efficient service.</li>
          <li>Managed inventory organization, ensuring items were easy to locate and accessible for both customers and staff.</li>
          <li>Operated equipment such as a cardboard baler and pallet jack to manage inventory and store organization.</li>
          <li>Implemented changes to product displays to highlight new deals and seasonal products, driving sales and customer interest.</li>
          <li>Sold protection plans to customers, promoting additional value and ensuring customer confidence in their purchases.</li>
          <li>Promoted Staples credit card sign-ups for personal use and businesses, contributing to the store's sales goals.</li>
          <li>Assembled office furniture, ensuring quick and accurate assembly to meet customer needs.</li>
          <li>Safely lifted and moved items weighing up to 50 pounds to ensure efficient stocking and customer assistance.</li>
          <li>Unloaded supply trucks, unboxed, and organized new inventory to maintain stock levels and store readiness.</li>
          <li>Utilized printing equipment and provided printing solutions to customers, enhancing their shopping experience.</li>
          <li>Conducted inventory counting for restock orders, ensuring accurate stock levels and minimizing product shortages.</li>
        </ul>
      </div>

      <div class="job">
      <img
          src="https://logos-world.net/wp-content/uploads/2023/01/Subway-Logo.jpg" // URL of the image
          alt="Subway"
          style={styles.image} // Optional: use style to adjust the image
        />
        <h3>Subway Sandwich Artist - Subway</h3>
        <p><strong>Location:</strong> Rancho Cucamonga, CA | <strong>Duration:</strong> November 2015 to October 2016</p>
        <ul>
          <li>Greeted and assisted customers with their orders, providing excellent customer service in a fast-paced environment.</li>
          <li>Accurately noted customer orders and prepared sandwiches, beverages, and sides in a timely and efficient manner.</li>
          <li>Prepared and restocked fresh vegetables, meats, and bread daily, ensuring high-quality ingredients for customer orders.</li>
          <li>Performed cashiering duties, processing transactions and handling cash while maintaining accuracy.</li>
          <li>Managed inventory tasks, including stock rotation and ordering supplies, to ensure continuous operation and availability of products.</li>
          <li>Worked independently during opening and closing shifts, ensuring proper setup and secure store closure.</li>
          <li>Regulated food temperatures according to inspection standards to ensure safety and quality.</li>
          <li>Managed large catering orders, ensuring all items were prepared and delivered according to customer specifications.</li>
          <li>Trained and mentored new employees, helping them quickly adapt to store procedures and customer service expectations.</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;
