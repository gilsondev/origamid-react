import React from "react";
import "./App.css";

function App() {
  const [contador, setContador] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const [classe, setClasse] = React.useState("");
  const refTimeout = React.useRef();

  const handleClick = (event) => {
    setClasse(null);
    setContador(contador + 1);
    setNotificacao("Produto adicionado com sucesso");

    clearTimeout(refTimeout.current);
    refTimeout.current = setTimeout(() => {
      setClasse('efeito')

      setTimeout(() => {
        setNotificacao(null);
      }, 1000)
    }, 2000);

  };

  return (
    <div className="app">
      {notificacao && (
        <div className={`notificacao ${classe}`}>{notificacao}</div>
      )}

      <button onClick={handleClick}>Adicionar no Carrinho</button>
    </div>
  );
}

export default App;
