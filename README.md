# Awesome CV/Resume builder (React + TypeScript + Vite) [![wow](https://cdn.jsdelivr.net/gh/agm1n/agm1n/media/awesome-badge.svg)](https://github.com/agm1n/awesome-cv-builder#readme)

Finally, a well-designed, nice-looking resume has appeared with minimal effort to change your own information for publication on your own hosting 🥳 🚀

This template provides setup to get React working in Vite with HMR and some ESLint rules.

## Functionality:
- awesome desktop screen layout with nice system fonts
- search for projects from the "experience" section on the necessary technologies like [`cv.example.by?tags=nodejs,typescript`](https://cv.example.by/?tags=nodejs,typescript)
- dark/light theme switcher + system theme detection
- HTML meta tags generate based on your data in **cv.json** file
- nice mobile ( `max-width: 768px`) screen layout
- the layout for printing ( `@media print `) is made separately with correct margins and readable styles and hiding several elements
- "modal" window  component to show some specific info

## Usage:
0. run ```git clone https://github.com/agm1n/awesome-cv-builder && pnpm install```
1. change your data in `src/data/cv.json` and own image by path `public/img/avatar.jpg`
3. create build via start command `pnpm run build`
4. enjoy results in /dist/index.html

## To check results you can see on [DEMO](https://cv.example.by) page of my own CV

or just little scroll

## Views:

#### Desktop:
<p float="left">
  <img alt="mobile view light theme" src="https://cdn.jsdelivr.net/gh/agm1n/agm1n/media/desktop_light.jpg" width="48%" align="left" />

  <img alt="mobile view light theme" src="https://cdn.jsdelivr.net/gh/agm1n/agm1n/media/desktop_dark.jpg" width="48%" align="center"  />
</p>

#### Print Version:

<p float="center">
  <img alt="mobile view light theme" src="https://cdn.jsdelivr.net/gh/agm1n/agm1n/media/print_view.jpg" width="100%" align="center" />
</p>


#### Mobile:
<div>
<p float="left" align="center">
  <img alt="mobile view light theme" src="https://cdn.jsdelivr.net/gh/agm1n/agm1n/media/mobile_light.jpg" width="40%" align="left"/>
 <img alt="mobile view light theme" src="https://cdn.jsdelivr.net/gh/agm1n/agm1n/media/mobile_dark.jpg" width="40%" align="center"/>
</div>
