import { FormEvent, useState } from 'react';
import { BookingAllDates } from '../../constants';
import { BookingAllDatesTypes } from '../../types';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

type BookingDateProps = {
  bookingDate: BookingAllDatesTypes;
}

type BookingDateItemProps = {
  valueForInput: string;
  time: string;
}

const BookingDateItem = ({valueForInput, time}: BookingDateItemProps): JSX.Element => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const handleDateClick = () => {
    setCurrentDate(time);
  };
  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id={valueForInput} name="date" checked={currentDate === time} required value={valueForInput} onClick={handleDateClick}/><span className="custom-radio__label">{time}</span>
    </label>
  );
};

const BookingDate = ({bookingDate}: BookingDateProps): JSX.Element => {
  const { date, times } = bookingDate;
  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{date === 'today' ? 'Сегодня' : 'Завтра'}</legend>
      <div className="booking-form__date-inner-wrapper">
        {Object.entries(times).map(([valueForInput, time]) => <BookingDateItem key={nanoid()} valueForInput={valueForInput} time={time} />)}
      </div>
    </fieldset>
  );
};

const BookingForm = (): JSX.Element => {
  const [isChildren, setIsChildren] = useState<boolean>(true);
  const [isAgreement, setIsAgreement] = useState<boolean>(false);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleFormSubmit}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        {BookingAllDates.map((bookingDate) => <BookingDate key={nanoid()} bookingDate={bookingDate} />)}
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" name="person" placeholder="Количество участников" required />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" name="children" checked={isChildren} onClick={() => setIsChildren(!isChildren)} />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required checked={isAgreement} onClick={() => setIsAgreement(!isAgreement)} />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
};

export default BookingForm;
