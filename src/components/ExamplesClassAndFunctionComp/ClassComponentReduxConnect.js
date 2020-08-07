import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class ClassComponentReduxConnect extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ClassComponentReduxConnect);