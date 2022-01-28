import { Route, Routes } from 'react-router-dom';
import { NavbarHeader } from '../components/organisms';
import {
  Experiment,
  Information,
  PatientChat,
  SuccessPay,
  FailPay,
} from '../components/templates';

export default function RouterManager() {
  return (
    <>
      <NavbarHeader />
      <Routes>
        {/* <Route path={'/'} exact> */}
        {/* <h1>hi home</h1> */}
        {/* </Route> */}
        <Route path={'/experiment'} element={<Experiment />} axact />
        <Route path={'/information'} element={<Information />} axact />
        <Route path={'/chat'} element={<PatientChat />} axact />
        <Route path={'/success-pay'} element={<SuccessPay />} axact />
        <Route path={'/fail-pay'} element={<FailPay />} axact />
      </Routes>
    </>
  );
}
