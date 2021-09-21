import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import { Header as FallbackHeader } from 'nav';

const Header = React.lazy(() => import('mf-nav/Header'));
const FallbackHeader = React.lazy(() => import('nav/build/Header'));

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <React.Suspense fallback={<div>FallbackHeader Loading</div>}>
        <FallbackHeader />
      </React.Suspense>;
    }

    return <React.Suspense fallback={<div>Header Loading</div>}>
      <Header />
    </React.Suspense>
  }
}

const App = () => <div>
    <HeaderWrapper/>
    <div>Hi there, I'm React from Webpack 5.</div>
  </div>;

ReactDOM.render(<App />, document.getElementById("app"));
