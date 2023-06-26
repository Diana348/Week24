import { useState } from "react";
import "./App.css";
import PriceCol from "./components/ui/PriceCol";
import data from "./data/prices";

function App() {
  const [columns, setColumns] = useState(data);

  const changeChoosenColumn = (title) => {
    const newData = data.map((col) => {
      if (col.name === title) {
        col.isChosen = true;
        return col;
      } else {
        col.isChosen = false;
      }
      return col;
    });

    setColumns(newData);
  };

  return (
    <div className="App">
      {columns.map((elem) => (
        <PriceCol
          name={elem.name}
          price={elem.price}
          speed={elem.speed}
          info={elem.info}
          isChosen={elem.isChosen}
          key={elem.name}
          titleColor={elem.titleColor}
          speedBlockColor={elem.speedBlockColor}
          onChangeColumn={changeChoosenColumn}
        />
      ))}
    </div>
  );
}

export default App;
