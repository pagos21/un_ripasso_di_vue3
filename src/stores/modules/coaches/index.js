import { defineStore } from "pinia";
import { useMainStore } from "@/stores";

export const useCoachesStore = defineStore("coaches", () => {
  const mainStore = useMainStore()
  const id = mainStore.getUserId
  const coaches = [
    {
      id: 'c1',
      firstName: "Maximilian",
      lastName: "Schwarzmüller",
      areas: ["frontend", "backend", "career"],
      description:
        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
      hourlyRate: 30,
    },
    {
      id: "c2",
      firstName: "Julie",
      lastName: "Jones",
      areas: ["frontend", "career"],
      description:
        "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
      hourlyRate: 30,
    },
  ]
  const getCoaches = coaches
  const getHasCoaches = coaches && coaches.length > 0
  function isCoach(){
    const coaches = mainStore.getCoaches
    const id = mainStore.getUserId
    return coaches.some(coach => coach.id === id)
  }
  function registerCoach(payload){
    console.log("called action");
    console.log(payload);
      //sumulando eCivis le informazione di FE non coincidino mai con quelle di BE le devo parsare
      const coachData = {
        id: new Date().toISOString(),
        firstName: payload.first,
        lastName: payload.last,
        description: payload.descr,
        hourlyRate: payload.rate,
        areas: payload.areas
      }
        this.coaches.push(coachData)
        console.log(coaches);
  }
  return {coaches, getCoaches, getHasCoaches, registerCoach, isCoach}
});
