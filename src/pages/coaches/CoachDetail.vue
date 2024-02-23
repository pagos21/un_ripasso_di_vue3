<template>
    <section>
        <base-card>
            <h2>{{ fullname }}</h2>
            <h3>${{ rate }}/hr</h3>
        </base-card>
    </section>
    <section>
        <base-card>
        <header>
            <h2>Interested?</h2>
            <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>

<script>
import {defineComponent} from 'vue'
import {useCoachesStore} from '@/stores/modules/coaches/index'
export default defineComponent({
    setup(){
        const coachesStore = useCoachesStore()
        return {coachesStore}
    },
    props: ['id'],
    data(){
        selectedCoach: null
    },
    computed: {
        fullname(){
            return this.selectedCoach.firstName + " " + this.selectedCoach.lastName
        },
        contactLink(){
            return this.$route.path + "/contact"
        },
        areas(){
            return this.selectedCoach.areas
        },
        rate(){
            return this.selectedCoach.hourlyRate
        },
        description(){
            return this.selectedCoach.description
        },
    },
    created(){
        this.selectedCoach = this.coachesStore.getCoaches.find(coach => coach.id === this.id)
    },
})
</script>