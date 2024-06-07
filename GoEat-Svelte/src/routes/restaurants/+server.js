import { json } from '@sveltejs/kit';

export async function GET(request) {
    const response = await request.fetch(`https://goeat-api.onrender.com/restaurants`);

    if (response.ok) {
        const restaurants = await response.json();
        return json(restaurants);
    } else {
        return json({
            status: response.status,
            statusText: response.statusText
        });
    }
}