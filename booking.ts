let Bookingdata: any = localStorage.getItem('data1');
if (Bookingdata) {
    Bookingdata = JSON.parse(Bookingdata);
}
console.log(Bookingdata);

class BookingDetails {
    name: string;
    email: string;
    phone: number;
    trainername: string;
    trainerexpertise: string;
    slotdate: Date;
    bookingtimefrom: string;
    bookingtimeto: string;
    exercisebooking: string;

    constructor(name: string, email: string, phone: number, trainername: string, trainerexpertise: string, slotdate: Date, bookingtimefrom: string, bookingtimeto: string, exercisebooking: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.trainername = trainername;
        this.trainerexpertise = trainerexpertise;
        this.slotdate = slotdate;
        this.bookingtimefrom = bookingtimefrom;
        this.bookingtimeto = bookingtimeto;
        this.exercisebooking = exercisebooking;
    }
}

// Set trainer name and expertise in the form input fields
let trainerNameInput = document.getElementById("trainername") as HTMLInputElement;
let trainerExpertiseInput = document.getElementById("trainerexpertise") as HTMLInputElement;

if (Bookingdata && Bookingdata.name && Bookingdata.expertise) {
    trainerNameInput.value = Bookingdata.name;
    trainerExpertiseInput.value = Bookingdata.expertise;
}

// Add event listener to the submit button
let submitbtn: any = document.getElementById("submit");
submitbtn.addEventListener("click", () => {
    // Retrieve form input values
    let name = (document.getElementById("name") as HTMLInputElement)?.value;
    let email = (document.getElementById("email") as HTMLInputElement)?.value;
    let phoneNo = Number((document.getElementById("phone") as HTMLInputElement)?.value);
    let slotDate = (document.getElementById("slotdate") as HTMLInputElement)?.value;
    let bookingTimeFrom = (document.getElementById("bookingtimefrom") as HTMLInputElement)?.value;
    let bookingTimeTo = (document.getElementById("bookingtimeto") as HTMLInputElement)?.value;
    let exerciseBooking = (document.getElementById("exercisebooking") as HTMLInputElement)?.value;

    // Validate form inputs
    let isValid = true;
    if (!name) {
        showError("name-error", "Please enter name");
        isValid = false;
    }
    if (!email) {
        showError("email-error", "Please enter email");
        isValid = false;
    }
    if (!phoneNo) {
        showError("phone-error", "Please enter phone number");
        isValid = false;
    }
    // Validate other fields similarly...

    // If form inputs are valid, create BookingDetails object and store in local storage
    if (isValid) {
        let bookingData = new BookingDetails(name, email, phoneNo, trainerNameInput.value, trainerExpertiseInput.value, slotDate, bookingTimeFrom, bookingTimeTo, exerciseBooking);
        let arr = JSON.parse(localStorage.getItem('data2') || '[]');
        arr.push(bookingData);
        localStorage.setItem('data2', JSON.stringify(arr));
        window.location.href = '../BookingDetails.html';
    }
});

// Function to show error message
function showError(elementId: string, errorMessage: string) {
    let errorElement = document.getElementById(elementId) as HTMLCanvasElement;
    if (errorElement) {
        errorElement.innerHTML = errorMessage;
        errorElement.style.color = "red";
    }
}
