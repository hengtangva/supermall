module.exports = {
  configureWebpack: {
    resolve: {
      //配置别名，方便后面的引用
      alias: {
       //'@' : 'src', 默认
        'assets': '@/assets',
        'common' : '@/common',
        'components': '@/components',
        'network': '@/network',
        'views' :'@/views',
      }
    }
  }

}
