<script lang="ts">
    import { Button } from '@sveltestrap/sveltestrap';
</script>

<style>
    body, html {
        height: 100%;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 96px);
        background-color: aqua;
    }
    .restaurant-tags {
        background-color: blueviolet;
        flex: 0 0 15%;
    }
    .restuarant-overview {
        background-color: brown;
        flex: 1;
        display: flex;
    }
</style>

<div class="flex-container">
    <div class="restaurant-tags">1</div>
    <div class="restuarant-overview">2</div>
</div>