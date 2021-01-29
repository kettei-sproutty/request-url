import { IncomingMessage } from 'http'

interface GetProtocolFn {
  <T extends IncomingMessage>(req: T, host: string): 'http' | 'https'
}
const getProtocol: GetProtocolFn = (req, host) => {
  if (req && req.headers['x-forwarded-proto'] && typeof req.headers['x-forwarded-proto'] === 'string') {
    return 'https'
  } else {
    const protocolCheck = /localhost?|127.0.0.1?/
    return protocolCheck.test(host) ? 'http' : 'https'
  }
}

export default getProtocol
