import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export class InterestingTopic extends Component {
    render() {
        return (
            <div className='intTopic'>
                <form>
                    <div className="form-group">
                        <label htmlFor="intTop">TOP 10 interesting topics</label>
                        <ListGroup className='scrollMenu'>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                      </ListGroup>
                    </div>
                </form>
            </div>
        );
    }
}

