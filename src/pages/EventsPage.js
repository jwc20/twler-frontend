import { Suspense, useMemo } from "react";
import EventTable, { SelectColumnFilter } from "../components/EventTable";
import { useState, useEffect } from "react";

const url = "http://127.0.0.1:3000";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    async function getYears() {
      const response = await fetch(url + "/years")
        .then((r) => r.json())
        .then((years) => setYears(years));
    }
    getYears();
  }, []);

  useEffect(() => {
    async function getInitialYear() {
      const response = await fetch(url + `/events/years/2022`)
        .then((r) => r.json())
        .then((events) => {
          setEvents(events.filter((value) => Object.keys(value).length !== 0));
        })
        .catch((error) => {
          console.log("error");
        });
    }
    getInitialYear();
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

  async function handleChange(e) {
    const response = await fetch(url + `/events/years/${e.target.value}`)
      .then((r) => r.json())
      .then((events) => {
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
          <h1 className="text-xl font-semibold">Events</h1>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          {!events.length ? (
            <div>Loading..</div>
          ) : (
            <div>
              <div className="flex gap-x-2 flex-1  flex items-center">
                <span className="text-gray-700 items-center font-extrabold">
                  Year:
                </span>
                <select
                  name="year"
                  className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              </div>

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
