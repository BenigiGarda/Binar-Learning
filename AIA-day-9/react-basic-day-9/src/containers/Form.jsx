import React, { useState } from "react";
import InputForm from "../components/InputForm";
function Form({ currentData, setNewData, setLoading }) {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputStatus, setInputStatus] = useState("Active");
  let dataTable = currentData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      name: inputName,
      age: inputAge,
      status: inputStatus,
    };
    dataTable.push(obj);
    setNewData(dataTable);
    setInputName("");
    setInputAge("");
    setInputStatus("Active");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <InputForm
          htmlFor={"Name"}
          setInputName={setInputName}
          value={inputName}
        />
        <InputForm htmlFor={"Age"} setInputAge={setInputAge} value={inputAge} />
        <InputForm
          htmlFor={"Status"}
          setInputStatus={setInputStatus}
          value={inputStatus}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
