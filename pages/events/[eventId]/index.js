import { useRouter } from "next/router";

export default function EventDetailPage() {
  const router = useRouter();

  console.log({ event: router.query });
  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
}
