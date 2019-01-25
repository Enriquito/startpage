import React, { Component } from 'react';
import QuickItem from './QuickItem';

class App extends Component {

    render() {
        return (
            <section>
                <h1 className="tab-name">{this.props.group}</h1>
                <div id="quick-item-wrapper" className="flex wrap center vertical-center">
                    {
                        this.props.data.map((link,i) => {
                            return(<QuickItem key={i} name={link.Name} url={link.Url} img={link.Image}/>);
                        })
                    }
                </div>
            </section>
        );
    }
}

export default App;
