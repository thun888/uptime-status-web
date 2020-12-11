// 配置
window.Config = {

  // 站点名
  SiteName: 'thun888的服务器们',

  // 站点链接
  SiteUrl: 'http://stats.thun888.xyz',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1070350-3cfc2387e30ddf85dad15f87',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'http://server.thun888.xyz'
    },
    {
      text: 'BiliBili',
      url: 'https://space.bilibili.com/451090261'
    },
    {
      text: '附监控站',
      url: 'http://server-9g1wx3kb731de358-1302025169.tcloudbaseapp.com'
    }
  ]
};
