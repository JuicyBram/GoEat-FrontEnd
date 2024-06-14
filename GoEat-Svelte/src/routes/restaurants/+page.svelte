<script lang="ts">
    import { ListGroup, ListGroupItem, Button, Card, CardHeader, CardTitle, CardText, CardBody, CardSubtitle } from '@sveltestrap/sveltestrap';
    import { onMount } from 'svelte';

    export let restaurants: { [key: string]: any }[] = [];
    onMount(getRestaurants);

    async function getRestaurants() {
        const response = await fetch(`/restaurants`);
        if (response.ok) {
            let newRestaurants = await response.json();
            restaurants = newRestaurants;
            console.log(restaurants);
        } else {
            console.error('Failed to fetch restaurants')
        }
    }
</script>

<style>
    body, html {
        height: 100%;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 96px);
    }
    .restaurant-tags {
        flex: 0 0 15%;
    }
    .restuarant-overview {
        flex: 1;
        flex-direction: column;
        display: flex;
        padding: 10px;
    }
    .restaurant-body{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
</style>

<div class="flex-container">
    <div class="restaurant-tags">Tag placeholder</div>
    <div class="restuarant-overview">
        <ListGroup>
            <ListGroupItem style="background-color: orangered; color: white">All restaurants:</ListGroupItem>
            {#each restaurants as restaurant (restaurant.id)}
            <ListGroupItem>
                <Card>
                    <CardHeader>
                        <CardTitle>{restaurant.name}</CardTitle>
                    </CardHeader>
                        <CardBody>
                            <CardSubtitle>{restaurant.address}</CardSubtitle>
                            <div class="restaurant-body">
                                <CardText>
                                    {restaurant.description}
                                    <Button href="reservation" style="background-color: orangered; color: white">Make a reservation</Button>
                                </CardText>
                            </div>
                        </CardBody>
                </Card>
            </ListGroupItem>
            {/each}
        </ListGroup>
    </div>
</div>