import hermet from '../assets/images/hermet.png';
import armor from '../assets/images/armor.png';
import shield from '../assets/images/shield.png';
import sword from '../assets/images/sword.png';
import pants from '../assets/images/pants.png';
import boots from '../assets/images/boots.png';

import powerIcom from '../assets/images/powerIcon.svg';
import runIcon from '../assets/images/runIcon.svg';
import brainIcon from '../assets/images/brainIcon.svg';
import speakIcon from '../assets/images/speakIcon.svg';

import hearthIcon from '../assets/images/hearthIcon.svg';
import rabbitIcon from '../assets/images/rabbitIcon.svg';
import energyIcon from '../assets/images/energyIcon.svg';

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
];

export const partition_list = [
    { id: 0, title: "Характеристики" },
    { id: 1, title: "Способности" },
];

export const variants = {
    initial: {
        opacity: 0,
        x: 50
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -50
    },
    transition: {
        duration: 0.3,
        ease: 'linear'
    }
};

export const levelOptions = [
    {
        level: 0,
        title: "Нетренированный",
        color: "#fff",
    },
    {
        level: 1,
        title: "Новичок",
        color: "#c9cc00",
    },
    {
        level: 2,
        title: "Ученик",
        color: "#00b81f",
    },
    {
        level: 3,
        title: "Адепт",
        color: "#005bd1",
    },
    {
        level: 4,
        title: "Эксперт",
        color: "#ff2e2e",
    },
    {
        level: 5,
        title: "Мастер",
        color: "#9600fa",
    }
]