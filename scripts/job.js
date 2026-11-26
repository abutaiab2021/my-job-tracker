// console.log("Job Tracker Connected");

// ========================================
// Step 1: Job Data
// ========================================

const jobs = [
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

// ========================================
// Step 2: Current Tab
// ========================================

let currentTab = "all";

// ========================================
// Step 3: HTML Elements Selection
// ========================================

// Tab Buttons
const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

// Job Container
const jobContainer = document.getElementById("job-container");

// Dashboard Counts
const jobCount = document.getElementById("job-count");
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

// ========================================
// Step 4: Render Jobs Function
// ========================================

function renderJobs() {
  // Clear previous cards
  jobContainer.innerHTML = "";

  // Filter Jobs according to current tab
  const filterJobs = jobs.filter((job) => {
    return currentTab === "all" || job.status === currentTab;
  });

  // ======================================
  // Dashboard Count Update
  // ======================================

  const total = jobs.length;

  const interview = jobs.filter((job) => job.status === "interview").length;

  const rejected = jobs.filter((job) => job.status === "rejected").length;

  totalCount.innerText = total;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;

  // ======================================
  // Tab Count Update
  // ======================================

  allTab.innerText = `All (${total})`;

  interviewTab.innerText = `Interview (${interview})`;

  rejectedTab.innerText = `Rejected (${rejected})`;

  // Available Jobs Count
  jobCount.innerText = `${filterJobs.length} Jobs`;

  // ======================================
  // Active Tab Design
  // ======================================

  allTab.className =
    currentTab === "all" ? "btn btn-primary" : "btn btn-outline btn-primary";

  interviewTab.className =
    currentTab === "interview"
      ? "btn btn-accent"
      : "btn btn-outline btn-accent";

  rejectedTab.className =
    currentTab === "rejected" ? "btn btn-error" : "btn btn-outline btn-error";

  // ======================================
  // Empty State
  // ======================================

  if (filterJobs.length === 0) {
    jobContainer.innerHTML = `
      <div class="col-span-full text-center py-12">
        
        <img src="jobs.png" alt="" class="mx-auto" >

        <h2 class="text-2xl font-bold mt-4">
          No Jobs Available
        </h2>

        <p class="text-base-content/60 mt-2">
          No jobs found in this category.
          Please check another tab.
        </p>

      </div>
    `;

    return;
  }

  // ======================================
  // Display Job Cards
  // ======================================

  filterJobs.forEach((job) => {
    // Find original index from main jobs array
    const index = jobs.findIndex((item) => item.id === job.id);

    // Create New Card
    const card = document.createElement("div");

    // DaisyUI Card Design
    card.className =
      "card bg-base-100 shadow-xl border border-base-300 border-primary";

    // Card HTML
    card.innerHTML = `
      <div class="card-body">

        <h2 class="card-title">
          ${job.companyName}
        </h2>

        <p class="text-lg font-semibold">
          ${job.position}
        </p>

        <div class="flex flex-wrap gap-2">

          <span class="badge badge-outline">
            ${job.location}
          </span>

          <span class="badge badge-primary badge-outline">
            ${job.jobType}
          </span>

        </div>

        <p class="font-semibold text-success">
          ${job.salary}
        </p>

        <p class="text-sm text-base-content/70">
          ${job.description}
        </p>

        <div class="card-actions mt-4">

          <button
            class="btn btn-success"
            data-action="interview"
            data-id="${job.id}">
            Interview
          </button>

          <button
            class="btn btn-error"
            data-action="rejected"
            data-id="${job.id}">
            Rejected
          </button>

        </div>

      </div>
    `;

    // Insert Card into Job Container
    jobContainer.appendChild(card);
  });
}

// ========================================
// Step 5: Tab Event Listeners
// ========================================

// All Tab
allTab.addEventListener("click", function () {
  currentTab = "all";

  renderJobs();
});

// Interview Tab
interviewTab.addEventListener("click", function () {
  currentTab = "interview";

  renderJobs();
});

// Rejected Tab
rejectedTab.addEventListener("click", function () {
  currentTab = "rejected";

  renderJobs();
});

// ========================================
// Step 6: Event Delegation
// ========================================

jobContainer.addEventListener("click", function (event) {
  // Find clicked button
  const button = event.target.closest("button[data-action]");

  // Check button exists
  if (!button) {
    return;
  }

  // Get Job ID
  const jobId = Number(button.dataset.id);

  // Find selected job
  const selectedJob = jobs.find((job) => job.id === jobId);

  // Check job exists
  if (!selectedJob) {
    return;
  }

  // Get button action
  const action = button.dataset.action;

  // Update Job Status
  if (action === "interview" || action === "rejected") {
    selectedJob.status = action;

    // Refresh Dashboard
    renderJobs();
  }
});
