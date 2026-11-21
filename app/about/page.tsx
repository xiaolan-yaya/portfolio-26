const likes = [
  "cats 🐱", "drawing 🖍️", "chocolate 🍫", "pad kra pao 🇹🇭",
  "laufey 🎶", "matcha latte 🍃", "games 🎮", "home 🏠",
];

export default function About() {
  return (
    <article>
      <h1 className="about-hello">hello, i am <em>yaya</em></h1>
      <div className="about-body">
        <div>
          <p>
            I am a fourth-year student pursuing a Bachelor of Design degree at the University of
            Washington, concentrating in Interaction Design and minoring in Informatics.
          </p>
          <p>
            I am Chinese, grew up in Thailand, studied in Vancouver, British Columbia for 2 years,
            and now I am in Seattle, Washington!
          </p>
          <p>
            Outside of design, I enjoy doodling, taking film pictures with a point and shoot
            (still learning manual :0), and baking yummy stuff.
          </p>
          <p className="note">it’s nice meeting you!</p>
        </div>
        <div className="likes">
          <h2>yaaa that’s what i like:</h2>
          <ul>{likes.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
      </div>
    </article>
  );
}
