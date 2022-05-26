import { useState, useEffect } from "react";
import { useTable } from "react-table";

const url = "http://127.0.0.1:3000";

function EventTable({ columns, events }) {
  // Fetch years for dropdown menu
  // Fetch Events from the latest year
  // Render
  //

  /*
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      events,
    });
  */

  /*
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch(url + "/years")
      .then((r) => r.json())
      .then(setYears);
  }, []);

  */

  return (
    <div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>

      {/*

      <table {...getTableProps()} border="1">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>


      */}
    </div>
  );
}

export default EventTable;
