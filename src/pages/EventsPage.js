// import { useState, useEffect } from "react";
import EventTable from '../components/EventTable';

function EventsPage() {
  // const [events, setEvents] = useState([]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline italic">Events</h1>
      <EventTable />
    </div>
  );
}

export default EventsPage;
