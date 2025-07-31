import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/event-list";
import ResultsTitle from "../../../components/results-title/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert/error-alert";

export default function FilteredEventsPage() {
  const router = useRouter();

  if (!router.query?.slug?.length) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Please select correct dates.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const year = Number(router.query.slug[0]);
  const month = Number(router.query.slug[1]);

  if (
    !month ||
    isNaN(month) ||
    !year ||
    isNaN(year) ||
    month < 0 ||
    month >= 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Please select correct dates.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year,
    month,
  });
  if (!filteredEvents) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Loading...</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events for this dates.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
