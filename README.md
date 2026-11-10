# ASIF K A — Portfolio

My personal graphic design portfolio website.

A responsive React and Vite portfolio. Categories, projects, expertise and tools are editable in `src/data/portfolio.js`. Contact destinations live in `src/data/contact.js`.

## Run locally

1. Install Node.js (18 or newer).
2. From this folder, run `npm install`.
3. Start the development server with `npm run dev` and open the local address Vite prints.
4. Create a production build with `npm run build`.

## Update categories and projects

- Edit `categories` and `projects` in `src/data/portfolio.js`. Each project uses `categoryId` to appear in its category view; counts update automatically.
- The Selected Work landing view shows category cards only. Choosing a category opens its own hash route and shows only its projects. Browser back/forward, breadcrumbs and “Back to All Categories” are supported.
- The six product advertising concepts use the original JPGs in `public/assets/product-advertising/`. Add future images under `public/assets/` and update the project's `image` path.
- Each project card opens a larger image preview. Set a `disclaimer` in the project data to keep its concept status visible. Categories without projects remain visible and show an empty state.
- Add a project by appending an object to `projects` with an existing `categoryId`, a unique `id`, its `title`, `category`, and `image` path. Add new categories to `categories`; counts and category pages are generated from the data.
- AURA's detail page content and gallery groups are editable in src/data/aura.js; the project entry in src/data/portfolio.js connects its category card and route. Original AURA images are in public/assets/aura/.
- HoneyBee Studio's campaign details and ordered gallery are editable in src/data/honeybee.js; its project entry in src/data/portfolio.js connects it only to Social Media & Marketing Designs. Original campaign artwork is in public/assets/honeybee-studio/.
- Movie poster titles, descriptions, concepts and image paths are editable in src/data/moviePosters.js. Their project cards link to individual detail views, and the supplied poster originals remain in public/assets/movie-posters/.
- Corporate & Commercial Designs are listed in src/data/corporate.js. Each image is its own work, including the two Chicfer designs and original/redesigned family gathering invitations.
- New Social Media Designs, logo/identity, visiting card, Motion Graphics, and AI Promotional Videos categories plus their editable project records live in src/data/creativeWork.js. Existing Social Media & Marketing Designs remains a separate category with HoneyBee Studio.
- Place future logo images in public/assets/logos/, visiting card sides in public/assets/visiting-cards/, motion MP4s and posters in public/assets/motion-graphics/, and AI promotional MP4s/posters in public/assets/ai-promotional-videos/. Keep a two-sided card together in one project record with separate front/back image entries. Add video records with a video source, optional poster and description; the category gallery supplies the player and navigation.
- Category tabs let visitors switch between all work categories. New media galleries keep image proportions, group card sides, and use image or video previews with previous/next controls.
- Skills and software tools are in the same file.

## Add contact details

Open `src/data/contact.js` and replace the empty strings in `contactDetails`:

- `whatsappNumber`: international format, digits only, for example `919876543210`.
- `email`: your email address.
- `instagramUrl` and `linkedinUrl`: full profile URLs.

A contact link appears as an explicit “ADD …” placeholder until its value is filled. The WhatsApp URL is generated from the phone number; email opens a mail draft; profile URLs open in a new tab.

The design uses Google Fonts with local system sans-serif fallbacks.

