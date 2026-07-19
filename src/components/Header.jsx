function Header({ name, themeColor }) {
  return (
    <header
      style={{
        backgroundColor: themeColor,
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>{name}'s Portfolio</h1>
      <p>Welcome to my Student Portfolio</p>
    </header>
  );
}

export default Header;