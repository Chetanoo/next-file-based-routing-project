import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const path = `events/${year}/${month}`;
    router.push(path);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
