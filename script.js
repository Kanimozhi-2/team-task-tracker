window.onload = () => renderTask()
let Tasks = [] //EMPTY ARRAY FOR STORING DATA WHERE ITS DATA GET FROM ADD TASk SECTION ** IN THiS PROJECT WE USE THIS ARRAY AS A DATA BASE



function addTask() {  //FUNCTION THATS ADD TASk TO THE ABOVE ARAAY 

  //GETTING TASK INPUTS
  const getTask = document.getElementById('task')
  const getStartDate = document.getElementById('start-date')
  const getFinalDate = document.getElementById('final-date')
  const getDes = document.getElementById('des')

  if (getTask.value === '' || getStartDate.value == '' || getFinalDate.value == '' || getDes.value == '') {  
    alert("ALL FIELD ARE REQUIRED")
    return
  }


  Tasks.push({
    id: Date.now(),
    task: getTask.value,
    task_start_date: getStartDate.value,
    task_final_date: getFinalDate.value,
    task_des: getDes.value,
    status: 'pending',
    conpleted: 'false'
  })
  console.log(Tasks)
  renderTask()

}



//creating Task lists

function renderTask() {
  const taskList = document.getElementById('add-task-list')
  taskList.innerHTML = ''

  //SHOW ALL TASKS TO THE ADMIN
  Tasks.forEach((task, index) => {
    const li = document.createElement('li')

    const taskNo = document.createElement('h2')
    taskNo.textContent = index + 1

    const taskData = document.createElement('h2')
    taskData.textContent = task.task

    const status = document.createElement('h2')
    status.textContent = task.status

    const startDate = document.createElement('h2')
    startDate.textContent = task.task_start_date

    const finalDate = document.createElement('h2')
    finalDate.textContent = task.task_final_date

    const div = document.createElement('div')


    const upBtn = document.createElement('button')
    upBtn.className = 'update-btn'
    upBtn.textContent = "EDIT"
    upBtn.onclick = () => update(task)
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = "DELETE"
    deleteBtn.onclick = () => deleteTask(task.id) // DELETE FUNCTION CALLING

    //ADDING HTML ELEMENTS IN LIST 
    li.appendChild(taskNo)
    li.appendChild(taskData)
    li.appendChild(status)
    li.appendChild(startDate)
    li.appendChild(finalDate)
    div.appendChild(upBtn)
    div.appendChild(deleteBtn)
    li.appendChild(div)

    //ADDING CHILD ELELMENT  INTO  PARENT  ELEMENT  
    taskList.appendChild(li)
  })

}


//UPDATE TASK FROM ADIM
function update(task) {
  document.getElementById('utask').value = task.task;
  document.getElementById('ustart-date').value = task.task_start_date;
  document.getElementById('ufinal-date').value = task.task_final_date;
  document.getElementById('udes').value = task.task_des
  document.querySelector('#task-updater').style.visibility = 'visible';
  document.querySelector('#uadd').onclick = () => setUpdateTasks(task)

}




function setUpdateTasks(task) {
  const utask = document.getElementById('utask').value
  const startDate = document.getElementById('ustart-date').value
  const finalDate = document.getElementById('ufinal-date').value
  const description = document.getElementById('udes').value
  const index = Tasks.findIndex(tsk => tsk.id === task.id)
  Tasks[index] = { // getting index to update the particular object 
    ...Tasks[index],
    task: utask,
    task_start_date: startDate,
    task_final_date: finalDate,
    task_des: description,

  }

  document.querySelector('#task-updater').style.visibility = 'hidden';
  renderTask() // again  call the render function which change the state 

}

//DELETE TASK FROM ADMIN
function deleteTask(id) {
  Tasks = Tasks.filter((item) => {
    return id !== item.id
  })
  renderTask()
}



//OPEN ADDERBOX FOR ADDING NEW TASK
openTaskAdder = () => {
  const adderBox = document.querySelector('#task-adder')
  adderBox.style.visibility = 'visible'

}


//CLOSE ADDERBOX 
function closeAdder() {
  const adderBox = document.querySelector('#task-adder')
  const UpdaterBox = document.querySelector('#task-updater')
  UpdaterBox.style.visibility = 'hidden'
  adderBox.style.visibility = 'hidden'
}







