<script lang="ts">
    import { Button } from '@sveltestrap/sveltestrap';
</script>

<style>
    .flex-container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 60px);
        background-color: aqua;
    }
    .flex-container > div {
        background-color: blueviolet;
    }
</style>

<div class="flex-container">
    <div>1</div>
    <div>2</div>
</div>