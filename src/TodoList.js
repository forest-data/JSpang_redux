import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index.js'  // 等价于import store from './store


// const data = [
//     '早8点开晨会，分配今天的代码任务',
//     '早9点和项目经理开需求沟通会',
//     '早9点和项目经理开需求沟通会'
// ]

class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        //订阅模式 > 处理input中的value
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange = {this.changeInputValue}  
                        value = {this.state.inputValue}  
                    />
                    {/* <Input placeholder='Write Something' style={{ width: '250px', marginRight:'10px' }} /> */}
                    <Button type='primary' > 增加 </Button>
                    <div style={{ margin: '10px', width: '300px' }}>
                        <List
                            bordered
                            // dataSource={data}
                            dataSource={this.state.list}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        ></List>
                    </div>
                </div>
            </div>
        );
    }

    changeInputValue(e){
        // console.log(e.target.value)
        const action = {
            type: 'changeInput',  //这个action是什么东西
            value: e.target.value //改变成什么值
        }
        store.dispatch(action) // store 就相当于一个仓库
    }

    storeChange(){
        this.setState(store.getState())
    }

}

export default TodoList;