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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">
            Events
          </h1>
        </div>

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
              <div className="mt-4">
                <EventTable columns={columns} events={events} />
              </div>
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
}

export default EventsPage;
