# Request Url

Extract request url from client or server.

## Installation

```typescript
npm install get-url-request
/* - OR - */
yarn add get-url-request
```

## Usage

`getHost` function takes 2 arguments:

- req `typeof IncomingMessage`
- ssl `boolean`

```typescript
import getRequestUrl from 'get-url-request'

// ...

const { host, protocol, baseUrl } = getRequestUrl(req)
```

## License

[MIT](https://github.com/kettei-sproutty/request-url/blob/master/LICENSE)
