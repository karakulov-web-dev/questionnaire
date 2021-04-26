import React from 'react';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Difficulty } from '../../store/state';

interface IDifficult {
    icon: OverridableComponent<SvgIconTypeMap>,
    color: string,
}

interface IDifficultMap {
    easy: IDifficult,
    medium: IDifficult,
    hard: IDifficult,
}

const iconsByDifficult: IDifficultMap = {
  easy: {
    icon: InsertEmoticonIcon, color: 'green',
  },
  medium: {
    icon: SentimentSatisfiedIcon, color: 'blue',
  },
  hard: {
    icon: MoodBadIcon, color: 'red',
  },
};

interface IDifficultIconProps {
    difficulty: Difficulty
}

const DifficultIcon = (props: IDifficultIconProps) => {
  const { difficulty } = props;
  const { icon: Icon, color } = iconsByDifficult[difficulty];
  return <Icon htmlColor={color} />;
};

export default DifficultIcon;
