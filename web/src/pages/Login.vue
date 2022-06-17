<template>
    <div class="container mt-20 mx-auto w-3/12 border rounded-md p-5 shadow">
        <h1 class="text-2xl"><span class=" text-blue-500">{{app}}</span>POS <span style="font-size: 15px !important;font-weight:bold">Login</span></h1>
        <form @submit.prevent="processLogin">
            <div class="py-1">
                <label class="text-sm">Email Address</label>
                <input type="email" class="w-full rounded-md border p-2 text-sm shadow" v-model="form.email" required/>
            </div>
            <div class="py-1">
                <label class="text-sm">Password</label>
                <input type="password" class="w-full rounded-md border p-2 text-sm shadow" v-model="form.password" required/>
            </div>
            <div>
                <button class="bg-blue-500 p-2 w-full mt-3 rounded-md text-white hover:bg-blue-400" type="submit">Login</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { APP_NAME } from '../../config';
import {reactive, ref} from 'vue';

export default {
    props: {
        is: {
            type: String
        }
    },
    setup(props: any) {
        const app = ref(APP_NAME);
        const form = reactive({
            password: null,
            email: null
        })

        const processLogin = () => {
            
        }

        return {
            app,
            form,
            processLogin
        }
    }
}
</script>