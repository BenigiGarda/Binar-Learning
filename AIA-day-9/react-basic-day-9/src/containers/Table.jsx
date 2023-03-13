import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

function Table({ bodyData }) {
  return (
    <table className="table-data">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody data={bodyData} />
      </tbody>
    </table>
  );
}

export default Table;
