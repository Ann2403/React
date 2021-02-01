<template>
    <div id="app">
        <header>
            <div class="container">
                <div class="row">
                    <div class="col col-sm-9">
                        <h1>Site</h1>
                    </div>
                    <div class="col col-sm-3">
                        <div class="alert alert-dark">
                            <div>In Cart: {{count}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col col-sm-3 menu">
                        <ul class="list-group">
                            <router-link v-for="(item, index) in menuList" :key="index" :to="item.url"
                                         tag="li" class="list-group-item" active-class="active" exact>
                                <a>{{ item.text }}</a>
                            </router-link>
                        </ul>
                    </div>
                    <div class="col col-sm-9">
                        <transition name="slide" mode="out-in">
                            <router-view/>
                        </transition>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters('menu', {
            menuList: 'items'
        }),
        ...mapGetters('cart', {
            count: 'cnt'
        })
    }
}
</script>

<style>
.menu {
    border-right: 1px solid #ddd;
}

.list-group-item a {
    text-decoration: none;
}

.list-group-item {
    transition: background 0.3s, color 0.3s;
}

.list-group-item.active a {
    color: white;
}

.slide-enter{

}

.slide-enter-active{
    animation: slideIn 0.5s;
}

.slide-enter-to{

}

.slide-leave{

}

.slide-leave-active{
    animation: slideOut 0.5s;
}

.slide-leave-to{

}
@keyframes slideIn {
    from{transform: translateX(2000px);}
    to{transform: translateX(0px);}
}

@keyframes slideOut {
    from{transform: translateX(0px);}
    to{transform: translateX(2000px);}
}

</style>
