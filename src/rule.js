const AnyProxy = require('anyproxy')
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

function record (name, content) {
  const file = path.join(process.cwd(), name)
  fs.writeFile(file, content, (err, data) => {
    if (err) {
      return console.error(err)
    }
    console.log(`获取 cookie 成功！请查看 ${file}`)
    const open = /^win/.test(process.platform) ? 'start' : 'open'
    exec(`${open} ${file}`)
    setTimeout(() => process.exit(0), 3000)
  })
}

module.exports = {
  async beforeSendResponse (request, response) {
    if (request.url.indexOf('/restapi/marketing/promotion/weixin') !== -1) {
      record('饿了么.txt', request.requestOptions.headers.Cookie)
    } else if (request.url.indexOf('/coupon/grabShareCoupon') !== -1) {
      record('美团.txt', request.requestOptions.headers.Cookie)
    }
  }
}
