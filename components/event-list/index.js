import EventItem from "../event-item/event-item";

import classes from "./event-list.module.css";

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
}
