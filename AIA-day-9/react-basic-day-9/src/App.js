import { useState } from "react";
import "./App.css";
import Form from "./containers/Form";
import Table from "./containers/Table";
function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <Form currentData={data} setNewData={setData} />
      <Table bodyData={data} />
    </div>
  );
}

export default App;
