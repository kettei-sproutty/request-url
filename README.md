# Request Url

Extract request url from `IncomingMessage (http)`

## Usage

```
import getHost from 'get-url-request'
const { host, protocol, baseUrl } = getHost(req)
```

## Types
```typescript
protocol: 'http' : 'https', // example: http
host: string, // example: 127.0.0.1:3000
baseUrl: string // example: http://127.0.0.1:3000
```

## License

[MIT](https://github.com/kettei-sproutty/request-url/blob/master/LICENSE)