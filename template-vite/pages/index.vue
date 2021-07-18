<template>

    <layout1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h1>Hello Park Sensei</h1>
        <h3>{{store.state.count}}</h3>

        <br/>
        <router-link to="/page2/makino1111/username/abc">Go Page 2</router-link>
        <br/>
        <button @click="btnclick()">Clike me to jump Page2</button>

    </layout1>
</template>
<script setup>
import layout1 from '../layouts/layout1.vue'
import {useRoute,useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()

import {useStore} from 'vuex'
const store = useStore();

function btnclick(){
    router.push({path:'/page2/makino1111/username/abc2'})
}

</script>