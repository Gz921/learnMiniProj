1. 关联远程与本地仓库
  1.1. 在git 设置身份名字肯邮箱
  1.2. 生成SSH公钥
  1.3. 将公钥复制到远程仓库设置项里的部署公钥
2. git init 初始化本地仓库 
3. git commit -m 'first commit' 提交项目 
4. git remote add origin https://xxx.com/xx/xxx  关联远程仓库 - 添加源 
5. git push -u origin master  提交 

## 打tag
1. git add . 将工作空间的所有变化添加到暂存区
2. git commit -m 'xxx' 提交暂存区中的代码
3. git tag xxxx  打tag
4. git tag  查看tag
5. git push origin tag name  推送tag
5. git log  查看提交记录
6. git reset 部分版本号 、 git reset --hard 部分版本号  回退、强制回退到某版本
7. 按照前6步骤继续打tag...

## 小程序相关
### 小程序开发工具相关
1. 普通编译--添加编译模式：可设置每次编译之后默认启动页面
### 小程序数据绑定
### 小程序<block/>标签，
1. 仅仅作为一个包裹元素，不会在页面中做任何渲染，只接受控制属性(wx:for  wx:if)，类似于vue的<template/>
### 小程序列表渲染 wx:for
### 小程序模板 template
1. 为了进行代码的复用。模板中包裹的内容，在没有被使用前，不会进行任何渲染。
### wsxx的扩展-尺寸单位
1. rpx(responsive pixel): 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx
2. 如在iphone 6上，屏幕宽为375px，共有750个物理像素，则750rpx=375px=750物理像素，1rpx=0.5px=1物理像素。
### wxs模块 是小程序的一套脚本语言，结合wxml，可以构建出页面的结构。wxs与js是不同语言，有自己的语法。
1. 为什么需要wxs
  - 在wxml中是不能直接调用Page/Component中定义的函数的
  - 但在某些情况下，需要用函数处理wxml中的数据(类似于Vue中的过滤器)，此时可以使用wxs
2. 特点
  - wxs的运行环境和其他js代码是隔离的，wxs中不能调用其他js文件中定义的函数，也不能调用小程序提供的API
  - wxs函数不能作为组件的事件回调
### 常见事件类型
1. touchstart 手指触摸动作开始
2. touchmove 手指触摸后移动
3. touchcancel 手指触摸动作被打断，如来电提醒，弹窗
4. touchend 手指触摸动作结束
5. tap 手指触摸后马上离开
6. longpress 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
## 小程序配置文件
- https://developers.weixin.qq.com/miniprogram/dev/framework/config.html
1. project.config.json：项目配置文件，配置项目名称、qppid等
2. sitemap.json: 小程序搜索相关
3. app.json：全局配置
  - 常用配置项
  1. pages: string[] 必填项，页面路径列表
    - 指定小程序由哪些页面组成，每一项对应一个页面信息
    - 小程序中所有页面都必须在pages中进行注册
  2. window: Object 非必填，指定窗口如何展示
  3. tabBar: Object 非必填，指定底部tab栏如何展示
4. page.json：页面配置
## 小程序其他知识点
1. 小程序的双线程模型
  - 小程序的宿主环境：微信客户端
  - wxml模块和wxss样式运行于渲染层，渲染层使用WebView线程渲染(一个程序有多个页面，会使用多个WebView的线程)
  - js脚本运行于逻辑层，逻辑层使用jscore运行js脚本
  - 这两个线程都会经由微信客户端（Native）进行中转交互。
2. 界面渲染整体流程
  1. 在渲染层，宿主环境会把wxml转化成对应的js对象
  2. 将js对象转成真实DOM树，交由渲染层线程渲染
  3. 数据变化时，逻辑层提供最新的变化数据，js对象发生变化比较进行diff算法对比
  4. 将最新变化的内容反映到真实的DOM树中，更新UI
3. 小程序启动流程
  1下载小程序包-->2启动小程序-->3加载解析app.json-->4注册App()-->5.1执行App生命周期
  4注册-->5.2加载自定义组件代码注册自定义组件-->6.1加载解析page.json
  5.2加载自定义组件代码注册自定义组件-->6.2渲染层加载渲染page.wxml
  5.2加载自定义组件代码注册自定义组件-->6.3逻辑层注册Page()-->7执行Page生命周期
4. 注册App时一般会做的事情
  1. 判断小程序的进入场景
    - 常见场景：聊天会话中打开，小程序列表中打开，微信扫一扫打开，另一个小程序打开
    - 确定场景：在onLaunch和onShow生命周期回调函数中，会有options参数，其中有scene值--场景对应代码
  2. 监听生命周期函数，在生命周期函数中执行对应业务逻辑，如：在某个生命周期函数中获取微信用户信息
  3. 因为App()实例只有一个，并且是全局共享的(单例对象), 所以可以将一些共享数据放在此处。
5. 注册Page页面时会做的事情
  1. 在生命周期函数中发送网络请求，从服务器获取数据
  2. 初始化一些数据
  3. 监听wxml中的事件，绑定对应事件函数
  4. 其他一些监听(如 页面滚动，上拉刷新，下拉加载更多等)


Object.defineProperty Vue能够动态监听data的变化的核心
data发生变化界面同时会刷新

小程序改变data界面不会刷新，需要通过this.setData()