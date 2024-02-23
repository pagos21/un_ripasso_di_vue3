<template>
    <section>
        <base-card>
        <h2>Register as a coach</h2>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
    </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';
import {defineComponent} from 'vue'
import {useCoachesStore} from '@/stores/modules/coaches/index'
export default defineComponent({
    setup(){
        const coachesStore = useCoachesStore()
        return {coachesStore}
    },
    components: {
        CoachForm,
    },
    methods: {
        saveData(data){
            console.log(this.coachesStore.getCoaches);
            this.coachesStore.registerCoach(data)
            this.$router.replace('/')
        }
    }
})
</script>