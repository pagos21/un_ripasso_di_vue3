<template>
    <form action="" @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model.trim="name">
        </div>
        <div class="form-control">
            <label for="lname">Last Name</label>
            <input type="text" name="lname" id="lname" v-model.trim="lname" >
        </div>
        <div class="form-control">
            <label for="descr">Description</label>
            <textarea row="5" type="text" name="descr" id="descr" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Hr rate</label>
            <input type="number" name="rate" id="rate" v-model.number="rate">
        </div>
        <div class="form-control">
            <h3>Areas of Exp</h3>
            <div>
                <input type="checkbox" value="frontend" id="frontend" v-model="areas">
                <label for="frontend">FE Dev</label>
            </div>
            <div>
                <input type="checkbox" value="backend" id="backend" v-model="areas">
                <label for="backend">BE Dev</label>
            </div>
            <div>
                <input type="checkbox" value="career" id="career" v-model="areas">
                <label for="career">Career Dev</label>
            </div>
        </div>
        <base-button>Register!!!</base-button>
    </form>

</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    emits: ['save-date'],
    data(){
        return {
            name: '',
            lname: '',
            description: '',
            rate: null,
            areas: [],
        }
    },
    methods: {
        submitForm(){
            const formData = {
                first: this.name,
                last: this.lname,
                descr: this.description,
                rate: this.rate,
                areas: this.areas,
        }
        console.log(formData.areas);
        this.$emit('save-data', formData)
        }
    }
})
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>