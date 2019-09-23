## 前置依赖服务
- [ ] Docker 环境。项目采用 Docker 运行，请确保服务器已安装 Docker 环境。
- [ ] MongoDB 数据库服务。你需要自行启动或已经具备 MongoDB 数据库存储服务。可直接在服务器端安装并启动或使用云数据库。
- [ ] Redis 服务。你需要自行启动或已经具备 Redis 服务。可直接在服务器端安装并启动或使用云数据库服务。

## 配置
* 进入 [local.js](./local.js) 根据自身情况对配置文件进行修改。

## 启动
* 命令终端进入到当前目录，运行 `ls` 确保能看到以下内容
```
local.js readme.md
```

* 运行以下命令
```
docker run --name mginx -i -p 8888:8888 -v /{current_dir_path}/local.js:/mginx/config/local.js -v /{dir_for_files}/:/mginx-files/  rowthan/mginx
```
或参考 `run.sh`
其中：
** `--name mginx` 为对当前启动 docker 别名，你可以自定义
** `-p 80:8888 ` mginx 启动默认端口为 8888，可自定义映射到服务器80端口，启动后，用户可通过 80 端口访问服务
** `{current_dir_path}` 指 `local.js` 所在路径，当当前目录终端下，可通过 `pwd` 命令查看
** `/mginx/config/local.js` 是 `mginx` 内部配置文件的存放地址，此处不可更改
** `{dir_for_files}` 指 `mginx` 内对于静态文件持久化存储的地址，你需要保证本机上该路径存在且可访问
** `/mginx-files/` 指在 `mginx` 系统对持久化存储文件夹的别名，对应 `local.js` 中 `staticDirPath` 配置。 