import React from "react"
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
// import Layout from "../components/styles.scss"
import Image from "../components/image"
import SEO from "../components/seo"


// make Row alias for columns
const Row: React.FC = (props) => (
    <div className='columns'>
        {props.children}
    </div>
)

// make Col alias for column
const Col: React.FC = (props) => (
    <div className='column'>
        {props.children}
    </div>
)


const IndexPage: React.FC<PageProps> = ({ data, path }) => (
    <>
    <SEO title="Using TypeScript" />
    <section className="hero is-primary">
    
    <div className="container">
    <Row>
        <Col>
            <h1 className="title"> Open Protein </h1>
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
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
        </div>
    </section>

    <section className="section">
    <Row>
        {/* <div className="hero-body">
            <div className="container">
            <h1 className="title is-1 is-bold is-spaced"> Open Protein </h1>
            <h2 className="subtitle"> Text </h2>
            </div>
        </div> */}

        {/* <figure className="image is-2721×1840"> */}
        <figure className="image is-2721×1840">
            <img src="src/images/examplemodelrun.png"></img>
        </figure>
    
        <h1 className="title"> Next Generation Protein Simulation </h1>
        <p> OpenProtein is a new machine learning framework for modeling tertiary protein structure. Built on top of PyTorch, NGL Viewer and ProteinNet, it offers automatic differentiation, visualisation, built-in data sets and much more. </p>
        <div className="card-footer-item">
            <a href="https://github.com/biolib/openprotein" className="button is-primary">
                <p> OpenProtein on Github </p>
            </a>
        </div>

        {/* <Link to="https://github.com/biolib/openprotein">OpenProtein on Github</Link> */}
        <p></p>
        <hr/>
        <h2>Meet OpenProtein</h2>
        <p>We introduce a new machine learning framework, OpenProtein, for prediction of tertiary protein structure. The framework is based upon PyTorch and utilizes NGL Viewer for live visualization of the protein as it folds. OpenProtein parses the ProteinNet data set (derived from previous CASP competitions) directly using a memory efficient data loader and supports a wide range of features including built-in embedding, automatic differentiation and performance plotting.</p>
        <h3>Fast Iteration</h3>
        <p>We know how important quick iteration speed is in research. OpenProtein gives you feedback on your model changes in seconds.</p>
        <h3>GPU Compatible</h3>
        <p>All OpenProtein models are GPU compatible by default and the framework's custom PyTorch data loaders are optimized for memory efficiency.</p>
        <p></p>
        <h3>Automatic Training</h3>
        <p>Simply focus on designing your model (in many cases less than 50 lines of code!) and the framework will handle the rest for you, including training and validation.</p>
        <p></p>
        <h2>Stay in the know</h2>
        <p>Join the mailing list and get notified when a new version of OpenProtein is released</p>
        {/* <Link to="/early_access/"><button> Get early access </button></Link> */}
        <div className="card-footer-item">
            <a href="/early_access/" className="button is-primary">
                <p> Get early access </p>
            </a>
        </div>
        <p></p>
        <h3>Frequently Asked Questions</h3>
        <h4>Is this yet another structure prediction tool?</h4>
        <p>Quite the opposite in fact - OpenProtein is a framework for creating, training and evaluating models for protein structure prediction. It can be used to improve existing models too!</p>
        <h4>What dependencies do I need to run OpenProtein?</h4>
        <p>Open Protein runs in any Python 3 environment with PyTorch installed. A GPU is recommended, but not required.</p>
        <h4>How do I contribute to OpenProtein?</h4>
        <p>Simply create a pull request in the project's Github repository at <Link to="https://github.com/OpenProtein/openprotein">https://github.com/OpenProtein/openprotein</Link></p>
    </Row>
    </section>


    {/* </Layout> */}

    </>
)

// <Link to="/page-2/">OpenProtein on Github</Link>


export default IndexPage
