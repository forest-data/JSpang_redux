# npm start 启动

# npm install antd --save
# yarn add antd
# cnpm


# 使用ant design, 首先得引入
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

# npm install -save redux

# 装 redux 调试的插件
Redux Devtools  在扩展中搜索 > 安装
配置在store/index.js中配置
const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
) // 可以生成store
也可以在github上找 redux-devtools-extension