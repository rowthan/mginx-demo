module.exports={
    // 个性化配置，根据自身系统情况修改
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
    /**
     * 代理方案标识参数key，默认根据URL goto=代理方案名称 来区别代理分发，标识符可自定义，不同的goto参数可以认为是不同的服务环境
     * */
    proxyParam: 'goto',
    /**
     * 系统标识身份cookie字段名，（针对各系统有所不同），可不填，此值用于系统监控访问记录，数据库access表中会记录cookie中的该属性值，可用于后续的行为分析
     * */
    sessionID:'sessionid',



    // 以下通用默认配置可不修改

    /**
     * 支持请求方式
     */
    methods: ['Get', 'Post', 'Put', 'Delete', 'Options'],

    /**
     * 静态文件存放路径，作为 mginx 代理响应静态文件时的根路径。若使用docker启动，此处定义为docker内部的地址，默认为 /mginx-files。
     * 强烈不建议修改，若修改，需要自行保证docker启动后，在docker内创建该路径。
     * 为了保证静态文件持久化存储，一般启动时会将该路径挂载到宿主机上，避免文件随docker停止而销毁。
     */
    staticDirPath: '/mginx-files',

    /**
     * 反向代理的超时时长，单位毫秒
     */
    proxyTimeout: 60000,

    /**
     * 反向代理keep-alive时长，单位毫秒
     */
    keepAlive: 5000,

    /**
     * 缓存调度规则，生产环境设置为每整分钟触发。用于多节点数据同步定时器
     * 格式：https://github.com/node-schedule/node-schedule#cron-style-scheduling
     */
    job: '*/1 * * * *',

    /**
     * SSL 设置
     */
    ssl: {
        /**
         * 是否开启 HTTPS
         */
        enable: false,

        /**
         * 私钥文件路径
         */
        key: '', // /ssl/website.key

        /**
         * 证书文件路径
         */
        cert: '' // /ssl/website.crt
    },
  };
  