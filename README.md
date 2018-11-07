# xd_writings

#### 项目介绍
校点投稿前端react+typeScript构建

#### 软件架构
软件架构说明


#### 安装教程

1. npm i 
2. npm run start   启动 webpack-dev-server
3. npm run dev 开发环境打包
4. npm run build  生产环境打包

## 目录结构
``` bash
    |   |   |-- src                                   源码
    |   |   |   |-- assets                            资源目录
    |   |   |   |-- components                        展示组件
    |   |   |   |-- containers                        容器组件
    |   |   |   |-- store                             mobx状态
    |   |   |   |-- index.html                        html模板
    |   |   |   |-- index.tsx                         入口文件
    |   |   |   |-- routers.tsx                       路由
    |   |   |-- package.json                          命令配置 
    |   |   |-- README.md                              
    |   |   |-- tsconfig.json                         ts配置                              
    |   |   |-- webpack.config.js                     webpack 端口 代理
    |-- test                                          测试代码
    
    |-- package.json                                  项目依赖模块在这个位置 所app通用
```


脚本语言：typescript：
    javascript超集，最新ECMAScript规范，类型检查，推断，定以接口，泛型编程。可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上、
    TypeScript从与数百万JavaScript开发人员今天所知的相同语法和语义开始。使用现有的JavaScript代码，合并流行的JavaScript库，并从JavaScript调用TypeScript代码。
    类型使JavaScript开发人员能够在开发JavaScript应用程序时使用高效的开发工具和实践，如静态检查和代码重构。
    类型是可选的，类型推断允许一些类型注释对代码的静态验证产生重大影响。类型允许您定义软件组件之间的接口，并深入了解现有JavaScript库的行为。
    TypeScript支持最新和不断发展的JavaScript功能，包括来自ECMAScript 2015的功能以及未来的提议，如异步功能和装饰器，以帮助构建强大的组件。
    这些功能在开发时可用于高可信度应用程序开发，但可编译为针对ECMAScript 3（或更新）环境的简单JavaScript。


框架：react+mobx+react-router   （
    react ：React使得创建交互式UI变得轻而易举。为应用程序中的每个状态设计简单视图，当数据发生变化时，React将有效地更新和呈现正确的组件。
    声明性视图使您的代码更易于预测且更易于调试。
    构建管理自己状态的封装组件，然后组合它们以制作复杂的UI。
    由于组件逻辑是用JavaScript而不是模板编写的，因此您可以轻松地通过应用程序传递丰富的数据，并将状态保持在DOM之外。
    不会技术堆栈的其余部分做出假设，因此您可以在React中开发新功能而无需重写现有代码。
    React还可以使用Node和使用React Native的移动应用程序在服务器上呈现。

    mobx ：MobX 是一个经过战火洗礼的库，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。MobX背后的哲学很简单:
    任何源自应用状态的东西都应该自动地获得。
    其中包括UI、数据序列化、服务器通讯，等等。
    React 和 MobX 是一对强力组合。React 通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而MobX提供机制来存储和更新应用状态供 React 使用。
    对于应用开发中的常见问题，React 和 MobX 都提供了最优和独特的解决方案。React 提供了优化UI渲染的机制， 这种机制就是通过使用虚拟DOM来减少昂贵的DOM变化的数量。MobX 提供了优化应用状态与 React 组件同步的机制，这种机制就是使用响应式虚拟依赖状态图表，它只有在真正需要的时候才更新并且永远保持是最新的。


    react-router   组件是React强大的声明性编程模型的核心。React Router是一组导航组件，它们与您的应用程序以声明方式组合。无论您是希望为Web应用程序设置可收藏的URL还是在React Native中导航的可组合方式，React Router都可以在React渲染的任何地方工作 
）

ui库：antd-mobile   
    服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。基于 Ant Design 设计语言，提供了一套开箱即用的高质量 React 组件，用于开发和服务于企业级中后台产品，除官方的 React 实现，还有 Angular、Vue 的实现

运行结果：
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/E82D10DD76B78E241331D7D9EC6A2EF5.png)
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/4820663C9D2FB89150E2F760D6301CFB.png)
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/4DC0B6E6D87A9F773D7AB5D4A1606824.png)
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/92E4C489B63062FE84C3847DA7C548F5.png)
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/C7BCB991D57697C68B0ECB24E5266A00.png)
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/D95C8133568664CC768E9F244C9EF8BF.png)
 ![image](https://github.com/tulaoda/xd_writings/blob/master/source/39EA9358CC2D9E05B35C89EFEB2A2EDF.png)