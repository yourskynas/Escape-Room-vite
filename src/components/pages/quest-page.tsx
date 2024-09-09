import { generatePath, Link } from 'react-router-dom';
import Footer from '../footer/footer';
import { AppRoute } from '../../constants';
import { QuestMocks } from '../../mocks/quest';
import { getGenreName, getLevelName } from '../../utils';

const QuestPage = (): JSX.Element => {
  // const params = useParams();
  // const questId = params.id || '';

  const quest = QuestMocks;

  const srcSet = `${quest.coverImg} 2x`;
  const sourceSrcSet = `${quest.previewImgWebp}, ${quest.coverImgWebp} 2x`;

  return (
    <>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={sourceSrcSet} />
            <img src={quest.previewImg} srcSet={srcSet} width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{getGenreName(quest.type)}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{getLevelName(quest.level)}
              </li>
            </ul>
            <p className="quest-page__description">{quest.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={generatePath(AppRoute.Booking, { id: quest.id })}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuestPage;
