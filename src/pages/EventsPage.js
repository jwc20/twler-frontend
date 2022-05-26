import { useMemo } from "react";
import EventTable from "../components/EventTable";
import { useState, useEffect } from "react";

const url = "http://127.0.0.1:3000";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // fetch(url + `/events/years/${year}`)
    fetch(url + `/events/years/2021`)
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
      },
      {
        Header: "date",
        accessor: "date",
      },
    ],
    []
  );

  return (
    <div>
      <h1 className="text-3xl font-bold underline italic">Events</h1>
      {!events.length ? (
        <div>Loading..</div>
      ) : (
        <EventTable columns={columns} events={events} />
      )}
    </div>
  );
}

export default EventsPage;
