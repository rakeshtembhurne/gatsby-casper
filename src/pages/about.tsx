import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;


const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Hello, I am Rakesh Tembhurne. I am a developer from Nagpur, India. I love programming, reading and travelling. I have worked on creating rapid web applications with web app frameworks and technologies.
              </p>
              <p>
                Speaking more technical, I am a full stack developer with 7+ years of experience in LAMP, LEMP and NodeJS technologies.
              </p>
              <p>
                If you want to connect with me on Facebook, click like press like button on <a href="https://www.facebook.com/rakesh.tembhurne">my Facebook Page</a>, or if you want to add me to your circles, visit <a href="https://plus.google.com/+RakeshTembhurne">my Google+ profile</a>, or you can follow me <a href="https://twitter.com">(@tembhurnerakesh)</a> on twitter.
              </p>
              <p>
                Further if you wish to get regular updates of my blog, you can subscribe to the RSS feed of the blog.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
