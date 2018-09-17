# fossari.is

A simple React application that tells if it's Friday

## Stack

- TypeScript 3
- Styled Components 4
- Parcel
- Babel 7
- PostCSS (autoprefixer + preset-env)
- CSS Grid
- react-i18next
- date-fns
- Prettier

## Installation

```bash
# Clone the repo
git clone https://github.com/gaui/fossari.is.git

# Install npm dependencies
yarn

# Start the project in dev mode
yarn start
```

## Docker

```bash
# Pull and run the image in detached mode and bind port 80
docker run --name fossari -d -p 80:80 gaui/fossari.is
```
