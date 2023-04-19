import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {lazy, Suspense} from 'react'
import './common/i18n';
import store , { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import Loader from './components/shared/Loader';

const Login = lazy(() =>  import('./components/Auth/user/Login'));
const ForgotPassword = lazy(() =>  import('./components/Auth/user/ForgotPassword'));
const FPAdmin = lazy(() =>  import('./components/Auth/admin/FPAdmin'));
const LogAdmin = lazy(() =>  import('./components/Auth/admin/LogAdmin'));
const P404 = lazy(() =>  import('./components/Pages/404'));
const P500 = lazy(() =>  import('./components/Pages/500'));
const Profile = lazy(() =>  import('./components/user/Profile'));
const View = lazy(() =>  import('./components/Languages/View'));
const Test = lazy(() =>  import('./components/Exam/Test'));
const Invice = lazy(() =>  import('./components/Payments/Invice'));
const LevelCert = lazy(() =>  import('./components/Students/LevelCert'));
const RegisterCert = lazy(() =>  import('./components/Students/RegisterCert'));
const HomeIndex = lazy(() =>  import('./components/home/HomeIndex'));
const StudentsIndex = lazy(() =>  import('./components/Students/StudentsIndex'));
const DepartmentsIndex = lazy(() =>  import('./components/Departments/DepartmentsIndex'));
const ChatAppIndex = lazy(() =>  import('./components/ChatApp/ChatAppIndex'));
const LibraryIndex = lazy(() =>  import('./components/Library/LibraryIndex'));
const LevelsIndex = lazy(() =>  import('./components/Levels/LevelsIndex'));
const SettingsIndex = lazy(() =>  import('./components/Settings/SettingsIndex'));
const GroupsIndex = lazy(() =>  import('./components/Groups/GroupsIndex'));
const PaymentsIndex = lazy(() =>  import('./components/Payments/PaymentsIndex'));
const AdminsIndex = lazy(() =>  import('./components/Admin/AdminsIndex'));
const TeachersIndex = lazy(() =>  import('./components/Teachers/TeachersIndex'));
const LanguageIndex = lazy(() =>  import('./components/Languages/LanguageIndex'));
const BillsIndex = lazy(() =>  import('./components/Bills/BillsIndex'));
const ViewContainer = lazy(() =>  import('./components/Notifications/ViewContainer'));
const CancelationsIndex = lazy(() =>  import('./components/Cancelations/CancelationsIndex'));
const BlocksIndex = lazy(() =>  import('./components/Blocks/BlocksIndex'));
const ArchivedStudentsIndex = lazy(() =>  import('./components/Students/ArchivedStudentsIndex'));
const NotificationsIndex = lazy(() =>  import('./components/Notifications/NotificationsIndex'));
const ExamIndex = lazy(() =>  import('./components/Exam/ExamIndex'));


function App() {

 
  return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>

            <Routes>
              <Route element={<Suspense fallback={ <Loader /> }><HomeIndex /></Suspense>} path="/" />
              <Route element={<Suspense fallback={ <Loader /> }><TeachersIndex /></Suspense>} path="/teachers" />
              <Route element={<Suspense fallback={ <Loader /> }><StudentsIndex /></Suspense>} path="/students" />
              <Route element={<Suspense fallback={ <Loader /> }><ArchivedStudentsIndex /></Suspense>} path="/archived-students" />
              <Route element={<Suspense fallback={ <Loader /> }><LevelCert /></Suspense>} path="/archived-students/level/:id" />
              <Route element={<Suspense fallback={ <Loader /> }><RegisterCert /></Suspense>} path="/archived-students/register/:id" />

              <Route element={<Suspense fallback={ <Loader /> }><GroupsIndex /></Suspense>} path="/groups" />
              <Route element={<Suspense fallback={ <Loader /> }><LevelsIndex /></Suspense>} path="/levels" />
              <Route element={<Suspense fallback={ <Loader /> }><NotificationsIndex /></Suspense>} path="/notifications" />
              <Route element={<Suspense fallback={ <Loader /> }><ViewContainer /></Suspense>} path="/notification/view/:id" />
              <Route element={<Suspense fallback={ <Loader /> }><BillsIndex /></Suspense>} path="/bills" />

              
              <Route element={<Suspense fallback={ <Loader /> }><BlocksIndex /></Suspense>} path="/blocks" />
              <Route element={<Suspense fallback={ <Loader /> }><CancelationsIndex /></Suspense>} path="/cancelations" />
              <Route element={<Suspense fallback={ <Loader /> }><DepartmentsIndex /></Suspense>} path="/departments" />
              <Route element={<Suspense fallback={ <Loader /> }><LanguageIndex /></Suspense>} path="/languages" />
              <Route element={<Suspense fallback={ <Loader /> }><ChatAppIndex /></Suspense>} path="/chatapp" />
              <Route element={<Suspense fallback={ <Loader /> }><LibraryIndex /></Suspense>} path="/library" />
              <Route element={<Suspense fallback={ <Loader /> }><LevelsIndex /></Suspense>} path="/levels" />
              <Route element={<Suspense fallback={ <Loader /> }><PaymentsIndex /></Suspense>} path="/payments" />
              <Route element={<Suspense fallback={ <Loader /> }><Invice /></Suspense>} path="/invice/:id" />
              <Route element={<Suspense fallback={ <Loader /> }><AdminsIndex /></Suspense>} path="/admins" />
              
              <Route element={<Suspense fallback={ <Loader /> }><SettingsIndex /></Suspense>} path="/settings" />
              <Route element={<Suspense fallback={ <Loader /> }><Profile /></Suspense>} path="/profile" />
              <Route element={<Suspense fallback={ <Loader /> }><ExamIndex /></Suspense>} path="/exam/:id" />
              <Route element={<Suspense fallback={ <Loader /> }><View /></Suspense>} path="/language/view/:id" />

              <Route element={<Suspense fallback={ <Loader /> }><Test /></Suspense>} path="/test" />

              <Route element={<Suspense fallback={ <Loader /> }><LogAdmin /></Suspense>} path="/admin" />
              <Route element={<Suspense fallback={ <Loader /> }><Login /></Suspense>} path="/login" />
              <Route element={<Suspense fallback={ <Loader /> }><FPAdmin /></Suspense>} path="/fp-admin" />
              <Route element={<Suspense fallback={ <Loader /> }><ForgotPassword /></Suspense>} path="/forgotPassword" />
              <Route element={<Suspense fallback={ <Loader /> }><P500 /></Suspense>} path="/500" />
              <Route element={<Suspense fallback={ <Loader /> }><P404 /></Suspense>} path="*" />

            </Routes>


          </BrowserRouter>


        </PersistGate>
      </Provider>

  );
}

export default App;
