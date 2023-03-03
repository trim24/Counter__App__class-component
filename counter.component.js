import React, { Component } from 'react';
import Button from './button.component';
class Counter extends Component {
    
    render() {
        return (
            <div className="d-flex">
                <Button
                    event={()=>this.props.onReset(this.props.index)}
                    className='btn btn-success mx-3'
                    text='Reset'
                />

                <Button
                    event={()=>this.props.onDecrement(this.props.index)}
                    className='btn btn-warning mx-3'
                    disabled={this.props.number === 0}
                    text='Decrement'
                />

                <h2 className="my-2">value{this.props.number}</h2>

                <Button
                    event={()=>this.props.onIncrement(this.props.index)}
                    className='btn btn-danger mx-3'
                    text='Increment'
                />

                <Button
                    event={()=>this.props.onDelete(this.props.index)}
                    className='btn btn-danger mx-3'
                    text='Delete'
                />
            </div>
        );
    }
}

export default Counter;