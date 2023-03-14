import { createSlice } from "@reduxjs/toolkit";

// Создание начального хранилища для доступа к параметрам в любои месте
/* 
    name - имя персонажа
    level - уровень персонажа
    basicCharacteristics - объект с ключами (базовый параметр) и значениями (величина параметра)
    takeDamage - переменная счетчик для подсчета полученного урона
    additionalCharacters - метод объекта, где создается объект дополнительных параметров на основе базовых
    skillsCharacter - массив с объектами, где храняться способности персонажа
*/
const initialState = {
    name: "Ciri",
    level: 1,
    basicCharacteristics: {
        power: 1,
        agility: 2,
        intelligence: 3,
        charisma: 4,
    },
    takeDamage: 0,
    additionalCharacters: function () {
        let lifeforce = this.basicCharacteristics.power + 3;

        // Если получен уров персонаж теряет -1 жизненной силы
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

// Инициализация Redux Toolkit
// Создание reduser для изменение данных хранящихся в initialState
/* 
    rename - переименование персонажа;
    incrementParams - увеличить базовый параметр на 1 с установленным максимальным значение параметра
    decrementParams - уменьшение базовый параметр на 1 с проверкой на минимальное значение 0 (не уменьшать < 0)
    takeDamage - получение урона персонажем (вычетает -1 у дополнительного параметра жизненная сила)
    levelUpSkill - увеличение уровня способности на 1 при условии что базовый параметр > уровня способности
*/
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        rename: (state, action) => {
            state.name = action.payload;
        },
        incrementParams: (state, action) => {
            if (state.basicCharacteristics[action.payload] < 99) {
                state.basicCharacteristics[action.payload] += 1;
            }
        },
        decrementParams: (state, action) => {
            if (state.basicCharacteristics[action.payload] === 0) {
                state.basicCharacteristics[action.payload];
            } else {
                state.basicCharacteristics[action.payload] -= 1;
            }
        },
        takeDamage: (state) => {
            if (state.additionalCharacters().lifeforce > 0) {
                state.takeDamage += 1;
            }
            if (state.additionalCharacters().lifeforce <= 0) {
            }
        },
        levelUpSkill: (state, action) => {
            // key.payload - ["power", "Атака"]
            // item - объект из массива всех скиллов
            // Производим поис нужного скилла в массиве по заданному условию
            const skill = state.skillsCharacter.find(
                (item) => item.key === action.payload[0] && item.title === action.payload[1]
            );

            // При выполнении условия, что базовый параметр строго больше уровня скилла, то увеличиваем уровень скилла
            if (state.basicCharacteristics[action.payload[0]] > skill.level) {
                skill.level += 1;
            }
        },
    },
});

export const { rename, incrementParams, decrementParams, takeDamage, levelUpSkill } =
    globalSlice.actions;

export default globalSlice.reducer;
