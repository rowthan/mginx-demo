## 预览
[mginx demo](http://9461a0e3c49c60c2.c.cloudtogo.cn:30241/mginx/signup)

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