module.exports={
    /**
     * 静态文件存放路径，作为 mginx 代理响应静态文件时的根路径。若使用docker启动，此处定义为docker内部的地址，默认为 /mginx-files。
     * 强烈不建议修改，若修改，需要自行保证docker启动后，在docker内创建该路径。
     * 为了保证静态文件持久化存储，一般启动时会将该路径挂载到宿主机上，避免文件随docker停止而销毁。
     */
    staticDirPath: '/mginx-files',
    db: {
      /**
       * MongoDB 连接字符串，当MongoDB服务部署在非宿主机上时，替换 host.docker.internal 为可访问的IP地址
       */
      mongodb: 'mongodb://e6ce2842ac94f10b.c.cloudtogo.cn:30237/mginx-demo',  // host.docker.internal:27017/mginx-test
  
      /**
       * Redis 键前缀，可自行定义
       */
      redisKeyPrefix: 'mginx:',
  
      /**
       * Redis 连接串。当 redis 部署在非宿主机上时，替换 host.docker.internal 为可访问IP地址
       */
      redisConnect: 'redis://39188a42772f4ab2.c.cloudtogo.cn:30238'
    },
  };
  