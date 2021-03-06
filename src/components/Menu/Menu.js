import React from 'react';
import './Menu.css'
import PropTypes from 'prop-types';

const Menu = (props) => {

    return (
        <aside>
            <h1>What's New?</h1>
            <form className="menu">
                <label style={{backgroundColor: props.selected === 'local' ? '#FFCAB1' : 'white'}}><input type="radio" name="theme" value="local" onChange={props.handleSelection} />Local</label>
                <label style={{backgroundColor: props.selected === 'entertainment' ? '#FFCAB1' : 'white'}}><input type="radio" name="theme" value="entertainment" onChange={props.handleSelection} />Entertainment</label>
                <label style={{backgroundColor: props.selected === 'health' ? '#FFCAB1' : 'white'}}><input type="radio" name="theme" value="health" onChange={props.handleSelection} />Health</label>
                <label style={{backgroundColor: props.selected === 'science' ? '#FFCAB1' : 'white'}}><input type="radio" name="theme" value="science"onChange={props.handleSelection} />Science</label>
                <label style={{backgroundColor: props.selected === 'technology' ? '#FFCAB1' : 'white'}}><input type="radio" name="theme" value="technology" onChange={props.handleSelection} />Technology</label>
            </form>
         </aside>
    )
}

Menu.propTypes = {
    selected: PropTypes.string,
    handleSelection: PropTypes.func
}

export default Menu;