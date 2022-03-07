function Header() {
  const text = "La maison jungle";
  return (
    <div>
      <h1>{text.toUpperCase()}</h1>
    </div>
  );
}

function Description() {
  return (
    <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
  );
}

function Banner() {
  return (
    <div>
      <Header />
      <Description />
    </div>
  );
}

export default Banner;
