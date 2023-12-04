// Problem 1
const originalEmployees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true,
      },

      {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true,
      },
      
      {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false,
      },
  ];
  
  console.log(`Problem 1: ${JSON.stringify(originalEmployees)}`);
  
  // Problem 2
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [...originalEmployees],
  };
  
  console.log(`Problem 2: ${JSON.stringify(company)}`);
  
  // Problem 3
  const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
  };
  const withnewEmployees = [...company.employees, newEmployee];
  console.log(`Problem 3: ${JSON.stringify(withnewEmployees)}`);
  
  // Problem 4
  let totalSalary = withnewEmployees.reduce((total, e) => total + e.salary, 0);
  console.log(`Problem 4: ${totalSalary}`);
  
  // Problem 5
  function updateSalary(employees) {
    employees.forEach((e) => {
      if (e.raiseEligible) {
        e.salary *= 1.1;
        e.raiseEligible = false;
      }
    });
  }
  
  updateSalary(withnewEmployees);
  console.log(`Problem 5: ${JSON.stringify(withnewEmployees)}`);
  
  // Problem 6
  const workFromHome = ["Anna", "Sam"];
  withnewEmployees.forEach((e) => {
    e.workFromHome = workFromHome.includes(e.firstName);
  });
  console.log(`Problem 6: ${JSON.stringify(withnewEmployees)}`);