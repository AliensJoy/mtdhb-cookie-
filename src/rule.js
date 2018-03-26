const fs = require('fs')
const path = require('path')

function record (name, content) {
  const file = path.join(process.cwd(), name)
  fs.writeFile(file, content, (err, data) => {
    if (err) {
      return console.error(err)
    }
    console.log(`获取 cookie 成功！请查看 ${file}`)
    process.exit(0)
  })
}

function records (request) {
  try {
    const cookie = request.requestOptions.headers.Cookie
    if (request.url.indexOf('ele.me') !== -1 && cookie.indexOf('snsInfo') !== -1) {
      record('饿了么cookie.txt', cookie)
    } else if (request.url.indexOf('meituan.com') !== -1 && cookie.indexOf('ewxshinfo') !== -1) {
      record('美团cookie.txt', cookie)
    }
  } catch (e) {}
}

module.exports = {
  * beforeDealHttpsRequest (request) {
    return ['meituan.com', 'ele.me'].find(host => request.host.indexOf(host) !== -1)
  },
  * beforeSendResponse (request, response) {
    records(request)
  }
}
