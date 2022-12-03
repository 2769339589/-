const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  future: {
    webpack5: true
  },
  images: {
    // 图片压缩
    formats: ['image/avif', 'image/webp'],
    // 允许next/image加载的图片 域名
    domains: [
      'gravatar.com',
      'www.notion.so',
      'avatars.githubusercontent.com',
      'images.unsplash.com'
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat'
    //   })
    // }
    return config
  }
})
waline:
  enable: true //是否开启
  serverURL: https://pl.longkui.cc/ui/login?redirect //Waline #服务端地址，我们这里就是上面部署的 Vercel 地址
  placeholder: 请文明评论呀 //评论框的默认文字
  avatar: mm //头像风格
  meta: [nick, mail, link] // 自定义评论框上面的三个输入框的内容
  pageSize: 10 //评论数量多少时显示分页
  lang: zh-cn // 语言, 可选值: en, zh-cn
  // Warning: 不要同时启用 `waline.visitor` 以及 `leancloud_visitors`.
  visitor: false // 文章阅读统计
  comment_count: true // 如果为 false , 评论数量只会在当前评论页面显示, 主页则不显示
  requiredFields: [nock,mail] //设置用户评论时必填的信息，[nick,mail]: [nick] | [nick, mail]
  libUrl: //Set custom library cdn url
