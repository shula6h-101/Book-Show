import {Navigate, Route, Routes} from "react-router-dom";
import {APP_PREFIX_PATH} from "../constants/common";
import AppLayout from "../layout/app-layout";

const Views = () => (
  <Routes>
    <Route path={`${APP_PREFIX_PATH}/*`} exact element={ <AppLayout /> }/>
    <Route path='/' element={<Navigate replace to={`${APP_PREFIX_PATH}/`} />} />
  </Routes>
);

export default Views;
