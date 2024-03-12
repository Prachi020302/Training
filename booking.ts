class BookingDetails {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public trainername: string,
        public trainerexpertise: string,
        public slotdate: string,
        public bookingtimefrom: string,
        public bookingtimeto: string,
        public exercisebooking: string
    ) {}
}

let submitbtn: any = document.getElementById("submit")
submitbtn.addEventListener("click", () => {
    let name = document.getElementById("name") as HTMLInputElement
    let email = document.getElementById("email") as HTMLInputElement
    let phoneNo = document.getElementById("phone") as HTMLInputElement
    let trainerName = document.getElementById("trainername") as HTMLInputElement
    let trainerExpertise = document.getElementById("trainerexpertise") as HTMLInputElement
    let slotDate = document.getElementById("slotdate") as HTMLInputElement
    let bookingTimeFrom = document.getElementById("bookingtimefrom") as HTMLInputElement
    let bookingTimeTo = document.getElementById("bookingtimeto") as HTMLInputElement
    let exerciseBooking = document.getElementById("exercisebooking") as HTMLInputElement

    let valid = true;

    // Reset error messages
    document.querySelectorAll('.error').forEach(element => {
        element.innerHTML = '';
    });

    if (!name.value) {
        showError('name', 'Please enter name');
        valid = false;
    }
    if (!email.value) {
        showError('email', 'Please enter email');
        valid = false;
    } else if (!isValidEmail(email.value)) {
        showError('email', 'Please enter a valid email');
        valid = false;
    }
    if (!phoneNo.value) {
        showError('phone', 'Please enter phone number');
        valid = false;
    } else if (!isValidPhone(phoneNo.value)) {
        showError('phone', 'Please enter a valid phone number');
        valid = false;
    }
    if (!trainerName.value) {
        showError('trainername', 'Please enter trainer name');
        valid = false;
    }
    if (!trainerExpertise.value) {
        showError('trainerexpertise', 'Please enter trainer expertise');
        valid = false;
    }
    if (!slotDate.value) {
        showError('slotdate', 'Please select slot date');
        valid = false;
    }
    if (!bookingTimeFrom.value) {
        showError('bookingtimefrom', 'Please select booking time from');
        valid = false;
    }
    if (!bookingTimeTo.value) {
        showError('bookingtimeto', 'Please select booking time to');
        valid = false;
    }
    if (!exerciseBooking.value) {
        showError('exercisebooking', 'Please enter exercise booking details');
        valid = false;
    }

    if (valid) {
        let bookingData = new BookingDetails(
            name.value, email.value, phoneNo.value, trainerName.value,
            trainerExpertise.value, slotDate.value, bookingTimeFrom.value,
            bookingTimeTo.value, exerciseBooking.value
        );
        let arr = [];
        if (localStorage.getItem('data2')) {
            arr = JSON.parse(localStorage.getItem('data2'));
        }
        arr.push(bookingData);
        localStorage.setItem('data2', JSON.stringify(arr));
        window.location.href = '../BookingDetails.html';
    }
});

function showError(field: string, message: string): void {
    let errorElement = document.getElementById(`${field}-error`) as HTMLCanvasElement;
    errorElement.innerHTML = message;
    errorElement.style.color = "red";
}

function isValidEmail(email: string): boolean {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
    // Simple phone number validation regex
    return /^\d{10}$/.test(phone);
}
