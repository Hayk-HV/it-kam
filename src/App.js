import React, { Suspense } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from "./Redux/app-reducer";
import Preloader from './components/Common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import withSuspense from "./components/hoc/withSuspense";

// import DialogContainer from "./components/Dialogs/DialogContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={withSuspense(DialogContainer)} />

          <Route path='/profile/:userId?' render={() => <Suspense fallback={<div>Загрузка...</div>}><ProfileContainer /> </Suspense>} />

          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>

export default SamuraiJSApp
