# Request Url

Extract request url from `IncomingMessage (http)`

## Installation
```typescript
npm install get-url-request
/* - OR - */
yarn add get-url-request
```

## Usage

`getHost` function takes 2 arguments:

* req `typeof IncomingMessage`
* ssl `boolean`


```typescript
import getHost from 'get-url-request'
const { host, protocol, baseUrl } = getHost(req)
```

```typescript
import getHost from 'get-url-request'

// ...

Component.getInitialProps = (ctx: NextPageContext) => {
    const { baseUrl } = getHost(req, ssl)
    fetch(`${baseUrl}/api/endpoint`)
    // ...
}
```

## Types
```typescript

args: (req?: IncomingMessage, ssl?: boolean)
return: {
    protocol: 'http' | 'https', // example: http
    host: string, // example: 127.0.0.1:3000
    baseUrl: string // example: http://127.0.0.1:3000
```

## License

[MIT](https://github.com/kettei-sproutty/request-url/blob/master/LICENSE)