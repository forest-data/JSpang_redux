
// 仓库管理员

const defaultState = {
    inputValue: 'Write Something',
    list: ['早8点开晨会，分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '早9点和项目经理开需求沟通会'],
    
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
    console.log(state, action) // state是原来的值， action是现在变化的值
    // Reducer 里只能接受state, 不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝
        newState.inputValue = action.value
        return newState
    }
    
    return state
}