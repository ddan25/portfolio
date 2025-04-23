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
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      {/* <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        style={styles.image}
      /> */}
      <div style={styles.content}>
        Hi, I'm Peter Daniel Ortiz
        <br />
        <br />
        I’m a passionate software developer with a strong interest in building seamless, responsive web applications. I specialize in front-end technologies like React, JavaScript, and CSS, but I also love diving into back-end development using Node.js and MongoDB. My goal is to create beautiful, intuitive websites and applications that users truly enjoy interacting with.
        <br />
        <br />
        <strong>What Drives Me</strong>
        <br />
        I’m deeply motivated by solving real-world problems through coding and continuous learning. The world of tech is ever-evolving, and I find excitement in keeping up with new trends and best practices, while pushing myself to grow as a developer.
        <br />
        <br />
        <strong>Hobbies and Interests</strong>
        <br />
        Outside of coding, I'm an avid Los Angeles Lakers fan and a basketball enthusiast. Watching games and analyzing plays inspires me and reminds me of the importance of teamwork, strategy, and dedication—values that are just as important in programming as they are on the basketball court.
        <br />
        <br />
        Another one of my passions is hiking. Whether it's a challenging mountain trail or a serene walk through the woods, I enjoy connecting with nature and getting a break from screens. Hiking helps me recharge and think creatively about my projects.
        <br />
        <br />
        I also have a creative side. Drawing allows me to express my thoughts visually, and I enjoy sketching in my free time. It’s a great way to relax and experiment with new ideas.
        <br />
        <br />
        Lastly, music is a big part of my life. I find that music fuels my creativity and helps me stay energized, focused and inspired throughout the day.
        <br />
        <br />
        <strong>Let’s Connect</strong>
        <br />
        Feel free to reach out if you'd like to collaborate, chat about tech, or share ideas! You can find me on <a href="https://www.linkedin.com/in/peter-ortiz-8ab740339/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or you can email me at peterortiz97@yahoo.com.
      </div>
    </div>
  );
}

export default Card;
