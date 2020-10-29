// import React,{ useState } from 'react';
// import { useEffect } from 'react';


// export default (props) => {

//     const [text, setText] = useState(props.text);

//     function addExclamation() {
//         const newText = text + '!';
//         // console.log(newText)
//         // props.clickedFunc();
//         setText(newText);
//     }

//     useEffect(() => {
//         console.log(text);
//         props.clickedFunc();
//     }, [text]);

//     return (
//         <div onClick={() => addExclamation()}>{text}</div>
//     )

// }
// // export default class ColorfulWords extends React.Component {
// //     constructor(props) {
// //         super();
// //         this.state = {
// //             usefulWord: props.text
// //         }
// //     }

// //     render() {
// //         return (
// //             <div onClick={() => this.addExclamation()}>{this.state.usefulWord}</div>
// //         )
// //     }

// //     addExclamation() {
// //         let newText = this.state.usefulWord;
// //         newText = newText + '!';
// //         console.log(newText)
// //         this.props.clickedFunc();
// //         this.setState({
// //             usefulWord: newText
// //         })

// //     }
// // }