import React from "react";

function InputFormText({
  htmlFor,
  setInputName,
  setInputAge,
  setInputStatus,
  value,
}) {
  return (
    <>
      {htmlFor === "Name" ? (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => setInputName(e.target.value)}
            value={value}
          />
        </>
      ) : htmlFor === "Age" ? (
        <>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            onChange={(e) => setInputAge(e.target.value)}
            value={value}
          />
        </>
      ) : htmlFor === "Status" ? (
        <>
          <label htmlFor="status">Status</label>
          <select
            defaultValue={value}
            name="status-selector"
            onChange={(e) => setInputStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default InputFormText;
