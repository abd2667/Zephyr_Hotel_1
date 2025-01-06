document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demo purposes
    const guests = document.getElementById('guests').value;
    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;
    const rooms = document.getElementById('rooms').value;

    alert(`Booking Details:\nGuests: ${guests}\nArrival: ${arrival}\nDeparture: ${departure}\nRooms: ${rooms}`);
});
