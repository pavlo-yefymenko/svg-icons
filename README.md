# Build SVG icons

To build icons in sprite run `yarn build:icons` or if you prefer npm `npm run build:icons`

In `svg` folder you can find `build-icons.ts` script and `icons` folder where we collect our icons.

It's important that you only add icons to this directory that the application actually needs as there's no "tree-shaking" for sprites. If you wish to manually split up your SVG sprite into multiple files, you'll need to update the build-icons.ts script to do that.

When we build icons to prite we can see in output directory `src/assets/icons` next files

- `name.d.ts` - interface for our icon wrapper component
- `sprite.svg` - sprite with icons
