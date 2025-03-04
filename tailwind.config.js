// // date section
// const newDate = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = newDate.toLocaleDateString('en-US', options);
// document.getElementById('date').textContent = formattedDate;

// // random theme
// const color = ['blue', 'pink', 'violet', 'orange', 'gray', 'teal', 'lite-gray', 'lite-blue']; // Fixed typo in 'violet' and 'gray'
// const body = document.getElementById('body');
// document.getElementById('color-picker').addEventListener('click', function () {
//     const randomColor = color[Math.floor(Math.random() * color.length)];
//     body.classList.remove(...color);
//     body.classList.add(randomColor);

// });


// // task assigned 

// const completedBtn = document.querySelectorAll(".px-6");
// const activitySection = document.getElementById('activity-section')
// const cardTitle = document.querySelectorAll('.card-title')
// const currentTime = new Date().toLocaleTimeString();
// const assignedTask = document.getElementById('assigned-task').innerText;
// let convertedAssignedTask = parseInt(assignedTask);

// const totalCompleted = document.getElementById('total-count');
// const taskElement = document.getElementById('assigned-task');

// for (const completeBtn of completedBtn) {
//     const eachBtn = completeBtn;
//     eachBtn.addEventListener('click', function (event) {

//         let totalFinish = parseInt(totalCompleted.innerText);
//         if(!isNaN(totalFinish)){
//             const newFinish = totalFinish + 1;
//             totalCompleted.innerText = newFinish;
//         }




//         let taskAssigned = parseInt(taskElement.innerText); 

//         if (!isNaN(taskAssigned) && taskAssigned > 0) { 
//             const newElement = taskAssigned - 1;
//             taskElement.innerText = newElement;
//         };

//         let selectBtn = event.target.parentElement.parentElement.parentElement.querySelector('.text-color.font-medium.text-2xl.mb-4.card-title');

//         alert("Board update Successfully");
//         eachBtn.classList.add("disable");
//         eachBtn.disabled = true;

        // const div = document.createElement('div');
        // div.innerHTML = `
        // <div class="m-4 p-2 rounded-xl bg-slate-200 ">
        // <p>You have completed the task ${selectBtn.innerText} at ${currentTime} </p>
        // </div>
        
        // `
        // activitySection.appendChild(div);
        // document.getElementById('clear-text').addEventListener('click', function () {

        //     div.style.display = 'none'
        // });
//         checkAllBtnDisable()
//     });
// };

// function checkAllBtnDisable() {
//     let allBtnDisable = true;
//     for (const btn of completedBtn) {
//         if (!btn.disabled) {
//             allBtnDisable = false;
//             break;
//         }
//     }
//     if (allBtnDisable) {
//         alert("Congratulation! You have completed all the current task");

//     }
// };
// document.getElementById('discover').addEventListener('click', function () {
//     window.location.href = './questen.html';
// });




