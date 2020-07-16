import React from "react";
import { Link, PageProps } from "gatsby";

import Layout from "../components/layout"; // defines a footer with Gatsby and year use <Layout/>
import Image from "../components/image";
import SEO from "../components/seo";

//import "../components/styles.scss"
import { Row, Col } from "../components/utils";

// type DataProps = {
//   site: {
//     buildTime: string;
//   };
// };

class EarlyAccess extends React.Component {
  public render() {
    //const data = this.props.data;
    return (
      <>
        <SEO title="Using TypeScript" />
        {/* this container centers the text */}
        <div className="container">
          <section className="hero is-primary">
            <div className="container">
              <Row>
                <Col>
                  <h1> Open Protein </h1>
                </Col>
              </Row>
            </div>
          </section>

          <Row>
            <Col>
              <h4 className="title"> Subscribe to our mailing list </h4>
              <p> email address </p>
              <input id="email" />
              <p>
                {" "}
                Please select all the ways you would like to hear from
                OpenProtein:{" "}
              </p>
              <label className="checkbox">
                <input type="checkbox" />
                {/* &nbsp; (non-breaking space) forces a space */}
                &nbsp; Email
              </label>
              {/* br = break = newline */}
              <br />
              <label className="checkbox">
                <input type="checkbox" />
                {/* &nbsp; forces a space */}
                &nbsp; Discord
              </label>
              {/* horizontal line */}
              <hr />
              <p></p>
              <h1 className="subtitle">Marketing Permissions</h1>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              visit our website.
              <p></p>
              <div className="card-footer-item">
                <a className="button is-primary is-large"> Subscribe </a>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

// const EarlyAccess: React.FC<PageProps<DataProps>> = ({ data, path }) => (
//   <Layout>
//     <section className="hero"></section>
//     <h4> Subscribe to our mailing list </h4>
//     <p> Please select all the ways you would like to hear from OpenProtein: </p>
//     <p> email address </p>
//     <hr />
//     <input id="email" />
//     <p></p>
//     <h4> Marketing permissions </h4>
//     You can unsubscribe at any time by clicking the link in the footer of our
//     emails. For information about our privacy practices, please visit our
//     website.
//     <p></p>
//     <button> Subscribe </button>
//   </Layout>
// );

export default EarlyAccess;
