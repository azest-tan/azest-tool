<template>

    <layout1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>
        <h1>Hello Makino Leader</h1>

        <h3>{{store.state.count}}</h3>

        <router-link to="/">Back Top</router-link>

        <br>

        {{route.params.userid}}
        {{route.params.uname}}

        <br>
        {{store.state.UserInfo}}

    </layout1>
</template>
<script setup>
import layout1 from '../layouts/layout1.vue'
import {useRoute,useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()

import {useStore} from 'vuex'
const store = useStore();

store.commit('setcount',777)


console.log(route.params.userid)
console.log(route.params.uname)

</script>