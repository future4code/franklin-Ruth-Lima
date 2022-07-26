import logo from './logo.svg';
import './App.css';
import youtube from './youtube.svg';
import { CardVideoComponent } from './components/CardVideoComponent';
import { MenuItemComponent } from './components/MenuItemComponent';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <img src={youtube} alt="logo youtube" className="youtube.logo" />
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" className="busca"/>
        </header>
        

        <main>
            <nav className="menu-vertical">
                <ul>
                   <MenuItemComponent sectionTitle={'Inicio'}/>
                   <MenuItemComponent />
                   <MenuItemComponent />
                    <hr />
                    <MenuItemComponent />
                    <MenuItemComponent />
                </ul>
            </nav>

            <section className="painel-de-videos">
                <CardVideoComponent src={'url'} titulo={'A volta dos que não foram'}/>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
