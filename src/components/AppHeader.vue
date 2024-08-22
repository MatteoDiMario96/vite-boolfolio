<script>
export default {
    data() {
        return {
            navLinks:[{
                "routeName": "AppHome",
                "linkName": "Home",

            },{
                "routeName": "ProjectsIndex",
                "linkName": "Projects",
            },],
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Boolfolio Vue</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="(link,index) in navLinks" :key="index" class="nav-item">
                        <router-link :to="{name: link.routeName}" class="nav-link" :class="$route.path === link.path ? 'active' : ''" aria-current="page" href="#">{{link.linkName}}</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search projects, type, technologies" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    nav a{
        color: rgb(187, 169, 169)
    }
</style>