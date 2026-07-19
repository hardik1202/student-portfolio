function Projects() {
  const projects = [
    { id: 1, title: "Student Portfolio", desc: "A React + Vite portfolio site." },
    { id: 2, title: "To-Do App", desc: "A simple task manager built in React." },
    { id: 3, title: "Weather App", desc: "Fetches live weather data from an API." },
  ];

  return (
    <section className="section-card">
      <h2>My Projects</h2>
      <ul className="projects-list">
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>: {p.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;