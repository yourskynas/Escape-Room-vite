import { nanoid } from '@reduxjs/toolkit';
import QuestCard from '.';
import { QuestType } from '../../types';

type QuestListProps = {
  quests: QuestType[];
}

const QuestList = ({quests}: QuestListProps): JSX.Element => (
  <div className="cards-grid">
    {quests.map((quest) => <QuestCard key={nanoid()} quest={quest} />)}
  </div>
);

export default QuestList;

