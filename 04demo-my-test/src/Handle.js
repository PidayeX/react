import React, {Component} from "react"
import _ from "lodash"

import PropTypes from "prop-types"

export default class Handle extends Component{
    constructor(){
        super();
        this.state = {
            name:""
        }
    }
    render(){
        return(
            <div className="handle">
				事件:<input ref="name" onChange={this.inputChange.bind(this,"name")} type="text" value={this.state.name} placeholder="请输入待办事件"/><br />
				<button onClick={this.addAction.bind(this)}>新增</button>
				
			</div>
        )
    }
    inputChange(flag){
        let val = this.refs[flag].value;
        let obj = {};
        obj[flag] = val;
        this.setState(obj);
    }
    addAction(){
        this.props.handleAdd({
            name:this.state.name
        })
        this.setState({
            name:""
        })
    }
}
Handle.proptypes = {
    handleAdd:PropTypes.func.isRequired
}