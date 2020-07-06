import React from "react";

class Utils extends React.Component {
  // make Row alias for columns
  Row: React.FC = (props) => (
    <div className="columns is-mobile">{props.children}</div>
  );
  // make Col alias for column
  Col: React.FC = (props) => <div className="column">{props.children}</div>;
}

// had to rewrite as class methods not available for export
// make Row alias for columns
export function Row(props) {
  return <div className="columns is-mobile">{props.children}</div>;
}
// make Col alias for column
export function Col(props) {
  return <div className="column">{props.children}</div>;
}

export default Utils;
// export function Row;
// export function Col;
