import Footer from '../footer/footer';
import LevelList from '../level-list/level-list';
import QuestList from '../quest/quest-list';

const MainPage = (): JSX.Element => (
  <>
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
        </div>
        <div className="page-content__item">
          <form className="filter" action="#" method="get">
            <fieldset className="filter__section">
              <legend className="visually-hidden">Тематика</legend>
              <ul className="filter__list">
                <li className="filter__item">
                  <input type="radio" name="type" id="all" checked />
                  <label className="filter__label" htmlFor="all">
                    <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                      <use xlinkHref="#icon-all-quests"></use>
                    </svg><span className="filter__label-text">Все квесты</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="adventure" />
                  <label className="filter__label" htmlFor="adventure">
                    <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                      <use xlinkHref="#icon-adventure"></use>
                    </svg><span className="filter__label-text">Приключения</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="horror" />
                  <label className="filter__label" htmlFor="horror">
                    <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                      <use xlinkHref="#icon-horror"></use>
                    </svg><span className="filter__label-text">Ужасы</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="mystic" />
                  <label className="filter__label" htmlFor="mystic">
                    <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                      <use xlinkHref="#icon-mystic"></use>
                    </svg><span className="filter__label-text">Мистика</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="detective" />
                  <label className="filter__label" htmlFor="detective">
                    <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                      <use xlinkHref="#icon-detective"></use>
                    </svg><span className="filter__label-text">Детектив</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="sciFi" />
                  <label className="filter__label" htmlFor="sciFi">
                    <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                      <use xlinkHref="#icon-sci-fi"></use>
                    </svg><span className="filter__label-text">Sci-fi</span>
                  </label>
                </li>
              </ul>
            </fieldset>
            <fieldset className="filter__section">
              <legend className="visually-hidden">Сложность</legend>
              <LevelList />
            </fieldset>
          </form>
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestList />
      </div>
    </main>
    <Footer />
  </>
);

export default MainPage;
