const AnyProxy = require('anyproxy')

module.exports = () => {
  const proxyServer = new AnyProxy.ProxyServer({
    port: 8001,
    rule: require('./rule'),
    webInterface: {
      enable: true,
      webPort: 8002
    },
    forceProxyHttps: false,
    wsIntercept: false,
    silent: false,
    dangerouslyIgnoreUnauthorized: true
  })

  proxyServer.on('ready', () => {
    console.log('\n已开启代理 127.0.0.1:8001 请根据 https://git.io/cookies 教程配置代理')
    console.log('\n然后使用微信 PC 版：打开美团或者饿了么，任意一个拼手气红包链接')
    console.log('\n注意：成功获取 cookie 后，工具会自动关闭，请在当前目录查看 cookie.txt 文件')
    console.log('\n注意：工具用完之后，请取消勾选代理服务器，你才能正常上网')
  })

  proxyServer.start()
}
