import React from "react";

import Produto from './Produto'

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (event) => {
    setLoading(true);
    setData(null);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`
    );
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div>
      <button style={{ margin: "1rem" }} onClick={fetchData}>
        Tablet
      </button>
      <button style={{ margin: "1rem" }} onClick={fetchData}>
        Smartphone
      </button>
      <button style={{ margin: "1rem" }} onClick={fetchData}>
        Notebook
      </button>

      {loading && <h3>Carregando...</h3>}
      {data && <Produto data={data} />}
    </div>
  );
};

export default App;
