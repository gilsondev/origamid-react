import React from "react";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = React.useState(null);

  const handleClick = (event) => {
    const productName = event.target.innerText;
    setProduto(productName);
  };

  React.useEffect(() => {
    if(produto !== null) {
      localStorage.setItem("produto", produto);
    }
  }, [produto])

  React.useEffect(() => {
    const productName = localStorage.getItem("produto");
    if (productName) {
      setProduto(productName);
    }
  }, []);

  return (
    <div className="App">
      <h1>Preferencia: {produto}</h1>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        smartphone
      </button>

      <br />

      <Produto produto={produto} />
    </div>
  );
}

export default App;
