import React from 'react';
import { connect } from 'react-redux';


class IncrementButton extends React.Component {


    render() {

        return (<button onClick={() => this.props.onClick() } >{this.props.value}</button>)

    }


}

let mapDispatchToProps = function (dispatch, props) {
    return {
        onClick: () => dispatch({
            type: "INCREMENT",
            value: props.value
        })
    }
};

// this guy isn't used here, but just reminding you of it's existence!
function mapStateToProps(state, props) {
    return {}
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IncrementButton)
