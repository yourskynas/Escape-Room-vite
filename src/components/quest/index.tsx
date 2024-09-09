import { generatePath, Link } from 'react-router-dom';
import { QuestType } from '../../types';
import { AppRoute } from '../../constants';
import { getLevelName } from '../../utils';

type QuestInfoProps = {
  adress: string | undefined;
  date: string | undefined;
  time: string | undefined;
}

type QuestCardProps = {
  quest: QuestType;
  isReservation?: boolean;
  adress?: string;
  date?: string;
  time?: string;
}

const ButtonCancel = (): JSX.Element => (
  <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
);

const QuestInfo = ({adress, date, time}: QuestInfoProps) :JSX.Element => {
  const day = date === 'today' ? 'сегодня' : 'завтра';
  const questInfo = time && adress && `[${day}, ${time}.${adress}]`;
  return (
    <span className="quest-card__info">{questInfo}</span>
  );
};

const QuestCard = ({quest, isReservation, adress, date, time}: QuestCardProps): JSX.Element => {
  const { title, previewImg, previewImgWebp, level, type, peopleMinMax } = quest;
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} srcSet={previewImg} width="344" height="232" alt={type} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={generatePath(AppRoute.Quest, { id: quest.id })}>{title}</Link>
          {isReservation && <QuestInfo adress={adress} date={date} time={time} /> }
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleMinMax[0]}{peopleMinMax[1] && `-${peopleMinMax[1]}`}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{getLevelName(level)}
          </li>
        </ul>
        {isReservation && <ButtonCancel />}
      </div>
    </div>
  );
};

export default QuestCard;

