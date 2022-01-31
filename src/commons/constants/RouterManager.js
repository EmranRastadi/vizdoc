import { Route, Routes, useNavigate } from 'react-router-dom';
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
  const history = useNavigate();
  const PrivateRoute = ({
    component: Component,
    rPath: RedirectPath,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          LoginValidation(token) ? (
            <Component {...props} />
          ) : (
            history(RedirectPath)
          )
        }
      />
    );
  };

  // const Experiment = createLazy(
  //   './../component/templates/Experiment/Experiment.js'
  // );
  return (
    <>
      <NavbarHeader />
      <Routes>
        {/* <Route path={'/'} exact>
        {/* <h1>hi home</h1> */}
        {/* </Route> */}
        {/* <PrivateRoute
          component={Experiment}
          path={'/experiment'}
          rPath={'/information'}
          exact
        />  */}
        <Route path={'/experiment'} element={<Experiment />} axact />
        <Route path={'/information'} element={<Information />} axact />
        <Route path={'/chat'} element={<PatientChat />} axact />
        <Route path={'/success-pay'} element={<SuccessPay />} axact />
        <Route path={'/fail-pay'} element={<FailPay />} axact />
      </Routes>
    </>
  );
}
