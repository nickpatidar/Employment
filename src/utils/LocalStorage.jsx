
const employees = [  
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Submit Report",
        "taskDescription": "Prepare and submit the monthly report",
        "taskDate": "2025-02-12",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend meeting with client ABC",
        "taskDate": "2025-02-14",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 2,
    "firstname": "Rohan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review PR #345",
        "taskDate": "2025-02-13",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Write Documentation",
        "taskDescription": "Update API documentation",
        "taskDate": "2025-02-15",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 3,
    "firstname": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Bug Fix",
        "taskDescription": "Fix issue #789",
        "taskDate": "2025-02-11",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Database Cleanup",
        "taskDescription": "Remove redundant records",
        "taskDate": "2025-02-16",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 0, "failed": 1 }
  },
  {
    "id": 4,
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Server Update",
        "taskDescription": "Apply security patches",
        "taskDate": "2025-02-14",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
  },
  {
    "id": 5,
    "firstname": "Priya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Marketing Campaign",
        "taskDescription": "Launch new social media campaign",
        "taskDate": "2025-02-18",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  }
];


const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees,admin}

}

  