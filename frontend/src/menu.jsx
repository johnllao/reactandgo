import React from 'react'

export class Menu extends React.Component {
    render() {
        return (
            <div className="cell">
                <div className="menu">
                    <ul>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Products</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}