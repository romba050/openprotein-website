import React from "react";

// class Utils extends React.Component {
//   // make Row alias for columns
//   // synonymous with React.FunctionComponent
//   Row: React.FC = (props) => (
//     <div className="columns is-mobile">{props.children}</div>
//   );
//   // make Col alias for column
//   Col: React.FC = (props) => <div className="column">{props.children}</div>;
// }

// had to rewrite as class methods not available for export
// make Row alias for columns
export function Row(props) {
  return (
  <div className="columns is-mobile" {...props.name}>
    {props.children}
  </div>
  );
}
// make Col alias for column
export function Col(props) {
  return (
  <div className="column " {...props.name}>
    {props.children}
  </div>
  );
}


// // export default Utils;
// export function Row;
// export function Col;

/////////// playground

// const -> immutable (but arrays can still be popped/extended, just not overwritten)
// let -> mutable

// import ReactDOM from 'react-dom';

interface IWelcomeProps {
  name: string;
}

const Welcome: React.FC<IWelcomeProps> = (props) => (
  <h1>Hello, {props.name}</h1>
);

// // identical to above syntax?
// function Welcome<IWelcomeProps>(props){
//   return (
//     <h1>Hello, {props.name}</h1>
//   )
// }
