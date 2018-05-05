# cookie

[![GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)

[返回主项目](https://github.com/mtdhb/mtdhb)

美团、饿了么 cookie 一键提取工具

## 使用方法

下载最新版工具

* github releases - https://github.com/mtdhb/cookie/releases
* 百度网盘 - https://pan.baidu.com/s/1BRW9F-4QjOLTxnUrqutIlQ
* 加 QQ 群，在群文件中下载 - https://github.com/mtdhb/mtdhb

### Windows

先使用 PC 版微信：点击任意一个美团、饿了么拼手气红包链接，确保可以正常进入红包页面后，把页面关闭

再双击运行下载好的 `hongbao2-cookie-win.exe`

> 首次使用时，工具会自动生成一个证书文件，你只要双击 `rootCA.crt`，点击 `安装证书`，然后关闭工具再重新打开

工具会提示：已开启代理 `127.0.0.1:8001`

此时请手动：windows 左下角开始按钮 / 搜索 / Internet 选项，如下图设置：

![image](https://user-images.githubusercontent.com/8413791/37874091-351496e2-305a-11e8-85bd-8c5827c5139b.png)

再使用 PC 版微信：点击任意一个美团、饿了么拼手气红包链接

工具会自动抓取 cookie 并生成一个 `.txt`，复制 txt 的全部内容到网站 https://www.mtdhb.com 即可贡献

**贡献完以后，请按照上图，取消勾选代理服务器**

> 下面是 AV 画质的 GIF 演示：

![demo.gif](demo.gif)

### MacOS

因为 mac 版的微信不能授权，所以需要用手机连代理，懂技术的可以自己弄，教程日后再说。

## 捐赠

[如果我们的项目对您有帮助，欢迎捐赠](https://github.com/mtdhb/donate)
