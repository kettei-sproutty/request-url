/// <reference types="node" />
import type { IncomingMessage } from 'http'

type UrlObj = {
  protocol: 'http' | 'https'
  host: string
  baseUrl: string
}

const getHost = (req?: IncomingMessage, ssl?: boolean): UrlObj => {
  const url: UrlObj = {
    protocol: 'http',
    host: '',
    baseUrl: '',
  }

  if (!req && window) {
    url.host = window.location.host
    url.protocol = ssl ? 'https' : window.location.protocol as UrlObj['protocol'] 
  }

  if (req && req.headers['host']) {
    url.host = req.headers['host']
  }

  if (req && req.headers['x-forwarded-host'] && typeof req.headers['x-forwarded-host'] === 'string') {
    url.host = req.headers['x-forwarded-host']
  }

  if (ssl) {
    url.protocol = 'https'
  } else if (req && req.headers['x-forwarded-proto'] && typeof req.headers['x-forwarded-proto'] === 'string') {
    url.protocol = req.headers['x-forwarded-proto'] as UrlObj['protocol']
  } else {
    const protocolCheck = /localhost?|127.0.0.1?/
    url.protocol = protocolCheck.test(url.host) ? 'http' : 'https'
  }

  url.baseUrl = `${url.protocol}://${url.host}`

  return { ...url }
}

export default getHost
