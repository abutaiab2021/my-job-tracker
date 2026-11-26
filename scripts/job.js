// console.log("job file connected");

const jobs = [
  // job 1
  {
    companyName: "Brain Station 23",
    position: "Frontend Developer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳40,000 - ৳60,000",
    description:
      "Develop modern web applications using HTML, CSS, JavaScript and React.",
    status: "all",
  },
  //   job 2
  {
    companyName: "BJIT Limited",
    position: "Junior React Developer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳35,000 - ৳50,000",
    description:
      "Build responsive frontend applications with React and JavaScript.",
    status: "all",
  },
  //   job 3
  {
    companyName: "DataSoft Systems",
    position: "Software Engineer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳40,000 - ৳60,000",
    description:
      "Work on enterprise software and database-driven applications.",
    status: "all",
  },
  //   job 4
  {
    companyName: "TigerIT Bangladesh",
    position: "Backend Developer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳50,000 - ৳70,000",
    description: "Develop backend services, APIs and database integrations.",
    status: "all",
  },
  //   job 5
  {
    companyName: "REVE Systems",
    position: "Full Stack Developer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳45,000 - ৳75,000",
    description:
      "Build full stack applications using React, Node.js and MongoDB.",
    status: "all",
  },
  //   job 6
  {
    companyName: "Enosis Solutions",
    position: "JavaScript Developer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳40,000 - ৳60,000",
    description: "Create interactive web applications and reusable components.",
    status: "all",
  },
  //   job 7
  {
    companyName: "Southtech Group",
    position: "Oracle Developer",
    location: "Dhaka",
    jobType: "Full-Time",
    salary: "৳50,000 - ৳80,000",
    description:
      "Develop enterprise applications using Oracle Database and PL/SQL.",
    status: "all",
  },
  //   job 8
  {
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

// find the contianer
const jobContainer = document.getElementById("job-container");

// get all job by using forEach loop
jobs.forEach((job) => {
  // create new card
  const card = document.createElement("div");

  // add daisy UI class name
  card.className =
    "card bg-base-100 shadow-xl border border-base-300 border-primary";

  //add card container
  card.innerHTML = `
        <div class="card-body">
          <h2 class="card-title">${job.companyName}</h2>
          <p class="text-lg font-semibold">${job.position}</p>

          <div class="flex flex-wrap gap-2">
            <span class="badge badge-outline">${job.location}</span>
            <span class="badge badge-primary badge-outline">${job.jobType}</span>
          </div>

          <p class="font-semibold text-success">${job.salary}</p>

          <p class="text-sm text-base-content/70">
            ${job.description}
          </p>

          <div class="card-actions mt-4">
            <button class="btn max-w-[80px] btn-success btn-outline flex-1 interview-btn">Interview</button>
            <button class="btn max-w-[80px] btn-error btn-outline flex-1 rejected-btn">Rejected</button>
          </div>
        </div>
`;
  // insert child card into the job container
  jobContainer.appendChild(card);
});
