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

// interface IRowCol{
//   name: string
// }

interface IWelcomeProps {
  name?: string;
}

// had to rewrite as class methods not available for export
// make Row alias for columns
export const Row: React.FC<IWelcomeProps> = (props) => (
  // backticks work like f-strings in python
  // || `` is an alternative to using props.name, for when you don't pass a name. without this, it will pass 'undefined' as a string
  <div className={`columns is-mobile ${props.name || ``}`}>
    {props.children}
  </div>
);

// make Col alias for column
export const Col: React.FC<IWelcomeProps> = (props) => (
  <div className={`column ${props.name || ``}`}>{props.children}</div>
);

// // export default Utils;
// export function Row;
// export function Col;

/////////// playground

// const -> immutable (but arrays can still be popped/extended, just not overwritten)
// let -> mutable

// import ReactDOM from 'react-dom';

const Welcome: React.FC<IWelcomeProps> = (props) => (
  <h1>Hello, {props.name}</h1>
);

// // identical to above syntax?
// function Welcome<IWelcomeProps>(props){
//   return (
//     <h1>Hello, {props.name}</h1>
//   )
// }
