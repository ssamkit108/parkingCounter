import { defineStore } from "pinia";
import { ref } from "vue";
import { getCountApi } from "../services/api";

export const useCounter = defineStore('counter', () => {
    const count = ref(0);

    function increment() {
        count.value++
    }

    function decrement() {
        count.value > 0 ? count.value-- : 0;
    }

    function getCount() {
        getCountApi()
            .then((response) => {
                count.value = response.body.Items[0].occupied_slots
            })
            .catch((error) => {
                console.log('Something Went Wrong', error);
            });
    }

    return { count, increment, decrement, getCount }
})