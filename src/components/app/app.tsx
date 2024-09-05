import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page';
import MyQuestsPage from '../pages/my-quests-page';
import BookingPage from '../pages/booking-page';
import QuestPage from '../pages/quest-page';
import LoginPage from '../pages/login-page';
import ContactsPage from '../pages/contacts-page';
import { AppRoute } from '../../constants';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Quest}
        element={<QuestPage />}
      />
      <Route
        path={AppRoute.Booking}
        element={<BookingPage />}
      />
      <Route
        path={AppRoute.MyQuests}
        element={<MyQuestsPage />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Contacts}
        element={<ContactsPage />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;

