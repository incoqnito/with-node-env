# node-env

## Motivation

Switching between development/production mode often is done by setting the
NODE_ENV environment variable to the respective values.

Sadly this can't be done in an unified way around different OSes
(e.g. `NODE_ENV={value}` on UNIX like systems and `SET NODE_ENV={value}` on Windows).
But don't worry, node-env is here for you!

## Installation

`npm install --save with-node-env`

## Usage

```json
"scripts": {
  "development": "with-node-env development forever -w index.js",
  "production": "with-node-env production forever index.js"
}
```

This code will set NODE_ENV (accessible via `process.env.NODE_ENV`) to `development`
when running `npm run development` and vice versa for `npm run production`
