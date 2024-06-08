<script>
    let user_id = '';
    let title = '';
    let table_id = '';
    let restaurant_id = '';
    let reservation_start = '';
    let reservation_end = '';
    let phone_number = '';
    let number_of_people = 1;
    let note = '';
    let last_name = '';
    let id = '';
    let guest_user_id = '';
    let first_name = '';
    let email = '';
    let date = '';

    async function handleSubmit() {
        const createReservationDTO = {
            restaurantId: restaurant_id,
            userId: user_id,
            date: date,
            note: note,
            numberOfPeople: number_of_people,
            tableId: table_id,
            reservationStart: reservation_start,
            reservationEnd: reservation_end,
            firstName: first_name,
            lastName: last_name,
            email: email,
            phoneNumber: phone_number,
            title: title
        };

        try {
            const response = await fetch('http://goeat-api.onrender.com/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(createReservationDTO) 
            });

            if (!response.ok) {
                throw new Error('Failed to submit reservation');
            }

            console.log('Reservation submitted successfully');
        } catch (error) {
            console.error('Error submitting reservation:', error);
        }
        console.log(createReservationDTO);
    }


</script>


<style>
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    .full-width {
        grid-column: 1 / -1;
    }
</style>

<form on:submit={handleSubmit}>
    <div>
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" bind:value={first_name} />
    </div>

    <div>
        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" bind:value={last_name} />
    </div>

    <div>
        <label for="restaurant_id">Restaurant ID</label>
        <input type="text" id="restaurant_id" bind:value={restaurant_id} />
    </div>

    <div>
        <label for="user_id">User ID</label>
        <input type="text" id="user_id" bind:value={user_id} />
    </div>

    <div>
        <label for="guest_user_id">Guest User ID</label>
        <input type="text" id="guest_user_id" bind:value={guest_user_id} />
    </div>

    <div>
        <label for="date">Date</label>
        <input type="date" id="date" bind:value={date} />
    </div>

    <div>
        <label for="number_of_people">Number of People</label>
        <input type="number" id="number_of_people" bind:value={number_of_people} min="1" />
    </div>

    <div>
        <label for="table_id">Table ID</label>
        <input type="text" id="table_id" bind:value={table_id} />
    </div>

    <div>
        <label for="reservation_start">Reservation Start</label>
        <input type="text" id="reservation_start" bind:value={reservation_start} pattern="(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)" title="Please enter a valid time with seconds (HH:MM:SS)" />
    </div>

    <div>
        <label for="reservation_end">Reservation End</label>
        <input type="text" id="reservation_end" bind:value={reservation_end} pattern="(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)" title="Please enter a valid time with seconds (HH:MM:SS)" />
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} />
    </div>

    <div>
        <label for="phone_number">Phone Number</label>
        <input type="tel" id="phone_number" bind:value={phone_number} />
    </div>

    <div>
        <label for="title">Title</label>
        <input type="text" id="title" bind:value={title} />
    </div>

    <div class="full-width">
        <label for="note">Note</label>
        <textarea id="note" bind:value={note}></textarea>
    </div>

    <div class="full-width">
        <button type="submit">Submit</button>
    </div>
</form>

