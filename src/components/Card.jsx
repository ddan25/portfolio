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
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </div>
    </div>
  );
}

export default Card;
