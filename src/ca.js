const AnyProxy = require('anyproxy')
const exec = require('child_process').exec
const proxy = require('./proxy')

module.exports = () => {
  if (AnyProxy.utils.certMgr.ifRootCAFileExists()) {
    proxy()
  } else {
    AnyProxy.utils.certMgr.generateRootCA((error, keyPath) => {
      if (error) {
        return console.error('生成证书失败', error)
      }
      const certDir = require('path').dirname(keyPath)
      console.log('证书文件将生成在', certDir)
      const open = /^win/.test(process.platform) ? 'start' : 'open'
      exec(`${open} .`, {cwd: certDir})
      proxy()
    })
  }
}
