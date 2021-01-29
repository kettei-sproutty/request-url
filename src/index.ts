import type { IncomingMessage } from 'http'
import getHost from './get-host'
import getProtocol from './get-protocol'

/**
 * @param req - http request
 * @param ssl - optional, true if you want to force https
 * @example const { host, protocol, baseUrl } = getRequestUrl(req)
 */
const getRequestUrl = <T extends IncomingMessage>(req: T, ssl?: boolean) => {
  const host = getHost(req)
  if (!host) throw new Error('> get-request-url: Unable to get request url ')
  const protocol = ssl ? 'https' : getProtocol(req, host)
  const baseUrl = getBaseUrl(protocol, host)

  return { host, protocol, baseUrl }
}

export default getRequestUrl
