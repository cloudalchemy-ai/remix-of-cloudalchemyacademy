import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Lightweight world topojson hosted on a CDN
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// [lon, lat, sizeWeight]
const MARKERS: Array<{ coords: [number, number]; size: number; name: string }> = [
  { coords: [-98, 39], size: 22, name: "United States" },
  { coords: [-106, 56], size: 10, name: "Canada" },
  { coords: [-99, 19], size: 6, name: "Mexico" },
  { coords: [-74, 4], size: 5, name: "Colombia" },
  { coords: [-58, -15], size: 11, name: "Brazil" },
  { coords: [-70, -33], size: 4, name: "Chile" },
  { coords: [-64, -34], size: 5, name: "Argentina" },
  { coords: [-3, 55], size: 14, name: "United Kingdom" },
  { coords: [2, 47], size: 10, name: "France" },
  { coords: [10, 51], size: 13, name: "Germany" },
  { coords: [12, 42], size: 8, name: "Italy" },
  { coords: [-4, 40], size: 8, name: "Spain" },
  { coords: [19, 52], size: 7, name: "Poland" },
  { coords: [15, 60], size: 7, name: "Sweden" },
  { coords: [25, 41], size: 5, name: "Turkey" },
  { coords: [31, 30], size: 5, name: "Egypt" },
  { coords: [3, 9], size: 5, name: "Nigeria" },
  { coords: [25, -29], size: 6, name: "South Africa" },
  { coords: [37, 0], size: 4, name: "Kenya" },
  { coords: [45, 24], size: 6, name: "Saudi Arabia" },
  { coords: [55, 25], size: 6, name: "UAE" },
  { coords: [78, 22], size: 24, name: "India" },
  { coords: [105, 35], size: 10, name: "China" },
  { coords: [127, 37], size: 7, name: "South Korea" },
  { coords: [138, 36], size: 8, name: "Japan" },
  { coords: [101, 4], size: 5, name: "Malaysia" },
  { coords: [114, -2], size: 7, name: "Indonesia" },
  { coords: [121, 14], size: 6, name: "Philippines" },
  { coords: [100, 15], size: 5, name: "Thailand" },
  { coords: [134, -25], size: 8, name: "Australia" },
  { coords: [174, -41], size: 4, name: "New Zealand" },
];

export function GlobalReachMap() {
  return (
    <div className="w-full">
      <ComposableMap
        projectionConfig={{ scale: 155 }}
        width={980}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="oklch(0.95 0.01 230)"
                stroke="oklch(0.85 0.02 230)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "oklch(0.92 0.02 200)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {MARKERS.map((m) => (
          <Marker key={m.name} coordinates={m.coords}>
            <circle
              r={Math.sqrt(m.size) * 1.6}
              fill="var(--brand-teal-dark)"
              fillOpacity={0.75}
              stroke="white"
              strokeWidth={0.6}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
