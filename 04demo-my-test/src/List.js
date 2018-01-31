import React, {Component} from "react"
import _ from "lodash"

import PropTypes from "prop-types"

export default class List extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="list">
                <table>
                    <tbody>
                        <tr>
                            <th>待办事件</th>
                            <th>操作</th>
                        </tr>
                        {
                            _.map(this.props.data,(item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <button onClick={this.deleteAction.bind(this,index)}>删除</button>
                                            <button>修改</button>
                                        </td>
                                    </tr>  
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    deleteAction(index){
        this.props.handleDelete(index);
    }
}

List.proptypes = {
    data:PropTypes.array.isRequired
}