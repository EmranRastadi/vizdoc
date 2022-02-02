import { Route, Switch } from 'react-router-dom';
import { lazy } from 'react';
import { NavbarHeader } from '../components/organisms';
import {
  Experiment,
  Information,
  PatientChat,
  SuccessPay,
  FailPay,
} from '../components/templates';
import { LoginValidation } from '../services/Authentication/loginValidation';
import { useSelector } from 'react-redux';

export const createLazy = (Route) => {
  const component = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Route);
      }, 1000);
    });
  });

  return component;
};

export default function RouterManager() {
  const token = useSelector((state) => state?.auth?.token);
  //   const PrivateRoute = ({
  //     component: Component,
  //     rPath: RedirectPath,
  //     ...rest
  //   }) => {
  //     return (
  //       <Route
  //         {...rest}
  //         render={(props) =>
  //           LoginValidation(token) ? (
  //             <Component {...props} />
  //           ) : (
  //             history(RedirectPath)
  //           )
  //         }
  //       />
  //     );
  //   };

  // const Experiment = createLazy(
  //   './../component/templates/Experiment/Experiment.js'
  // );
  return (
    <>
      <NavbarHeader />
      <Switch>
        {/* <Route path={'/'} exact>
        {/* <h1>hi home</h1> */}
        {/* </Route> */}
        {/* <PrivateRoute
          component={Experiment}
          path={'/experiment'}
          rPath={'/information'}
          exact
        />  */}
        <Route path={'/experiment'} axact>
          <Experiment />
        </Route>
        <Route path={'/information'} axact>
          <Information />
        </Route>
        <Route path={'/chat/:id'} axact>
          <PatientChat />
        </Route>
        <Route path={'/success-pay'} axact>
          <SuccessPay />
        </Route>
        <Route path={'/fail-pay'} axact>
          <FailPay />
        </Route>
      </Switch>
    </>
  );
}
