<script lang="ts">
    import { Button } from '@sveltestrap/sveltestrap';
</script>

<Button class="custom-green">
    <span>See your Countries</span>
</Button>


<style>
    :global(.custom-green) {
        background-color: green;
        color: white;
    }
</style>

