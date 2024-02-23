import { defineStore } from "pinia";

export const useMainStore = defineStore("mainstore", {
    state: () => ({
        userId: 'c4'
    }),
    getters: {
        getUserId(){
            return this.userId
        }
    }
})