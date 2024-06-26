// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_pokemon_id_ from "./routes/api/pokemon/[id].tsx";
import * as $api_pokemon_custom from "./routes/api/pokemon/custom.ts";
import * as $api_pokemon_index from "./routes/api/pokemon/index.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $pokemon_page_ from "./routes/pokemon/[page].tsx";
import * as $pokemon_layout from "./routes/pokemon/_layout.tsx";
import * as $pokemon_details_id_ from "./routes/pokemon/details/[id].tsx";
import * as $pokemon_index from "./routes/pokemon/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $PokemonView from "./islands/PokemonView.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/pokemon/[id].tsx": $api_pokemon_id_,
    "./routes/api/pokemon/custom.ts": $api_pokemon_custom,
    "./routes/api/pokemon/index.ts": $api_pokemon_index,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[page].tsx": $pokemon_page_,
    "./routes/pokemon/_layout.tsx": $pokemon_layout,
    "./routes/pokemon/details/[id].tsx": $pokemon_details_id_,
    "./routes/pokemon/index.tsx": $pokemon_index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/PokemonView.tsx": $PokemonView,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
