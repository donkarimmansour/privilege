import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeIndex from './components/home/HomeIndex'
import ProfessorsIndex from './components/Professors/ProfessorsIndex';
import StudentsIndex from './components/Students/StudentsIndex';
import DepartmentsIndex from './components/Departments/DepartmentsIndex';
import CoursesIndex from './components/Courses/CoursesIndex';
import ChatAppIndex from './components/ChatApp/ChatAppIndex';
import LibraryIndex from './components/Library/LibraryIndex';
import LevelsIndex from './components/Levels/LevelsIndex';
import SettingsIndex from './components/Settings/SettingsIndex';
import GroupsIndex from './components/Groups/GroupsIndex';
import PaymentsIndex from './components/Payments/PaymentsIndex';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import P404 from './components/Pages/404';
import P500 from './components/Pages/500';
import Profile from './components/user/Profile';
import View from './components/Courses/View';
import ExamIndex from './components/Exam/ExamIndex';
import store , { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import React from 'react';
import './common/i18n';

function App() {


 
  return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>

            <Routes>
              <Route element={<HomeIndex />} path="/" />
              <Route element={<ProfessorsIndex />} path="/professors" />
              <Route element={<StudentsIndex />} path="/students" />
              <Route element={<GroupsIndex />} path="/groups" />
              <Route element={<LevelsIndex />} path="/levels" />

              
              <Route element={<DepartmentsIndex />} path="/departments" />
              <Route element={<CoursesIndex />} path="/courses" />
              <Route element={<ChatAppIndex />} path="/chatapp" />
              <Route element={<LibraryIndex />} path="/library" />
              <Route element={<LevelsIndex />} path="/levels" />
              <Route element={<PaymentsIndex />} path="/payments" />
              
              <Route element={<SettingsIndex />} path="/settings" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<ExamIndex />} path="/exam" />
              <Route element={<View />} path="/courses/view" />

              <Route element={<Login />} path="/login" />
              <Route element={<ForgotPassword />} path="/forgotPassword" />
              <Route element={<P500 />} path="/500" />
              <Route element={<P404 />} path="/404" />

            </Routes>


          </BrowserRouter>


        </PersistGate>
      </Provider>

  );
}

export default App;
