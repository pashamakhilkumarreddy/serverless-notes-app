import { lazy, Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Loader from '../components/Loader';
import Home from '../pages/Home';

const SignUp = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const Routes = () => 
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={['/', '/home', '/index']} exact>
          <Home />
        </Route>
        <Route path='/signup' component={SignUp} exact />
        <Route path='/login' component={Login} exact />
        <Route path='*' component={PageNotFound} exact />
      </Switch>
    </Suspense>
  </ErrorBoundary>

export default Routes;
