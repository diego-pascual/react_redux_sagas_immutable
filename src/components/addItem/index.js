import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/actions/todo';

class AddItem extends Component {
    
    constructor(props){
        super();
        this.state = {item : ""};
        this.onClickAddItem = this.onClickAddItem.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }
    
    onClickAddItem(){
        const {onAdd} = this.props;
        const {item} = this.state;
        onAdd(item);
    }

    onHandleChange(e){
        this.setState({item : e.target.value});
    }

    render() {
        const {lastItem} = this.props;
        let {item} = this.state;

        return (
            <div>
                <div><span>Last added: {lastItem}</span></div>
                <div>
                    <input name="add-item" value={item} onChange={this.onHandleChange}/>
                    <button onClick={this.onClickAddItem}>Add</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    lastItem: state.todo.get('lastItem')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAdd: (item) => dispatch(addItem(item))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);