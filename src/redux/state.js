import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Ciri",
    level: 1,
    basicCharacteristics: {
        power: 5,
        agility: 4,
        intelligence: 2,
        charisma: 3,
    },
    takeDamage: 0,
    additionalCharacters: function () {
        let lifeforce = this.basicCharacteristics.power + 3;

        if (this.takeDamage) {
            lifeforce = this.basicCharacteristics.power + 3 - this.takeDamage;
        }

        let evasion = this.basicCharacteristics.agility + 10;
        let energy = this.basicCharacteristics.intelligence + evasion;

        const additionalParams = {
            lifeforce,
            evasion,
            energy,
        };

        return additionalParams;
    },
    skillsCharacter: [
        { key: "power", title: "Атака", level: 0 },
        { key: "agility", title: "Стелс", level: 0 },
        { key: "agility", title: "Стрельба из лука", level: 0 },
        { key: "intelligence", title: "Обучаемость", level: 0 },
        { key: "intelligence", title: "Выжывание", level: 0 },
        { key: "intelligence", title: "Медицина", level: 0 },
        { key: "charisma", title: "Запугивание", level: 0 },
        { key: "charisma", title: "Проницательность", level: 0 },
        { key: "charisma", title: "Внешний вид", level: 0 },
        { key: "charisma", title: "Манипулирование", level: 0 },
    ],
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        rename: (state, key) => {
            state.name = key.payload;
        },
        incrementParams: (state, key) => {
            state.basicCharacteristics[key.payload] += 1;
        },
        decrementParams: (state, key) => {
            if (state.basicCharacteristics[key.payload] === 0) {
                state.basicCharacteristics[key.payload];
            } else {
                state.basicCharacteristics[key.payload] -= 1;
            }
        },
        takeDamage: (state) => {
            if (state.additionalCharacters().lifeforce > 0) {
                state.takeDamage += 1;
            }
            if (state.additionalCharacters().lifeforce <= 0) {
            }
        },
        levelUpSkill: (state, key) => {
            const skill = state.skillsCharacter.find(
                (item) => item.key === key.payload[0] && item.title === key.payload[1]
            );

            state.basicCharacteristics[key.payload[0]];

            if (state.basicCharacteristics[key.payload[0]] > skill.level) {
                skill.level += 1;
            }
        },
    },
});

export const { rename, incrementParams, decrementParams, takeDamage, levelUpSkill } =
    globalSlice.actions;

export default globalSlice.reducer;
