import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeIndex from './components/home/HomeIndex'
import StudentsIndex from './components/Students/StudentsIndex';
import DepartmentsIndex from './components/Departments/DepartmentsIndex';
import ChatAppIndex from './components/ChatApp/ChatAppIndex';
import LibraryIndex from './components/Library/LibraryIndex';
import LevelsIndex from './components/Levels/LevelsIndex';
import SettingsIndex from './components/Settings/SettingsIndex';
import GroupsIndex from './components/Groups/GroupsIndex';
import PaymentsIndex from './components/Payments/PaymentsIndex';
import Login from './components/Auth/user/Login';
import ForgotPassword from './components/Auth/user/ForgotPassword';
import P404 from './components/Pages/404';
import P500 from './components/Pages/500';
import Profile from './components/user/Profile';
import View from './components/Languages/View';
import ExamIndex from './components/Exam/ExamIndex';
import store , { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import React from 'react';
import './common/i18n';
import NotificationsIndex from './components/Notifications/NotificationsIndex';
import Test from './components/Exam/Test';
import AdminsIndex from './components/Admin/AdminsIndex';
import TeachersIndex from './components/Teachers/TeachersIndex';
import LanguageIndex from './components/Languages/LanguageIndex';
import BillsIndex from './components/Bills/BillsIndex';
import ViewContainer from './components/Notifications/ViewContainer';
import CancelationsIndex from './components/Cancelations/CancelationsIndex';
import BlocksIndex from './components/Blocks/BlocksIndex';
import FPAdmin from './components/Auth/admin/FPAdmin';
import LogAdmin from './components/Auth/admin/LogAdmin';
import Invice from './components/Payments/Invice';

function App() {

 
  return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>

            <Routes>
              <Route element={<HomeIndex />} path="/" />
              <Route element={<TeachersIndex />} path="/teachers" />
              <Route element={<StudentsIndex />} path="/students" />
              <Route element={<GroupsIndex />} path="/groups" />
              <Route element={<LevelsIndex />} path="/levels" />
              <Route element={<NotificationsIndex />} path="/notifications" />
              <Route element={<ViewContainer />} path="/notification/view/:id" />
              <Route element={<BillsIndex />} path="/bills" />

              
              <Route element={<BlocksIndex />} path="/blocks" />
              <Route element={<CancelationsIndex />} path="/cancelations" />
              <Route element={<DepartmentsIndex />} path="/departments" />
              <Route element={<LanguageIndex />} path="/languages" />
              <Route element={<ChatAppIndex />} path="/chatapp" />
              <Route element={<LibraryIndex />} path="/library" />
              <Route element={<LevelsIndex />} path="/levels" />
              <Route element={<PaymentsIndex />} path="/payments" />
              <Route element={<Invice />} path="/invice/:id" />
              <Route element={<AdminsIndex />} path="/admins" />
              
              <Route element={<SettingsIndex />} path="/settings" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<ExamIndex />} path="/exam/:id" />
              <Route element={<View />} path="/language/view/:id" />

              <Route element={<Test />} path="/test" />

              <Route element={<LogAdmin />} path="/admin" />
              <Route element={<Login />} path="/login" />
              <Route element={<FPAdmin />} path="/fp-admin" />
              <Route element={<ForgotPassword />} path="/forgotPassword" />
              <Route element={<P500 />} path="/500" />
              <Route element={<P404 />} path="*" />

            </Routes>


          </BrowserRouter>


        </PersistGate>
      </Provider>

  );
}

export default App;
