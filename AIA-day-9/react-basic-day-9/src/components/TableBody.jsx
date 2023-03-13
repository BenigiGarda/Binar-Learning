import React from "react";

function TableBody({ data }) {
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
    </>
  );
}

export default TableBody;
