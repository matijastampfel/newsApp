import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export class Region extends Component {
    render() {
        return (
            <div className='region'>
                <form>
                    <div className="form-group">
                        <label htmlFor="region">Regions</label>
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

