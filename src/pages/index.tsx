import React from "react";
import { Link, PageProps, graphql } from "gatsby";

import Layout from "../components/layout";
// import Layout from "../components/styles.scss"
// import Image from "../components/image";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Row, Col } from "../components/utils";

// The React.Component is defined like so:
// interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }
// so we need to pass it alternative agruments to allow isOpen

// headText : String, bodyText : String
// class Accordion extends React.Component<{}, { isOpen : Boolean}> {

interface IProps {
    headText: string;
    bodyText: string;
 }
 interface IState {
   isOpen: boolean;
 }

class Accordion extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    // attribute? to access for opening accordion
    this.state = {
      isOpen: false
    };
  }

  handleClick(){
    this.setState({
      isOpen: !this.state.isOpen
      });
  }
  public render(){
    return(
      <article className={`accordion ${this.state.isOpen ? "is-active is-danger" : ""}`} onClick={()=>this.handleClick()}>
      <div className="accordion-header toggle">
        <p> {this.props.headText} </p>
      </div>
      <div className="accordion-body">
        <div className="accordion-content">
          {this.props.bodyText}
        </div>
      </div>
    </article>
    )
  }
}

// const IndexPage: React.FC<PageProps> = ({ data, path }) => (
class IndexPage extends React.Component {
  public render() {
    const data = this.props.data;
    return (
      <>
        <SEO title="Using TypeScript" />
        <section className="hero is-primary">
          <div className="container">
            <Row>
              <Col>
                <h1> Open Protein </h1>
                {/* <p> text 1 </p> */}
              </Col>
              {/* <Col>
          <h1 className="title"> Open Protein 2 </h1>
          <p> text 2 </p>
      </Col> */}
            </Row>
          </div>

          {/* <div className="container">
  <Row>
      <Col>
          <h1 className="title"> Open Protein 3</h1>
          <p> text 3 </p>
      </Col>
  </Row>
  </div> */}
        </section>

        <section className="section">
          <div className="container">
            <Row>
              <Col>
                <h1 className="title">Next Generation Protein Simulation</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="subtitle">
                  <strong> OpenProtein </strong> is a new machine learning
                  framework for{" "}
                  <strong>modeling tertiary protein structure</strong>. Built on
                  top of PyTorch, NGL Viewer and ProteinNet, it offers{" "}
                  <strong>
                    automatic differentiation, visualisation, built-in data sets
                  </strong>{" "}
                  and much more.
                </h2>
                <a
                  href="https://github.com/OpenProtein/openprotein"
                  className="button is-link"
                >
                  OpenProtein on Github
                </a>
              </Col>
              <Col>
                <Img fixed={data.file.childImageSharp.fixed} />
              </Col>
            </Row>
            <Row></Row>
          </div>

          {/* <a href="https://github.com/OpenProtein/openprotein" className="button is-primary"> OpenProtein on Github</a> */}
        </section>

        <section className="section">
          <Col>
            <section className="section">
              <div className="container">
                <h1 className="title">Meet OpenProtein</h1>
                <h2 className="subtitle">
                  We introduce a new machine learning framework, OpenProtein,
                  for prediction of tertiary protein structure. The framework is
                  based upon PyTorch and utilizes NGL Viewer for live
                  visualization of the protein as it folds. OpenProtein parses
                  the ProteinNet data set (derived from previous CASP
                  competitions) directly using a memory efficient data loader
                  and supports a wide range of features including built-in
                  embedding, automatic differentiation and performance plotting.
                </h2>
              </div>
            </section>
          </Col>
          <Col>
            <section className="section">
              <div className="container">
                <h1 className="title">Fast Iteration</h1>
                We know how important quick iteration speed is in research.
                OpenProtein gives you feedback on your model changes in seconds.
              </div>
            </section>
          </Col>
          <Col>
            <section className="section">
              <div className="container">
                <h1 className="title">GPU Compatible</h1>
                All OpenProtein models are GPU compatible by default and the
                framework's custom PyTorch data loaders are optimized for memory
                efficiency.
              </div>
            </section>
          </Col>
          <Col>
            <section className="section">
              <div className="container">
                <h1 className="title">Automatic Training</h1>
                Simply focus on designing your model (in many cases less than 50
                lines of code!) and the framework will handle the rest for you,
                including training and validation.
              </div>
            </section>
          </Col>
          <Row>
            <Col>
              <section className="section">
                <div className="container">
                  <h1 className="title">Stay in the know</h1>
                  Join the mailing list and get notified when a new version of
                  OpenProtein is released
                </div>
              </section>
              <section className="section">
                <div className="card-footer-item">
                  <a href="/early_access/" className="button is-primary">
                    <p> Get early access </p>
                  </a>
                </div>
              </section>
            </Col>
          </Row>
          <Row>
            {/* <Link to="/early_access/"><button> Get early access </button></Link> */}
          </Row>
          <Row>
            <section className="section">
            </section>
          </Row>
        </section>
        
        <h3 className="title">Frequently Asked Questions</h3>
        <section className="accordions">
          <Accordion headText="Is this yet another structure prediction tool?" bodyText="Quite the opposite in fact - OpenProtein is a framework for
                  creating, training and evaluating models for protein structure
                  prediction. It can be used to improve existing models too!"/>
          {/* <article className={`accordion ${true ? "is-active is-danger" : ""}`}> */}
          <Accordion headText="What dependencies do I need to run OpenProtein?"
          bodyText="Open Protein runs in any Python 3 environment with PyTorch installed. A GPU is recommended, but not required."/>
          <Accordion headText="How do I contribute to OpenProtein?"
          bodyText="Simply create a pull request in the project's Github
                  repository at https://github.com/OpenProtein/openprotein"/>
          {/* bodyText="Simply create a pull request in the project's Github
                   repository at{" "}
                   <Link to='https://github.com/OpenProtein/openprotein'>
                     https://github.com/OpenProtein/openprotein
                   </Link>" /> */}

        </section>

        {/* </Layout> */}
      </>
    );
  }
}

// class Image extends React.Component {
//   render() {
//     const data = this.props.data;

//     console.log(this.props);

//     return (
//       <Layout>
//         <Img fixed={data.file.childImageSharp.fixed} />
//       </Layout>
//     );
//   }
// }

// <Link to="/page-2/">OpenProtein on Github</Link>

export default IndexPage;

// examplemodelrun.png original size
//fixed(width: 2721, height: 1840)
// (width: 680, height: 460)
export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "examplemodelrun.png" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed(width: 340, height: 230) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

// ReactDOM.render(
//   document.getElementById('root')
// );
