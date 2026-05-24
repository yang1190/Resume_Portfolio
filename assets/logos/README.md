# Company logos

Drop each company's logo file in this folder using the **exact filenames** below.
The Experience timeline in `index.html` references these paths; a missing file
is hidden automatically (the company name still shows, just without an icon).

| Company           | Expected filename       |
|-------------------|-------------------------|
| Digital Extremes  | `digital-extremes.svg`  |
| Garena Group      | `garena.svg`            |
| CCP               | `ccp.svg`               |
| The9 Limited      | `the9.svg`              |
| Ubisoft           | `ubisoft.svg`           |

Notes:
- SVG is preferred (crisp at any size). PNG also works — just keep the
  filename the same but with a `.png` extension, and update the `src` in
  `index.html` to match.
- The logo's own color does not matter: `css/style.css` applies
  `filter: brightness(0) invert(1)` to render every logo as a uniform white
  silhouette. Provide any single-color or full-color logo; transparency is kept.
- Logos display at `1.45rem` tall (see the `.company-logo` rule in `style.css`).
