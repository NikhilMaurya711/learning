import React from "react";
import ReactDom from "react-dom";
import Accordion from "./Accordion";

const items = [
    {
        title: "what is React?",
        content: 'React is FE jS FW'
    },
    {
        title: "why uss React",
        content: 'it is jS FW'
    },
    {
        title: "How do we use React",
        content: 'You use React by creating components'
    },

]
class App extends React.Component{


    render(){
        return(
            <div>Widget App
                <Accordion items={items} />
            </div>
        )
    }
}

export default App;