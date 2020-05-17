# coc_charaseet

- call of cthulhu CharaSeet
- <https://coccharasheet.web.app/>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy Setup

1. get Firebase token by `firebase login:ci`
   - if you use another project, run `firebase use [project ID or alias]` before getting token
2. define environment variable `COC_CHARA_SHEET_FIREBASE_TOKEN`

## Deploy

- execute `docker-compose -f ./deploy-compose.yml run deploy`
  - 1st time, use `docker-compose -f ./deploy-compose.yml build` for building docker
