# store-admin

这是[闪鲤电商小程序私有化部署](https://minapp.dev)的管理后台端

> 当前管理后台端版本: v1.1.0

### [方案一] 使用公共管理后台地址

[https://store.minapp.dev](https://store.minapp.dev)

### [方案二] 自己部署管理后台

```
$ git clone https://github.com/minappdev/store-admin.git
# 配置web server的web root目录指向store-admin文件夹
```

### 管理后台端的网络请求的说明

无论是公共管理后台还是自己部署的管理后台, 除了加载自身的静态文件外:

* 会加载高德地图js
* 另外只会向你自己的服务端发起网络请求
