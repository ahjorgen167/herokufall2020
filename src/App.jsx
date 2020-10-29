import React from 'react';
import { connect } from 'react-redux';
import IncrementButton from './IncrementButton';

class CounterApp extends React.Component {

    render() {

        const grid =
            [
                [1, 2, 3, 4],
                [2, 3, 4, 5],
                [6, 7, 8, 9]
            ]


        console.log(this.props);
        return (
            <div>

                {

                    grid.map((row) => <div>
                        
                            {row.map((cell) => <span>{cell}</span> )}
                        
                        </div>)
                }

                


            </div>
        );
    }

}



let mapDispatchToProps = function (dispatch, props) {
    return {
    }
};

// this guy isn't used here, but just reminding you of it's existence!
function mapStateToProps(state, props) {
    return {
        count: state.count,
        incrValues: state.incrValues
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterApp)
