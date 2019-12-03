/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'es6-promise/auto'

import Vue from 'vue'; // Importing Vue Library
window.Vue = Vue;

import VueRouter from 'vue-router'; // importing Vue router library
import router from './router';
Vue.use(VueRouter);
 
import vuetify from './src/plugins/vuetify' // path to vuetify export 
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import index from './components/index.vue';

const app = new Vue({
    el: "#app",
    router, 
    vuetify,
    components: { index }
});