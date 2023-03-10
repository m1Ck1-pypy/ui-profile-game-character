import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Yennifer",
    level: 1,
    basicCharacteristics: {
        power: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
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
            if (state.additionalCharacters().lifeforce < 0) {
            }
        },
    },
});

export const { rename, incrementParams, decrementParams, takeDamage } =
    globalSlice.actions;

export default globalSlice.reducer;
