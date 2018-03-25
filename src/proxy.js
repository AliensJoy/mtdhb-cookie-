const AnyProxy = require('anyproxy')

module.exports = () => {
  const proxyServer = new AnyProxy.ProxyServer({
    port: 8001,
    rule: require('./rule'),
    webInterface: {
      enable: true,
      webPort: 8002
    },
    forceProxyHttps: true,
    wsIntercept: false,
    silent: false
  })

  proxyServer.start()
  AnyProxy.utils.systemProxyMgr.enableGlobalProxy('127.0.0.1', '8001')
  console.log('已开启代理 127.0.0.1:8001')
  console.log('请使用微信 PC 版：打开美团或者饿了么，任意一个拼手气红包链接')
}
