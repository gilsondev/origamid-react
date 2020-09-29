import React from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  const fetchData = (product) => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then((res) => res.json())
      .then((json) => setDados(json));
  };

  React.useEffect(() => {
    if(produto !== null) {
      fetchData(produto);
    }
  }, [produto]);

  if (dados === null) {
    return null;
  }

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
