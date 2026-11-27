const myJobs = [
    {
        id: 1,
        companyName: "Brain Station 23",
        position: "Frontend Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳40,000 - ৳60,000",
        description:
            "Develop modern web applications using HTML, CSS, JavaScript and React.",
        status: "all",
    },
    {
        id: 2,
        companyName: "BJIT Limited",
        position: "Junior React Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳35,000 - ৳50,000",
        description:
            "Build responsive frontend applications with React and JavaScript.",
        status: "all",
    },
    {
        id: 3,
        companyName: "DataSoft Systems",
        position: "Software Engineer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳40,000 - ৳60,000",
        description:
            "Work on enterprise software and database-driven applications.",
        status: "all",
    },
    {
        id: 4,
        companyName: "TigerIT Bangladesh",
        position: "Backend Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳50,000 - ৳70,000",
        description: "Develop backend services, APIs and database integrations.",
        status: "all",
    },
    {
        id: 5,
        companyName: "REVE Systems",
        position: "Full Stack Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳45,000 - ৳75,000",
        description:
            "Build full stack applications using React, Node.js and MongoDB.",
        status: "all",
    },
    {
        id: 6,
        companyName: "Enosis Solutions",
        position: "JavaScript Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳40,000 - ৳60,000",
        description: "Create interactive web applications and reusable components.",
        status: "all",
    },
    {
        id: 7,
        companyName: "Southtech Group",
        position: "Oracle Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳50,000 - ৳80,000",
        description:
            "Develop enterprise applications using Oracle Database and PL/SQL.",
        status: "all",
    },
    {
        id: 8,
        companyName: "Kazi Software",
        position: "MERN Stack Developer",
        location: "Dhaka",
        jobType: "Full-Time",
        salary: "৳45,000 - ৳70,000",
        description:
            "Develop modern web applications using MongoDB, Express, React and Node.js.",
        status: "all",
    },
];


// console.log(myJobs)
// console.log(myJobs[0].companyName)
// console.log(myJobs[0].position)

const cardContainer = document.getElementById("job-container");
myJobs.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card card bg-base-100 w-96 shadow-sm";
    card.innerHTML = `
     <div class="card-body items-center text-center">
        <h2 class="card-title">${data.companyName}</h2>
        <p>${data.position}</p>
        <p>${data.salary}</p>
        <div class="card-actions">
         <button class="btn btn-success data-action="interview" data-id="1">Interview</button>
         <button class="btn btn-error">Rejected</button>
        </div>
    </div>
`;
    cardContainer.appendChild(card);
});

const button = document.querySelector("button");
console.log(button.dataset.action);

