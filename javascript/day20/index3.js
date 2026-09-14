fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        let students = data.users;

        let table = document.getElementById("studentTable");

        students.forEach(student => {

            let row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.firstName} ${student.lastName}</td>
                    <td>${student.age}</td>
                    <td>Full Stack Development</td>
                    <td>${Math.floor(Math.random() * 41) + 60}</td>
                </tr>
            `;

            table.innerHTML += row;
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });