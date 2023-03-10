import hermet from '../assets/images/hermet.png';
import armor from '../assets/images/armor.png';
import shield from '../assets/images/shield.png';
import sword from '../assets/images/sword.png';
import pants from '../assets/images/pants.png';
import boots from '../assets/images/boots.png';

import powerIcom from '../assets/images/powerIcon.png';
import runIcon from '../assets/images/runIcon.png';
import brainIcon from '../assets/images/brainIcon.png';
import speakIcon from '../assets/images/speakIcon.png';

import hearthIcon from '../assets/images/hearthIcon.png';
import rabbitIcon from '../assets/images/rabbitIcon.png';
import energyIcon from '../assets/images/energyIcon.png';

export const inventoryItems = [
    {
        item1: hermet,
        item2: armor
    },
    {
        item1: sword,
        item2: shield
    },
    {
        item1: pants,
        item2: boots
    },
];

export const basicParams = [
    {
        key: "power",
        title: "Сила",
        icon: powerIcom
    },
    {
        key: "agility",
        title: "Ловкость",
        icon: runIcon
    },
    {
        key: "intelligence",
        title: "Интеллект",
        icon: brainIcon
    },
    {
        key: "charisma",
        title: "Харизма",
        icon: speakIcon
    },
]

export const additionalParams = [
    {
        title: "Жизненная сила",
        key: "lifeforce",
        icon: hearthIcon
    },
    {
        title: "Уклонение",
        key: "evasion",
        icon: rabbitIcon
    },
    {
        title: "Энергичность",
        key: "energy",
        icon: energyIcon
    },
]