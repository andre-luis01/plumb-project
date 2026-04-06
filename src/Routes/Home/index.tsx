import { useNavigate } from "react-router-dom";
import "./home.css";
import Container from "../../components/container";

function Home() {
  const navigate = useNavigate()
  return (
    <Container>
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
        <button className="btn-primary" onClick={() => navigate("/form")}>Iniciar Pesquisa</button>
      </main>
    </Container>
  );
}
export default Home;
