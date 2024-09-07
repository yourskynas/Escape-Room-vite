import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page';
import MyQuestsPage from '../pages/my-quests-page';
import BookingPage from '../pages/booking-page';
import QuestPage from '../pages/quest-page';
import LoginPage from '../pages/login-page';
import ContactsPage from '../pages/contacts-page';
import { AppRoute } from '../../constants';
import TemplatePage from '../pages/template-page';
import PrivateRoute from '../private-route/private-route';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<TemplatePage />}>
        <Route
          index
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<ContactsPage />}
        />
        <Route
          path={AppRoute.Booking}
          element={<BookingPage />}
        />
        <Route
          path={AppRoute.Quest}
          element={<QuestPage />}
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRoute>
              <MyQuestsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRoute forNonAuthOnly>
            <LoginPage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;

