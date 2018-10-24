# 保定盛雲知识产权代理有限公司

北京盛广信合知识产权代理有限公司旗下保定盛雲知识产权代理有限公司官网

## 项目目录

- css：编译后的css文件
- data：mock数据
- dist：编译后的html文件放在这里
- fonts：bootstrap依赖的字体
- images：项目依赖的图片资源
- js：项目依赖的js文件
- less：开发环境下的less文件
- node_modules：npm下载的模块
- page：开发环境下共用的头部和底部文件和html页面模板
- psd：开发时自己做的图
- default.html：项目上线后的入口文件，如果虚拟主机不支持二级目录绑定，那么把dist文件夹放到根目录下会出现路径错误。default.html当做跳转
- gulpfile.js：gulp配置文件
- .gitignore：git忽略文件
- package.json：项目依赖包的描述文件

## bootstrap

考虑为了减少项目体积，就没有把线上依赖的bootstrap用npm下载，直接提前下载后放到了项目里。应用bootstrap构建前端UI，主用应用了栅格化布局、轮播图插件、选项卡插件

## gulp自动化构建

已经定制化默认任务，当less文件发生变化或者共用的头部/底部发生变化只执行gulp命令就行
- 编译less文件
- 用于复用公共头部和底部

## ajax

因缺少后台开发人员配合，所以请求的本地json文件

## ejs模板引擎

考虑为了减少项目体积，就没有把线上依赖的ejs用npm下载，直接下载后放到了项目里。将ajax请求到的数据绑定到页面中，应用在首页的新闻动态、新闻中心栏目、新闻详情页

 
