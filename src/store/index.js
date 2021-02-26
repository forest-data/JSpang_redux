// 仓库管理文件   类似图书馆
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    ) // 可以生成store

export default store