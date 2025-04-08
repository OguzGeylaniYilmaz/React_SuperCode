import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const { styles, toggleTheme, theme } = useTheme();

  return (
    <div
      className="home"
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: styles.background,
        color: styles.color,
        transition: "all 0.3s ease",
      }}
    >
      <button className="switch-button" onClick={toggleTheme}>
        Switch Theme (current:{theme})
      </button>
      <h1 className="title">Eine gute Überschrift</h1>
      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque cum,
        facilis praesentium perferendis eos magnam fugit ullam rem sunt! At,
        minima. Obcaecati sed eos consequatur consequuntur in eius, eveniet
        corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Velit, quidem, nostrum porro aut ipsam dolorum maxime officiis delectus
        dolor odio distinctio consequatur reiciendis rerum saepe qui possimus,
        nihil itaque sint. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quisquam obcaecati nobis odit, nemo quod eius incidunt earum!
        Blanditiis deserunt omnis molestias aut quis sint totam, quasi obcaecati
        veniam quo. Praesentium?
      </p>
    </div>
  );
};

export default HomePage;
