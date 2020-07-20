import React from "react";
import { Link, PageProps, graphql, StaticQuery } from "gatsby";
import Modal from "../components/modal";
import ExampleModelRun from "./examplemodelrun";
import GDPR from "./gdpr";

import Layout from "../components/layout";
// import Layout from "../components/styles.scss"
// import Image from "../components/image";
import SEO from "../components/seo";
// when importing the default export of a file, you can import it as any name you wish
import GatsbyImage from "gatsby-image";
// when importing non-defult exports, you must access them by their identifier
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
      isOpen: false,
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  public render() {
    return (
      <article
        className={`accordion ${this.state.isOpen ? "is-active " : ""}`}
        onClick={() => this.handleClick()}
      >
        <div className="accordion-header toggle is-link">
          <p> {this.props.headText} </p>
          <button className="toggle" aria-label="toggle"></button>
        </div>
        <div className="accordion-body">
          <div className="accordion-content">{this.props.bodyText}</div>
        </div>
      </article>
    );
  }
}

// const IndexPage: React.FC<PageProps> = ({ data, path }) => (
class IndexPage extends React.Component<
  { examplerun: any; gdpr: any },
  { modalState: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  public render() {
    const data = this.props.data;
    return (
      <>
        <SEO title="Using TypeScript" />
        <div className="container">
          <section className="hero is-primary">
            {/* this container centers the text */}
            <div className="container">
              <Row>
                <Col>
                  <h1> Open Protein </h1>
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
              <h1 className="title">Next Generation Protein Simulation</h1>
              <Row>
                <Col>
                  <h2 className="subtitle">
                    <strong> OpenProtein </strong> is a new machine learning
                    framework for{" "}
                    <strong>modeling tertiary protein structure</strong>. Built
                    on top of PyTorch, NGL Viewer and ProteinNet, it offers{" "}
                    <strong>
                      automatic differentiation, visualisation, built-in data
                      sets
                    </strong>{" "}
                    and much more.
                  </h2>
                  {/* <a
                    href="https://github.com/OpenProtein/openprotein"
                    className="button is-link"
                  >
                    OpenProtein on Github
                  </a> */}
                </Col>
                {/* "is-four-fifths" */}
                <Col>
                  <ExampleModelRun />
                  {/* <GatsbyImage fixed={this.props.examplerun.childImageSharp.fixed} /> */}
                </Col>
                {/* this centers the button */}
              </Row>
              <Row>
              <div className="card-footer-item">
                {/* use <Link/> instead of <a/> for internal sites, so gatsby can preload content */}
                <a href="https://github.com/OpenProtein/openprotein">
                  <button className="button is-link is-large modal-button">
                    {" "}
                    OpenProtein on GitHub
                  </button>
                </a>
              </div>
              </Row>
            </div>

            {/* <a href="https://github.com/OpenProtein/openprotein" className="button is-primary"> OpenProtein on Github</a> */}
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title is-centered">Meet OpenProtein</h1>
              <h2 className="subtitle">
                We introduce a new machine learning framework, OpenProtein, for
                prediction of tertiary protein structure. The framework is based
                upon PyTorch and utilizes NGL Viewer for live visualization of
                the protein as it folds. OpenProtein parses the ProteinNet data
                set (derived from previous CASP competitions) directly using a
                memory efficient data loader and supports a wide range of
                features including built-in embedding, automatic differentiation
                and performance plotting.
              </h2>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Fast Iteration</h1>
              <h2 className="subtitle">
                We know how important quick iteration speed is in research.
                OpenProtein gives you feedback on your model changes in seconds.
              </h2>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">GPU Compatible</h1>
              All OpenProtein models are GPU compatible by default and the
              framework's custom PyTorch data loaders are optimized for memory
              efficiency.
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Automatic Training</h1>
              Simply focus on designing your model (in many cases less than 50
              lines of code!) and the framework will handle the rest for you,
              including training and validation.
            </div>
          </section>
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
                {/* this centers the button */}
                <div className="card-footer-item">
                  {/* use <Link/> instead of <a/> for internal sites, so gatsby can preload content */}
                  <Link
                    to="/early_access/"
                    className="button is-primary is-large"
                  >
                    {" "}
                    Get early access
                  </Link>
                </div>
              </section>
            </Col>
            <Col>
              <section className="section">
                <div className="container">
                  <h1 className="title">Stay in the know</h1>
                  Join the mailing list and get notiffied when a new version of
                  OpenProtein is released
                </div>
              </section>
              <section className="section">
                {/* this centers the button */}
                <div className="card-footer-item">
                  {/* use <Link/> instead of <a/> for internal sites, so gatsby can preload content */}

                  <button className="button is-primary is-large modal-button">
                    {" "}
                    Get early access
                  </button>
                  <a
                    className="button is-primary is-large"
                    onClick={this.toggleModal}
                  >
                    Get early access
                  </a>

                  <Modal
                    closeModal={this.toggleModal}
                    modalState={this.state.modalState}
                    title="Let's stay connected!"
                  >
                    <div className="field">
                      <label className="label">
                        Subscribe to our mailing list{" "}
                      </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g. johndoe@gmail.com"
                      />
                    </div>
                    <div className="field">
                      <div className="control">
                        <label className="checkbox">
                          <input type="checkbox" />
                          &nbsp;I agree to the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                      </div>
                    </div>
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
                    <h5 className="subtitle">Marketing Permissions</h5>
                    You can unsubscribe at any time by clicking the link in the
                    footer of our emails. For information about our privacy
                    practices, please visit our website.
                    <p></p>
                    <Row>
                      <Col name="is-10">
                        <GDPR />
                      </Col>
                      <Col>
                        We use Mailchimp as our marketing platform. By clicking
                        below to subscribe, you acknowledge that your
                        information will be transferred to Mailchimp for
                        processing.{" "}
                        <a href="https://mailchimp.com/legal/" target="_blank">
                          Learn more about Mailchimp's privacy practices here.
                        </a>
                      </Col>
                    </Row>
                    <div className="card-footer-item">
                      <a className="button is-primary is-large"> Subscribe </a>
                    </div>
                  </Modal>
                </div>
              </section>
            </Col>
          </Row>
          {/* <Row props.name="is-centered">
          </Row> */}

          <section className="section">
            <div className="card-footer-item">
              <Row is-name>
                <Col>
                  <section className="section is-narrow">
                    <h3 className="title">Frequently Asked Questions</h3>
                    <section className="accordions">
                      <Accordion
                        headText="Is this yet another structure prediction tool?"
                        bodyText="Quite the opposite in fact - OpenProtein is a framework for
                  creating, training and evaluating models for protein structure
                  prediction. It can be used to improve existing models too!"
                      />
                      {/* <article className={`accordion ${true ? "is-active is-danger" : ""}`}> */}
                      <Accordion
                        headText="What dependencies do I need to run OpenProtein?"
                        bodyText="Open Protein runs in any Python 3 environment with PyTorch installed. A GPU is recommended, but not required."
                      />
                      <Accordion
                        headText="How do I contribute to OpenProtein?"
                        bodyText="Simply create a pull request in the project's Github
                  repository at https://github.com/OpenProtein/openprotein"
                      />
                      {/* bodyText="Simply create a pull request in the project's Github
                   repository at{" "}
                   <Link to='https://github.com/OpenProtein/openprotein'>
                     https://github.com/OpenProtein/openprotein
                   </Link>" /> */}
                    </section>
                  </section>
                </Col>
              </Row>
            </div>
          </section>
        </div>
        {/* </Layout> */}
      </>
    );
  }
}

class App extends React.Component<{}, { modalState: boolean }> {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="has-text-centered content">
            <h1 className="title">React + Bulma modal example</h1>
            <hr />
            <a className="button is-primary" onClick={this.toggleModal}>
              Open Modal
            </a>
          </div>

          <Modal
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
            title="Subscribe to our mailing list"
          >
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
          </Modal>
        </div>
      </section>
    );
  }
}

// export default App;
export default IndexPage;

// examplemodelrun.png original size
//fixed(width: 2721, height: 1840)
// (width: 680, height: 460)
// export const pageQuery = graphql`
//   query {

// class MyQuery extends React.Component<{}, { isSignedIn: boolean }>;

// export IndexPage extends React.Component(props: { isSignedIn: boolean }) => (
//   <StaticQuery
//       query={graphql`
//          query {
//         examplerun: file(relativePath: { eq: "examplemodelrun.png" }) {
//           childImageSharp {
//             # Specify a fixed image and fragment.
//             # The default width is 400 pixels
//             fixed(width: 340, height: 230) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//         gdpr: file(relativePath: { eq: "https://cdn-images.mailchimp.com/icons/mailchimp-gdpr.svg" }) {
//           childImageSharp {
//             # Specify a fixed image and fragment.
//             # The default width is 400 pixels
//             fixed(width: 340, height: 230) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }`
//     }
//     render={(data: any) => (
//       <p/>
//     )}
// );

// ReactDOM.render(
//   document.getElementById('root')
// );
