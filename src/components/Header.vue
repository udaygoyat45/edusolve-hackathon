<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
            <img src="../assets/cool.png">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <router-link to="/"><b-nav-item href="#">Home</b-nav-item></router-link>
            <router-link to="/about"><b-nav-item href="#">About</b-nav-item></router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
            <template v-slot:button-content>
                User
            </template>
            <b-dropdown-item v-show="!logged" href="#">Register</b-dropdown-item>
            <b-dropdown-item v-show="!logged" href="#">Login</b-dropdown-item>
            <b-dropdown-item v-show="logged" href="#">Profile</b-dropdown-item>
            <b-dropdown-item v-show="logged" href="#">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name: "header",
    computed: {
        logged: function () {
            return this.$store.state.logged;
        }
    }
}
</script>

<style scoped>
img {
    width: 20px;
}
</style>