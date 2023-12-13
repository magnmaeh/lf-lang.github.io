import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageFeatures, {
  TwoColumns,
} from "@site/src/components/HomepageFeatures";
import { CodeContainer } from '@site/src/components/HomepageSlider';
import Logo from "@site/static/img/lf-logo.svg";

import styles from "./index.module.css";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
      {/* <CodeContainer className={styles.heroLogo} /> */}
        <Heading as="h1" className={styles.heroProjectTagline}>
        <Logo className={styles.heroLogo} height="200px" width="200px" role="img" />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "Build <b>time-sensitive</b>, <b>concurrent</b>, and <b>distributed</b> systems — <b>effortlessly</b>.",
                description:
                  "Home page hero title, can contain simple html tags",
              }),
            }}
          />
          {/* #78cc2a */}
        </Heading>
        
        <div className={styles.subHero}>
            <Translate>
            Lingua Franca (LF) allows you to write blazing-fast, deterministic,
            multi-threaded and distributed code without any knowledge about threads or synchronization.
            Focus on your application, not elusive concurrency bugs.
            </Translate>
        </div>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/installation">
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--info" to="/docs/Introduction">
            <Translate>Read the Docs</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=lf-lang&amp;repo=lingua-franca&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

const Intro = (): JSX.Element => (
  <TwoColumns
    col1={<CodeContainer className={styles.heroLogo} />}
    col2={
      <>
        <Heading as="h2">
          <Translate>A New Programming Paradigm</Translate>
        </Heading>
        <Translate>
          Lingua Franca is the first reactor-oriented coordination language.
          It allows you to specify reactive components and compose them.
          The Lingua Franca semantics eliminate race conditions by construction and provides a sophisticated model of time that includes a notion of simultaneity that is clear and precise.
        </Translate>
        <br/><br/>
        <Translate>
          Consider a game of "rock paper scissors" where two players need to reveal their choice at the same instant. Not only is this implementation in Lingua Franca simple and intuitive, it is guaranteed to be fair. If the Player class were to observe the other's choice before revealing its own, Lingua Franca's causality analysis would find a causality loop and tell you that the program was invalid.
        </Translate>
        <br/><br/>
        <Heading as="h2">
          <Translate>Not a New Programming Language</Translate>
        </Heading>
        <Translate>
          With Lingua Franca, you forget about thread libraries or message passing middlewares, but you can continue using the languages you like. The bodies of reactive code that make up the functionality
          of your reactors are written in the programming language of your choice. We currently support C, C++, Python, TypeScript, and Rust.
        </Translate>
      </>
    }
  />
);

import WorldMap from "@site/static/img/world-map.svg";

const Second = (): JSX.Element => (
  <TwoColumns
    col1={
      <>
        <Heading as="h2">
          <Translate>Open-source and Supported by Research</Translate>
        </Heading>
        <Translate>
          Lingua Franca was first developed at UC Berkeley where it was influenced by decades worth of research in models of computation.
        </Translate>
        <br/><br/>
        <Translate>
          Shortly after its inception, researchers from Kiel University and TU Dresden joined the team, contributing diagram synthesis and layout technology, highly-efficient runtime implementations, and various compiler improvements. Since then, we have worked with real-time systems experts from TU Dallas, embedded systems specialists from NTNU, and networking and security researchers from Hanyang University and ASU.
        </Translate>
        <br/><br/>
        <Link className="button button--info" to="https://github.com/lf-lang/lingua-franca">
            <Translate>Go to GitHub</Translate>
        </Link>
        <Link className="button button--primary" to="/research">
            <Translate>Latest Research</Translate>
        </Link>
      </>
    }
    col2={<WorldMap role="img" width="100%" title="A world map showing where key Lingua Franca contributors reside." />}
  />
);

// const People = () => (
//   <div className="container section">
//     <Heading as="h3" className="text--center padding-horiz--md">
//       <Translate>Made with ♥ in Berkeley, Dallas, Dresden, Kiel, Seoul, and Tucson.</Translate>
//     </Heading>
    
//   </div>
// );

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HeroBanner />
        <HomepageFeatures />
        <Intro />
        <Second />
      </main>
    </Layout>
  );
}
