import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    state = {
        text: ""
    }

    render = () => {
        return (
            <div className="App">
                <div className="Writer">
                    <form>
                        <h1>Writer mode</h1>
                        <textarea onChange={this.handleChange}/>
                    </form>

                </div>
                <div className="Tome">
                    <div className="Content">
                        {this.state.text
                            .split("\n\n")
                            .filter((paragraph: string) => { return paragraph.trim().length })
                            .map((paragraph: string) => {

                            if (paragraph.includes("barchart")) { // bartchart page
                                return <div className="Page Barchart">
                                    <div className="Box Text">
                                        <div className="Text">
                                            {paragraph.replace("@barchart", "")}
                                        </div>
                                    </div>
                                    <div className="Box Chart">
                                        <div className="Chart">
                                            <img src="images/barchart.png"/>
                                        </div>
                                    </div>
                                </div>

                            } else { // text page
                                return <div className="Page Box Text">
                                    <p className="Text">
                                        {paragraph}
                                    </p>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }

    handleChange = (event: any) => {
        console.log(event.target.value)
        this.update_tome(event.target.value)
    }

    update_tome = (text: string) => {
        this.setState({
            text: text
        });
    };
}

export default App;
