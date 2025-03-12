// Bun.serve({
//   fetch(req) {
//     const url = new URL(req.url);
//     if (url.pathname === "/" && req.method == "GET") {
//       // do the data stuff here
//       return Response.json({ details: "Here the / endpoint" })
//     }
//     return new Response("404!");
//   },
// });

import type { Handshake } from "./types";

const parse_cities = async () => {
  const handshake_file =  Bun.file("./handshake_data.json");
  const handshake_json: Handshake = await handshake_file.json();
  let from_cities: [number, string][] = [];
  let to_cities: [number, string][] = [];
  handshake_json.cities.forEach(v=> {
    if (v.is_enable_for_from) from_cities.push([v.city_id, v.city_name]);
    to_cities.push([v.city_id, v.city_name]);
  })
  return { from: from_cities, to: to_cities }
}

const 