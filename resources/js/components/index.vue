<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items> 
                <v-btn text key='path' v-for="(route, key) in routes">
                    <router-link  :to="{ name : route.path }" :key="key" style="text-transform:capitalize;">{{route.name}}</router-link>
                </v-btn> 
            </v-toolbar-items>

            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>mdi-delete-circle</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
            </template>
        </v-toolbar>
      
        <div>
            <router-view></router-view>
        </div>
    </div>
</template> 
<script> 
    import { VToolbar, VToolbarItems, VToolbarTitle, VBtn, VIcon } from 'vuetify/lib'

    export default {
        name: 'index',
        components:{
           VToolbar, VToolbarItems, VToolbarTitle, VBtn, VIcon
        },
        data() {
            return {
                routes: [
                    {
                        name: 'Accueil',
                        path: 'home'
                    }, 
                    {
                        name: 'Migrations',
                        path: 'agencies-migrations',
                    } 
                ]
            }
        },
        mounted() {

        }
    }
</script>