# world-places

An interactive 3D globe that lets you explore 50 historic cities across six continents. Built with Next.js 16, React 19, BabylonJS, and too much coffee.

The globe has two render modes: a realistic textured earth with clouds and atmospheric glow, and a stylized flat version with a wireframe overlay that looks like it belongs in a sci-fi control room. You can toggle between them with a button. Both modes show location markers that actually land on the correct countries (getting that right was harder than it sounds).

## Showcasing

- **3D Earth** with two render modes (realistic + stylized), auto-rotation, and orbital camera controls
- **50 places** with real coordinates, real facts, and category tags spread across all continents
- **Location markers** on the globe that follow the earth's rotation
- **Search** across name, country, continent, and category with debounced input
- **Place detail pages** statically generated for each city
- **Bookmarks** persisted to localStorage
- **Stats panel** with aggregate counts
- **Gruvbox dark theme** everywhere, because light mode is for people who enjoy staring at the sun

## Tech stack

| What | Why |
|------|-----|
| [Next.js 16](https://nextjs.org/) | App Router, server components by default, Turbopack for dev |
| [React 19](https://react.dev/) | Ref callbacks with cleanup, `use()` hook, refs as regular props |
| [TypeScript 5.9](https://www.typescriptlang.org/) | Strict mode. No `any`. We don't negotiate with loose types. |
| [BabylonJS 8](https://www.babylonjs.com/) | 3D rendering via the imperative API (`@babylonjs/core`) |
| [Tailwind CSS 4](https://tailwindcss.com/) | CSS-first config with `@theme` directive for the Gruvbox palette |
| [ESLint 10](https://eslint.org/) | Flat config |

## Getting started

```bash
# clone
git clone git@github.com:equidevium/world-places.git
cd world-places

# install
pnpm install

# grab the textures (see below)

# run
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and try not to spend 20 minutes just spinning the globe.

## Textures

The realistic earth uses texture maps from [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC BY 4.0).

Download the 2K versions and place them in `public/textures/` with these names:

```
earth_daymap.jpg
earth_nightmap.jpg
earth_normal_map.jpg
earth_specular_map.jpg
earth_clouds.jpg
```

The 2K resolution is plenty. 8K looks sharper but will make your GPU question its life choices.

Some textures download as `.tif` files. Convert them to `.jpg` first since browsers don't support TIFF.

## Project structure

```
src/
  app/
    page.tsx              # Home: globe + featured places + stats
    explore/page.tsx      # Full-viewport globe
    places/page.tsx       # Searchable place listing
    places/[slug]/page.tsx # Individual place detail
    about/page.tsx        # Stack info + credits
    not-found.tsx         # 404
    layout.tsx            # Root layout with bookmarks provider
    globals.css           # Tailwind + Gruvbox theme
  components/
    earth/                # 3D globe: scene, realistic, stylized, markers, toggle
    features/             # Place cards, lists, search, stats, info drawer
    layout/               # Header, footer, nav, sidebar, bookmarks provider
    ui/                   # Badge, card, modal, skeleton, tooltip
  hooks/
    use-babylon-engine.ts # React 19 ref callback for BabylonJS lifecycle
    use-debounce.ts       # Generic debounce hook
    use-earth-rotation.ts # Scene observer for auto-rotation
  lib/
    constants.ts          # Shared constants and category mappings
    places-data.ts        # 50 places with coordinates, facts, and metadata
    texture-loader.ts     # Texture paths for the realistic earth
  types/
    components.ts         # UI component prop types
    earth.ts              # 3D scene types
    places.ts             # Place, Continent, PlaceCategory
```

## Architecture notes

**Server vs. client components.** Pages are server components that export metadata. Interactivity lives in client wrappers pushed as deep into the tree as possible. The places page is a server component; the search + filtering lives in a `PlacesExplorer` client wrapper inside it. This keeps the JavaScript bundle small and lets Next.js statically render everything it can.

**BabylonJS lifecycle.** The engine is created via a React 19 ref callback stored in a `useRef` so the function identity stays stable across renders. Without this, React would see a new ref on every render and destroy/recreate the entire WebGL context. That bug cost an afternoon to find.

**Marker positioning.** Converting lat/lng to 3D coordinates on a BabylonJS sphere requires two corrections beyond the textbook formula: a +90 degree longitude offset (because the sphere UV starts west of the prime meridian) and a negated X axis (because the textures use `uScale=-1`). The comments in `earth-markers.tsx` explain the math if you're curious.

**Render mode toggle.** Both earth modes (realistic and stylized) share a `TransformNode` pivot. Markers are children of the pivot and persist across mode swaps. Only the earth meshes get disposed and recreated when you toggle.

## Scripts

```bash
pnpm dev        # Start dev server with Turbopack
pnpm build      # Production build
pnpm start      # Serve production build
pnpm lint       # ESLint
pnpm lint:fix   # ESLint with auto-fix
pnpm format     # Prettier
```

## Credits

- Earth textures: [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC BY 4.0)
- Place data: real coordinates and facts, sourced from public records and way too many Wikipedia tabs

## License

MIT
