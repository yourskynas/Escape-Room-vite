import { useState } from 'react';
import { QuestLevel } from '../../constants';

type KeyQuestLevel = keyof typeof QuestLevel;

type LevelItemProps = {
  levelName: KeyQuestLevel;
};

type Level = typeof QuestLevel[KeyQuestLevel];

const LevelItem = ({levelName}: LevelItemProps): JSX.Element => {
  const [activeLevel, setActiveLevel] = useState<Level>(QuestLevel.any);
  const level: Level = QuestLevel[levelName];
  const isChecked: boolean = activeLevel === level;
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={levelName} checked={isChecked} onClick={() => setActiveLevel(level)}/>
      <label className="filter__label" htmlFor={levelName}><span className="filter__label-text">{level}</span>
      </label>
    </li>
  );
};

const LevelList = (): JSX.Element => {
  const keyQuestLevel = Object.keys(QuestLevel) as (KeyQuestLevel)[];
  return (
    <ul className="filter__list">
      {keyQuestLevel.map((levelName) => <LevelItem key={levelName} levelName={levelName} />)}
    </ul>
  );
};

export default LevelList;
