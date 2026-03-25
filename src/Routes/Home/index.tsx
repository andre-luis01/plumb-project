import "./home.css";

function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <p className="logo-text">Plumb | Quantium Solutions</p>
        </div>
      </header>

      <main className="main">
        <h2>Bem-vindo a Plumb!</h2>
        <p>
          Vamos ajudar a entender melhor como você está se sentindo no trabalho.
        </p>
        <button className="btn-primary">Iniciar Pesquisa</button>
      </main>
    </div>
  );
}
export default Home;
