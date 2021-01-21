import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './header.jsx'
import { Menu } from './menu.jsx'
import { Body } from './body.jsx'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Menu />
                    <Body />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))