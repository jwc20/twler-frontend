import { useState, useEffect } from "react";

const url = "http://127.0.0.1:3000";

function EventTable() {
  // Fetch years for dropdown menu
  // Fetch Events from the latest year
  // Render

  const [years, setYears] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(url + "/years")
      .then((r) => r.json())
      .then(setYears);
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default EventTable;
