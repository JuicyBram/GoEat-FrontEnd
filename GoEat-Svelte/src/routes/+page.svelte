<script>
    import { Button, Image } from '@sveltestrap/sveltestrap';
</script>

<style>
    .page-color {
        background-color: orangered;
    }

    .empty-space {
        height: 50px;
    }

    .image-container {
        background-color: orangered;
        padding: 10px;
        border-radius: 50px;
        position: relative;
    }

    :global(.img) {
        border-radius: 100px;
    }

    .h1 {
        position: absolute;
        top: 30px;
        right: 600px;
        color: black;
        font-size: 50px;
    }

    .input-button-container {
        position: absolute;
        top: 100px;
        right: 420px;
        display: flex;
        gap: 10px; /* Space between input and button */
    }

    .input {
        font-size: 20px;
        border-radius: 10px;
    }

    .search-button {
        font-size: 20px;
        border-radius: 10px;
    }
</style>

<div class="page-color">
    <div class="empty-space"></div>

    <div class="image-container">
        <Image class="img" fluid alt="This is a fluid Image" src="./src/Images/Pizza.png" />
        <h1 class="h1">GoEat</h1>
        <div class="input-button-container">
            <input class="input" type="text" placeholder="Adres, b.v. Amstelplein 10..">
            <Button href="restaurants" class="search-button">Zoek</Button>
        </div>
    </div>
</div>
<slot/>
