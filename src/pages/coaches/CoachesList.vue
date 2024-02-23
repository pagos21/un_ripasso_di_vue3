<template>
    <section>
        <coach-filter @change-filters="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register" v-if="isCoach">register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" :id="coach.id" :first-name="coach.firstName" :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
            </ul>
            <h3 v-else>NO COACHES</h3>
    </base-card>
    </section>
</template>

<script>
    import {useCoachesStore} from '@/stores/modules/coaches/index'
    import {defineComponent} from 'vue'
    import CoachItem from '../../components/coaches/CoachItem.vue'
    import CoachFilter from '../../components/coaches/CoachFilter.vue'

    export default defineComponent({
        setup(){
            const coachesStore = useCoachesStore()
            return {coachesStore}
        },
        data() {
            return {
                activeFilters: {
                    frontend: true,
                    backend: true,
                    career: true,
                }
            }
        },
        components: {
            CoachItem,
            CoachFilter
            
        },
        computed: {
            idCoach(){
                this.coachesStore.isCoach()
            },
            filteredCoaches(){
                console.log("filtering coaches");
                console.log(this.coachesStore.getCoaches);
                const coaches =  this.coachesStore.getCoaches;
                return coaches.filter(coach => {
                    if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                        return true;
                    }
                    if (this.activeFilters.backend && coach.areas.includes('backend')) {
                        return true;
                    }
                    if (this.activeFilters.career && coach.areas.includes('career')) {
                        return true;
                    }
                    return false;
                })
            },
            hasCoaches(){
                return this.coachesStore.getHasCoaches;
            }
        },
        methods: {
            setFilters(updFilters){
                console.log(updFilters);
                this.activeFilters = updFilters
            }
        }
    })
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>