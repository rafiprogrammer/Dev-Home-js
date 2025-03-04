
// Date Section 
let today = new Date();
let day = today.getDate(); // Get the day of the month
let month = today.getMonth() + 1; // Month index starts from 0
let year = today.getFullYear();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[today.getDay()];

document.getElementById("day").innerText = dayName;
document.getElementById("date").innerText = `${day}/${month}/${year}`; 

// Random Color 
document.getElementById('colorBtn').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
});

// Task Assigned 
const taskElement = document.getElementById('task-assign');
const completeBtn = document.querySelectorAll('.complete-btn');
const taskAvailable = document.getElementById('task-available');
const activitySection = document.getElementById('activity-section');

let completedTask = 0;
completeBtn.forEach((complete) => {
    complete.addEventListener('click', function () {
        alert('Board Update Successfully');

        let task = parseInt(taskElement.innerText) || 0; 
        if (task > 0) {
            taskElement.innerText = task - 1; 
        }
        
        let taskAll = parseInt(taskAvailable.innerText) || 0; 
        taskAvailable.innerText = taskAll + 1; 
        
        complete.disabled = true;
        complete.style.opacity = '30%';
        complete.innerText = 'Completed';

        // Display Completed Task in Activity Section
        let currentTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.classList.add("m-4", "p-2", "rounded-xl", "bg-slate-200");
        div.innerHTML = `<p>You have completed the task "${complete.innerText}" at ${currentTime}</p>`;
        activitySection.appendChild(div);

        // Clear Activity Section
        document.getElementById('clear-text').addEventListener('click', function () {
            activitySection.innerHTML = ''; // Clears all activities
        });

        completedTask++;
        if (completedTask === completeBtn.length) {
            alert('Congratulations! You have completed all the current tasks');
        }
    });
});

// Right Section - Discover Section 
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = './questen.html';
});

