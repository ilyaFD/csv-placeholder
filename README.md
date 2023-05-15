## Description
A simple application that parses an unfilled csv file with headers (id, title, body) [https://ilyafd.github.io/csv-placeholder/data/posts.csv](https://ilyafd.github.io/csv-placeholder/data/posts.csv) , extracts IDs, forms a request in json.placeholder to fill fields and generates a new completed csv file


## Structure
- components - UI components
- containers - Logical wrappers of the UI components
- providers - API connection
- utils - utility functions
- types - reusable types

## Getting Started
```bash
npm run start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.