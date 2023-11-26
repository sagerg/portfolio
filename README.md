# [Portfolio](https://sagerg.github.io/portfolio/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sagerg/portfolio/blob/main/LICENSE) [![pages-build-deployment](https://github.com/sagerg/portfolio/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/sagerg/portfolio/actions/workflows/pages/pages-build-deployment) ![Webpack CI](https://github.com/sagerg/portfolio/actions/workflows/webpack.yml/badge.svg)

A [React](https://reactjs.org/) web application that:

* **Serves** as a digital portfolio, providing a comprehensive overview of my capabilities and projects
* **Showcases** some of my work, skills, achievements, and experiences

## Quick Start

Download and run this application in development mode on your local server:

```
$ git clone https://github.com/sagerg/portfolio.git
$ cd portfolio
$ npm install
$ npm run serve
```

Run unit tests:

```
$ npm test
```

Create build directories `/dist` and `/docs` with a production build:

```
$ npm run build
```

Q: Why do we have **two** build directories?

A: Well, `/dist` is built from running `webpack --mode production` but GitHub pages require the `/index.html` to be in the root of the project directory or in `/docs`, so we copy the contents of `/dist` to `/docs` for this purpose.  

### npm and Node.js

```
$ npm --version
10.2.4
$ node --version
v20.9.0
```

### License

This project is [MIT licensed](./LICENSE).