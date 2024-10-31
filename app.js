const students = [
  {
    name: "Alice Smith",
    img: "./assets/1.jfif",
    rollNumber: "001",
    batchNum: "2023A",
    skills: ["JavaScript", "React", "Node.js"],
    job: "Frontend Developer",
    description:
      "Alice is a passionate web developer who thrives on creating interactive and user-friendly web applications. She enjoys leveraging the latest technologies.",
  },
  {
    name: "Bob Johnson",
    img: "./assets/2.jfif",
    rollNumber: "002",
    batchNum: "2023A",
    skills: ["Python", "Django", "REST APIs"],
    job: "Backend Developer",
    description:
      "Bob is an enthusiastic backend developer dedicated to building robust and scalable server-side applications. His love for solving complex problems",
  },
  {
    name: "Charlie Brown",
    img: "./assets/3.jfif",
    rollNumber: "003",
    batchNum: "2023B",
    skills: ["Java", "Spring", "SQL"],
    job: "Software Engineer",
    description:
      "Charlie is a skilled software engineer with experience in developing enterprise-level applications. He is committed to delivering high-quality ",
  },
  {
    name: "Dana White",
    img: "./assets/4.jfif",
    rollNumber: "004",
    batchNum: "2023B",
    skills: ["HTML", "CSS", "JavaScript"],
    job: "Web Designer",
    description:
      "Dana is a creative web designer with a passion for aesthetics and usability. She strives to create visually appealing designs that",
  },
  {
    name: "Eve Black",
    img: "./assets/5.jfif",
    rollNumber: "005",
    batchNum: "2023C",
    skills: ["C#", ".NET", "Azure"],
    job: "Cloud Developer",
    description:
      "Eve specializes in cloud solutions and services, focusing on developing applications that leverage the power of cloud computing. Her deep.",
  },
  {
    name: "Frank Green",
    img: "./assets/6.jfif",
    rollNumber: "006",
    batchNum: "2023C",
    skills: ["PHP", "Laravel", "MySQL"],
    job: "Full Stack Developer",
    description:
      "Frank is a full stack developer passionate about creating dynamic and responsive web applications. His comprehensive knowledge of both frontend and backend.",
  },
  {
    name: "Grace Lee",
    img: "./assets/7.jfif",
    rollNumber: "007",
    batchNum: "2023D",
    skills: ["Swift", "iOS Development", "UI/UX Design"],
    job: "iOS Developer",
    description:
      "Grace is an innovative iOS developer dedicated to building intuitive mobile applications. Her strong background in UI/UX design complements her technical skills,",
  },
  {
    name: "Hank Miller",
    img: "./assets/8.jfif",
    rollNumber: "008",
    batchNum: "2023D",
    skills: ["Ruby", "Ruby on Rails", "Git"],
    job: "Software Developer",
    description:
      "Hank loves solving complex problems with elegant code and is experienced in using Ruby on Rails for web development. He is continuously .",
  },
  {
    name: "Ivy Thomas",
    img: "./assets/9.jfif",
    rollNumber: "009",
    batchNum: "2023E",
    skills: ["Data Science", "Machine Learning", "Python"],
    job: "Data Analyst",
    description:
      "Ivy is an analytical thinker with a passion for data-driven insights. Her expertise in data science and machine learning allows her.",
  },
];
let count = 0;
let changeUser = () => {
  if (count >= students.length) {
    count = 0;
  }
  let userName = document.querySelector(".name");
  userName.textContent = students[count].name;
  let userJob = document.querySelector(".job");
  userJob.textContent = students[count].job;
  let userDescription = document.querySelector(".description");
  userDescription.innerHTML = students[count].description;
  let userSkills = document.querySelector(".skill");
  userSkills.innerHTML = students[count].skills;
  let userRollNum = document.querySelector(".roll");
  userRollNum.innerText = students[count].rollNumber;
  let userBatch = document.querySelector(".batch");
  userBatch.textContent = students[count].batchNum;
  let userImg = document.querySelector("img");
  userImg.src = students[count].img;
  count++;
};
