const fetchData = () => {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate a 2-second delay
    });
};

fetchData()
    .then((data) => {
        console.log(data); // Handle success
    })
    .catch((error) => {
        console.error(error); // Handle error
    });