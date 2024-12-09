import Icon from "./components/Icons";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="image">
          <img src="/images/logo.png" alt="Exemplo" width={500} height={300} />
        </div>

        <h1 className="title italiana">Campana Arquitetura</h1>

        <div className="socialMedia">
          <Icon
            caminhoImg="/icons/whatsapp.svg"
            caminhoHref="https://api.whatsapp.com/send/?phone=5582999442339"
          />
          <Icon
            caminhoImg="/icons/Instagram.svg"
            caminhoHref="https://www.instagram.com/campanarquitetura/"
          />
          <Icon
            caminhoImg="/icons/Email.svg"
            caminhoHref="mailto:Contato@campanarquitetura.com.br?subject=Contato&body=Olá, gostaria de entrar em contato!"
          />
        </div>

        <div className="building">
          <p className="text inter">Site em construção</p>
        </div>
      </div>
    </>
  );
}

export default App;
