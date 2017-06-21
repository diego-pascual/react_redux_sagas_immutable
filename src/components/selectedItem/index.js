import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const SelectedItem = ({item})=>{
    if (item)
    return (
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
        </div>
    )
    else
    return (<div>None selected!!</div>);
}

SelectedItem.propTypes = {
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) =>{
  return {
    item: state.todo.get('selectedItem')
  }
};

export default connect(mapStateToProps, null)(SelectedItem);