import { getFeaturedEvents } from "../../dummy-data";
import Image from "next/image";

export default function AllEventsPage() {
  const events = getFeaturedEvents();
  return (
    <div>
      <h1>All Events Page</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <Image src={event.image} alt={event.title} width={200} height={200} />
        </div>
      ))}
    </div>
  );
}
