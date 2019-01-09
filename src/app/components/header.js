import React from "react";
import PropTypes from 'prop-types'

export class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>Starting</h1>
                <div> this will be the { this.props.name } 's portafolio  </div>
            </div>
            
        );
    }
}
Header.propTypes = {
    name: PropTypes.string,
    song: PropTypes.string,
    person: PropTypes.object,
    children: PropTypes.element.isRequired
}