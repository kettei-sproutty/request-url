import { IncomingMessage } from 'http'

const getHost = <T extends IncomingMessage>(req: T): string | undefined => {
  if (!req && window) {
    return window.location.host
  } else if (req && req.headers['host']) {
    return req.headers['host']
  } else if (req && req.headers['x-forwarded-host'] && typeof req.headers['x-forwarded-host'] === 'string') {
    return req.headers['x-forwarded-host']
  } else {
    return
  }
}

export default getHost
