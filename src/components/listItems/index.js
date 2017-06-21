import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteItem, selectItem} from '../../redux/actions/todo';

class ListItems extends Component {
    render() {
        const { items, onSelect, onDelete } = this.props;
        if (items.length===0)
            return (<div>Loading...</div>);
        else
            return (
                <ul>
                    {
                        items.map((item, i) => {
                            return (
                                <li key={i}>
                                    {[item.id, item.name + ' '].join(' - ')}
                                    <button onClick={() => { onSelect(item) }}>Select</button>
                                    <button onClick={() => { onDelete(item.id) }}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            );
    }
}

ListItems.propTypes = {
    items: PropTypes.array.isRequired 
};

const mapStateToProps = (state, ownProps) =>{
  return {
    items: state.todo.get('items')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: (id) => dispatch(deleteItem(id)),
    onSelect: (item) => dispatch(selectItem(item))
});

export default connect(mapStateToProps,mapDispatchToProps)(ListItems);