<template>
    <div class="d-flex container justify-content-between text-center p-3">
        <header>
            <h1>The Dojo Blog</h1>
        </header>
        <nav>
            <router-link :to="{name:'home'}" class="p-2 fs-4">Home</router-link>
            <router-link :to="{name:'create'}" class="p-2 fs-4">Create Post</router-link>
        </nav>
    </div>
</template>

<style>
nav a {
    color: #bbb;
    text-decoration: None;
}
nav a.router-link-active {
    color: #444;
    font-weight: bold;
}
</style>