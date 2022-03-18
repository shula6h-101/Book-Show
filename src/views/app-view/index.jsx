import {lazy, memo, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {APP_PREFIX_PATH} from "../../constants/common";

const Home = lazy(() => import('./home'));
const Settings = lazy(() => import('./settings'));


export const AppViews = () => (
  <div>
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/settings" exact element={<Settings/>} />
        <Route path='' element={<Navigate replace to={`${APP_PREFIX_PATH}/home`} />} />
      </Routes>
    </Suspense>
  </div>
);

export default memo(AppViews);
