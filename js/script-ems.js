// CREATE AN ARRAY OF EMPLOYEES
let employees =[
                [12345678, 'Mark Ruban', 1234, 'mark@gmail.com', 'Executive'],
                [23456781, 'Sally Hansen', 3478, 'sally@gmail.com', 'Sales'],
                [34567812, 'Jessica Jones', 5634, 'jessica@gmail.com', 'Administrative'],
                [45678123, 'Fred Johnson', 4512, 'fred@gmail.com', 'Engineering'],
                [56781234, 'William Smith', 9898, 'william@gmail.com', 'Marketing']];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(localStorage.getItem('employees') !== null) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
let form        = document.getElementById('addForm');
let empTable    = document.getElementById('empTable');
let empCount    = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id          = parseInt(document.querySelector('#id').value);
    let name        = document.querySelector('#name').value;
    let extension   = parseInt(document.querySelector('#extension').value);
    let email       = document.querySelector('#email').value;
    let department  = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp      = [id,name, extension, email, department];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp);
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
    if(confirm(`Are you sure you want to delete?`)) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex;
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex-1, 1);
        // BUILD THE GRID
        buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    document.querySelector('tbody').innerHTML = '';
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = '';
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let emp of employees) {
        tbody += `<tr><td>${emp[0]}</td>
                    <td>${emp[1]}</td>
                    <td>${emp[2]}</td>
                    <td>${emp[3]}</td>
                    <td>${emp[4]}</td>
                    <td><button class='btn btn-danger btn-sm float-right delete'>X</button></td>
                </tr>`;
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    document.querySelector('tbody').innerHTML = tbody;
    // UPDATE EMPLOYEE COUNT
    empCount.value = employees.length;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};