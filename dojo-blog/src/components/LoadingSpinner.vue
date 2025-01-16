<template>
    <div class="spin container text-center mt-5">

    </div>
</template>

<script>

</script>

<style>
.spin {
    display: block;
    width:6rem;
    height:6rem;
    border: 0.5rem solid transparent;
    border-radius: 50%;
    border-top-color: blue;
    animation: spin 1s ease infinite;
}
@keyframes spin {
    to {transform:rotateZ(360deg)}
}
</style>