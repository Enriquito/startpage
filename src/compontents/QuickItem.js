import React, { Component } from 'react';

class QuickItem extends Component {
    render() {
        return (
            <div className="quick-link">
                <a href={this.props.url} target="_blank">
                    <figure>
                        <img src={this.props.img} alt={this.props.name} />
                        <figcaption>{this.props.name}</figcaption>
                    </figure>
                </a>
            </div>
        );
    }
}

export default QuickItem;
