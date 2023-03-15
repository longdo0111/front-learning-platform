import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dard bg-dark">
                        <div><a className="navbar-brand" href="https://www.linkedin.com/in/daniel-do-093a9923/" target="_blank">Linked Profile</a></div>
                        <div><a className="navbar-barnd">Write from Dictation</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent;