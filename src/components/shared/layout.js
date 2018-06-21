import React from 'react';
import { AppWrapper, ContentWrapper, PageWidth } from './layout.style';

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <AppWrapper>
        <header>
          <PageWidth>
            <h2>Broccoli &amp; co.</h2>
          </PageWidth>
        </header>
        <ContentWrapper>{children}</ContentWrapper>
        <footer>
          <p>
            Made with{' '}
            <span role="img" aria-label="love">
              💗
            </span>{' '}
            in Melbourne
          </p>
          <p>&copy; 2018 Broccoli &amp; Co. All rights reserved.</p>
        </footer>
      </AppWrapper>
    );
  }
}

export default Layout;
