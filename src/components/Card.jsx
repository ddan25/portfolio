// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#333',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    textAlign: 'center', // This will center the text horizontally
    display: 'flex',      // Enable flexbox
    justifyContent: 'center', // Center content horizontally with flexbox
    alignItems: 'center', // Center content vertically with flexbox
  },
  content: {
    padding: 20,
  },
  image: {
    display: 'flex',      // Enable flexbox
    justifyContent: 'center', // Center content horizontally with flexbox
    alignItems: 'center', // Center content vertically with flexbox
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <img
        src="https://via.placeholder.com/150" // URL of the image
        alt="Profile"
        style={styles.image} // Optional: use style to adjust the image
      />
      <div style={styles.content}>
        Hi, I'm Peter Ortiz
        I’m a passionate software developer with a focus on building seamless user experiences. I specialize in web development, with a strong interest in front-end technologies like React, JavaScript, and CSS. I love creating beautiful, functional websites that users enjoy interacting with.

        What Drives Me
        I’m motivated by solving problems and finding the best possible solutions to complex challenges. The tech world is constantly evolving, and I love keeping up with the latest trends and pushing myself to be better every day.

        Projects and Interests
        Outside of work, I’m passionate about contributing to open-source projects. You can find some of my work on GitHub. When I’m not coding, I’m either hiking in the mountains or reading the latest sci-fi novel.

        Let’s Connect
        Feel free to reach out if you’d like to collaborate, talk about tech, or just connect! You can find me on LinkedIn/Twitter or email me at Your Email.
      </div>
    </div>
  );
}

export default Card;
