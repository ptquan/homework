import React from 'react';

class TodoItem extends React.Component {
    render() {
        return <div> {this.props.title}</div>
    }
}

export default TodoItem;