## 预览&试用
[demo环境](http://9461a0e3c49c60c2.c.cloudtogo.cn:30241/mginx/signup)
![image](https://media.giphy.com/media/ZZlZjsZZbBuegof3m0/giphy.gif)

## 前置依赖服务
使用 mginx 前，你需要提前准备以下服务
- [ ] Docker 环境。项目采用 Docker 运行，请确保服务器已安装 Docker 环境。
- [x] MongoDB 数据库服务。你需要自行启动或已经具备 MongoDB 数据库存储服务。（[loca.js](./local.js) 默认配置了demo数据库，可直接使用）。
- [x] Redis 服务。你需要自行启动或已经具备 Redis 服务。（[loca.js](./local.js) 默认配置了demo数据库，可直接使用）。

## 配置
* clone 本项目至本地： `git clone https://github.com/rowthan/mginx-demo.git`
* 进入 [local.js](./local.js) 根据自身情况对配置文件进行修改。

## 启动
* 参考 [run.sh](./run.sh) 修改后，运行 `sh run.sh` （推荐）
* 或运行以下命令
```
docker run --name mginx -i -p 8888:8888 --network host  -v /{current_dir_path}/local.js:/mginx/config/local.js -v /{dir_for_files}/:/mginx-files/  rowthan/mginx
```

### 说明：
* `--name mginx` 为对当前启动 docker 别名，你可以自定义  
* `-p 80:8888 ` mginx 启动默认端口为 8888，可自定义映射到服务器80端口，启动后，用户可通过 80 端口访问服务
* `--network host` 当MongoDB、Redis 服务在 Docker 宿主机运行，配置此参数后 mginx 可以通过 localhost 访问，否则可不配置该参数
* `{current_dir_path}` 指 `[local.js](./local.js)` 所在路径
* `/mginx/config/local.js` 是 `mginx` 内部配置文件的存放地址，此处不可更改
* `{dir_for_files}` 指 `mginx` 内对于静态文件持久化存储的地址，你需要保证本机上该路径存在且可访问
* `/mginx-files/` 指在 `mginx` 系统对持久化存储文件夹的别名，对应 `[local.js](./local.js)` 中 `staticDirPath` 配置。 

## API
> 根据提供的 API，可以结合CI，集成自动化部署方案。例如：1、push 代码后，CI 对前端代码进行打包`dist`，并通过 SSH 通道，将`dist`传送至`mginx-files`路径下。2、调用接口获取一组默认代理方案数据，修改静态文件路径为`dist`。3、调用接口创建一组代理方案。至此，实现随代码提交而生成测试环境。
* `GET` `/mginx/proxy?proxy=[proxyName]`  获取一组代理方案
* `POST` `/mginx/proxy` 创建一组代理方案

## 高级用法
* 访问自带登录态？ 路由配置中支持设置请求头、响应头，只需要将已登录的cookie信息设置到请求头中，用户访问时便自带登录态了。
* 前后端服务交叉组合生成多套环境。 在服务器页面建立n个后端服务（根据不同分支），上传m个前端dist文件夹；创建m*n个代理分发环境，分别将ajax接口请求打到n个后端服务中，静态请求分发到m个文件夹下。
* 创建说明文档。 需要做一个仅在开发环境下的独立页面，可新建一个路由配置，如 `/guide`， 对其响应设置为「自定义响应」，配置HTML内容。可实现在不修改代码的情况下，对环境新增一些个性化的内容，只作用于测试环境，对生产环境不影响。无侵入性。
* 连接开发环境。在开发过程中，前端将自己的服务注册在mginx服务器上，创建一个环境将静态资源打到自己的开发环境上；后端也是如此。这样前端开发者可以通过mginx随时访问到开发过程后端的最新代码，而后端开发者也可以实时使用前端的服务。mginx 将两个开发环境桥接在一起。开发完成后，可将本代理方案直接分享给其他用户，用于走查最新的开发进度。