function displayDetails() {
    let detailsdisplay: any = document.getElementById('displaytable');
    detailsdisplay.innerHTML = `<tr><th>ID</th><th>Name</th><th>Trainer Name</th><th>Exercise</th><th>Slot Date</th><th>From</th><th>To</th><th colspan='2'>Action</th>`;

    let Bookingdetaildata: any = localStorage.getItem('data2');
    if (Bookingdetaildata) {
        Bookingdetaildata = JSON.parse(Bookingdetaildata);
    } else {
        return; // No booking data available
    }

    Bookingdetaildata.forEach((booking: any) => {
        let row: any = detailsdisplay.insertRow();
        let id = generateId(); // Generate unique ID for each row
        row.setAttribute("id", "row" + id);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);

        cell1.innerHTML = id;
        cell2.innerHTML = booking.name;
        cell3.innerHTML = booking.trainername;
        cell4.innerHTML = booking.exercisebooking;
        cell5.innerHTML = booking.slotdate;
        cell6.innerHTML = booking.bookingtimefrom;
        cell7.innerHTML = booking.bookingtimeto;

        let editbutton = document.createElement('input');
        editbutton.setAttribute("id", "edit" + id); // Set unique ID for edit button
        editbutton.setAttribute("class", "btn btn-primary");
        editbutton.setAttribute("type", "button");
        editbutton.setAttribute("value", "Edit");
        cell8.appendChild(editbutton);

        let cancelbutton = document.createElement('input');
        cancelbutton.setAttribute("id", "cancel" + id); // Set unique ID for cancel button
        cancelbutton.setAttribute("class", "btn btn-danger");
        cancelbutton.setAttribute("type", "button");
        cancelbutton.setAttribute("value", "Cancel");
        cancelbutton.onclick = () => {
            if (confirm("Are you sure you want to delete this booking?")) {
                row.innerHTML = "";
                // Remove the canceled booking from localStorage
                let bookings = JSON.parse(localStorage.getItem('data2'));
                let newArr = bookings.filter((b: any) => b.id !== id);
                localStorage.setItem('data2', JSON.stringify(newArr));
            }
        };
        cell9.appendChild(cancelbutton);
    });
}

function generateId() {
    let numberLength = 4;
    let charset = '0123456789';
    let number = '';
    for (let i = 0; i < numberLength; i++) {
        number += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return number;
}

displayDetails();
