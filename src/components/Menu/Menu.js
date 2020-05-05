import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            selectedTheme: ''
        }
    }
    handleChange = (e) => {
        console.log(e.target);
        
    }
    render() {
        return (
            <aside>
                <h1>What's New?</h1>
                <form>
                    <label><input type="radio" name="theme" value="local" checked onChange={this.handleChange} />Local</label>
                    <label><input type="radio" name="theme" value="entertainment" onChange={this.handleChange} />Entertainment</label>
                    <label><input type="radio" name="theme" value="health" onChange={this.handleChange} />Health</label>
                    <label><input type="radio" name="theme" value="science"onChange={this.handleChange} />Science</label>
                    <label><input type="radio" name="theme" value="technology" onChange={this.handleChange} />Technology</label>
                </form>
            </aside>
        )

    }
}

export default Menu;