# Laura Castellanos Portfolio

Static portfolio site for Laura Castellanos.

## File Structure

```text
.
├── index.html                  # Main one-page site
├── about/index.html            # Redirect helper for /about
├── projects/index.html         # Redirect helper for /projects
├── robots.txt                  # Search crawler rules
├── sitemap.xml                 # Search sitemap
├── llms.txt                    # AI crawler / citation summary
└── assets
    ├── css/styles.css          # Site styles
    ├── js/app.js               # Site interactions and project data
    ├── fonts                   # Local font files
    ├── images
    │   ├── profile             # Homepage/menu profile image
    │   ├── about               # About section portrait
    │   └── projects            # Project covers and carousel images
    └── archive                 # Old/generated reference assets
```

## Project Image Convention

Each project folder uses the same naming pattern:

```text
assets/images/projects/project-slug/
├── cover.jpg
├── 01.jpg
├── 02.jpg
├── 03.jpg
├── 04.jpg
└── 05.jpg
```

The closed carousel card uses `cover.jpg`.
The opened project modal uses `01.jpg` through `05.jpg`.

## Editing Project Content

Project titles, categories, descriptions, participation text, and image paths live in:

```text
assets/js/app.js
```

Look for the `PROJECTS` array.
