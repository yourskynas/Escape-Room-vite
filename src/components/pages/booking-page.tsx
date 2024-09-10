import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BookingForm from '../booking-form/booking-form';
import Footer from '../footer/footer';
import { useEffect } from 'react';
import { fetchBookingAction } from '../../store/api-actions';
import { selectBooking, selectCurrentQuest } from '../../store/quests-data/selectors';

const BookingPage = (): JSX.Element => {
  const params = useParams();
  const questId = params.id || '';

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookingAction(questId));
  }, [dispatch, questId]);

  const quest = useAppSelector(selectCurrentQuest);
  const booking = useAppSelector(selectBooking);

  const firstBooking = booking[0];

  return (
    <>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={quest?.coverImgWebp} />
            <img src={quest?.previewImg} srcSet={quest?.coverImg} width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{quest?.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container"></div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: {firstBooking.location.address}</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
