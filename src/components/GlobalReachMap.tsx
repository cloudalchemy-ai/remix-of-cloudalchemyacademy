import globalMap from "@/assets/globalmap.jpeg";

export function GlobalReachMap() {
  return (
    <img
      src={globalMap}
      alt="World map showing global student reach across 6 continents"
      loading="lazy"
      className="h-auto w-full"
    />
  );
}
