import React, { Component } from 'react';
import Google from '../images/google.png';
import DDG from '../images/ddg.png';
import Youtube from '../images/yt.png';

class QuickItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            "SearchEngine" : "google"
        }
    }


    Search(evnt){
        if(evnt.keyCode === 13)
        {
            const val = evnt.target.value;
            evnt.target.value = "";

            switch(this.state.SearchEngine){
                case "google":
                    window.open(`https://www.google.com/search?q=${val}`, "_blank");
                    break;
                case "ddg":
                    window.open(`https://duckduckgo.com/?q=${val}`, "_blank");
                    break;
                case "youtube":
                    window.open(`https://www.youtube.com/results?search_query=${val}`, "_blank");
                    break;
                default:
                    window.open(`https://www.google.com/search?q=${val}`, "_blank");
                    break;
            }

            window.open(`https://www.google.com/search?q=${val}`, "_blank");
        }
    }

    ChangeSearchEngine(){
        const el = document.getElementById("engine-logo");
        const input = document.getElementById("search-bar");

        switch(this.state.SearchEngine){
            case "google":
                    el.src = DDG;
                    input.placeholder = "Search Duck Duck Go";
                    this.setState({SearchEngine : "ddg"});
                break;
            case "ddg":
                el.src = Youtube;
                input.placeholder = "Search Youtube";
                this.setState({SearchEngine : "youtube"});
                break;
            case "youtube":
                el.src = Google;
                input.placeholder = "Search Google";
                this.setState({SearchEngine : "google"});
                break;
            default:
                el.src = Google;
                input.placeholder = "Search Google";
                this.setState({SearchEngine : "google"});
                break;
        }
    }

    render() {
        return (
            <div style={{position: "relative", "margin": "10px"}}>
                <img title="Click to change search engine." onClick={this.ChangeSearchEngine.bind(this)} id="engine-logo" className="search-engine-image" src={Google} />
                <input id="search-bar" placeholder="Search Google" type="search" onKeyUp={this.Search.bind(this)}/>
            </div>
        );
    }
}

export default QuickItem;
