import { Suspense, useMemo } from "react";
import EventTable, { SelectColumnFilter } from "../components/EventTable";
import { useState, useEffect } from "react";

const url = "http://127.0.0.1:3000";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch(url + "/years")
      .then((r) => r.json())
      .then((years) => setYears(years));
  }, []);

  useEffect(() => {
    // fetch(url + `/events/years/${year}`)
    fetch(url + `/events/years/2022`)
      .then((r) => r.json())
      .then((events) => {
        // setEvents(events);
        // FIXME: temporary solution
        setEvents(events.filter((value) => Object.keys(value).length !== 0));
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Location",
        accessor: "location",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  function handleChange(e) {
    fetch(url + `/events/years/${e.target.value}`)
      .then((r) => r.json())
      .then((events) => {
        // setEvents(events);
        // FIXME: temporary solution
        setEvents(events.filter((value) => Object.keys(value).length !== 0));
      })
      .catch((error) => {
        console.log("error");
      });
  }

  return (
    <div className="flex justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        {!events.length ? (
          <div>Loading..</div>
        ) : (
          <div>
            <select
              name="year"
              id="year"
              aria-label="year"
              onChange={handleChange}
            >
              {years.map((year, i) => (
                <option key={i} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <EventTable columns={columns} events={events} />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default EventsPage;
