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
import img from '../content/img/imageedit_1_2716264277.jpg';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;


const PhotoCredits: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Photo Credits</title>
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
            <PostFullTitle>Photo Credits</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                I am a developer but I really love art works. I have been lucky enough to have artist friends like <a href="https://www.facebook.com/mahesh.mankarmmm007.9">Mahesh Mankar</a>, <a href="https://www.facebook.com/mayur.msmart">Mayur Chimote</a> from whom I keep on getting art inspirations.
              </p>
              <p>
                The following image, which is also used on the main blog, is a work by Mahesh Mankar.
              </p>
              <img src={img} alt="image" />
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default PhotoCredits;
