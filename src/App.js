import React, { Component } from 'react';
import LinkSection from './compontents/LinkSection';
import Search from './compontents/Search';
import "./App.css";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            Links : null
        }
    }

    componentDidMount(){
        fetch('/links.json').then(
            response => response.json()).then(
                res => {
            this.setState({Links : res.Links})
        });
    }

  render() {

    let links = null;

    if(this.state.Links != null){
        if(this.state.Links.length !== 0){
            links =  this.state.Links.map((l,i) => {
                return (<LinkSection key={i} data={l} group={l[0].Group} />);
            });
        }
    }
    else{
        links = <section className="error-messages-big"><h1>Error loading links.</h1></section>;
    }

    return (
      <main className="flex center vertical-center">
        <div>
          <section>
            <Search/>
          </section>
            {links}
        </div>
      </main>
    );
  }
}

export default App;
