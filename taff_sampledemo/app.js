const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kiruthiga@123",
    database : "rvjaj"
});

//to create database
// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");

//     conection.query("CREATE DATABASE rvjajK", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });
// });

//to create table
// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");

//     conection.query("Create table students (student_id int, student_name varchar(200),student_city varchar(200))", function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });

// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql = "insert into students (student_id,student_name,student_city) values (1,'Raju','Thuraiyur')";
//     conection.query("Create table marks (student_id int, student_grade varchar(200))", function (err, result) {
//         if (err) throw err;
//         console.log("Table marks created");
//     });
// });
//single values insert

// conection.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected");
//         var sql = "insert into students (student_id,student_name,student_city) values (1,'Raju','Thuraiyur')";
//         conection.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("Values added Succesfully");
//         });
//     });

//multiple values insert
// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql = "insert into students (student_id,student_name,student_city) values ?";
//     var values = [
//         [2,'indhu','keralam'],
//         [3,'Anu krithika Tejaswi','keralam'],
//     ]
//     conection.query(sql,[values], function (err, result) {
//         if (err) throw err;
//         console.log("multiple vales added/inserted Succesfully");
//     });
// });
// marks added
// conection.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected");
//         var sql = "insert into marks (student_id,student_grade) values ?";
//         var values = [
//             [1,'A'],
//             [1,'B'],
//             [1,'A'],
//             [2,'B'],
//             [2,'A'],
//             [2,'B'],
//             [3,'C'],
//             [3,'B'],
//             [3,'A'],
//         ];
//         conection.query(sql,[values], function (err, result) {
//             if (err) throw err;
//             console.log("multiple vales added/inserted Succesfully");
//         });
//     });

//
// conection.connect(function (err) {
//             if (err) throw err;
//             console.log("Connected");
//             var sql = "select * from students";
//             var values = [
//                 [1,'A'],
//                 [1,'B'],
//                 [1,'A'],
//                 [2,'B'],
//                 [2,'A'],
//                 [2,'B'],
//                 [3,'C'],
//                 [3,'B'],
//                 [3,'A'],
//             ];
//             conection.query(sql,[values], function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//             });
//         });

// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql = "select * from students";
//     conection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql1 = "select * from marks where student_grade='A'";
//     conection.query(sql1, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// conection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql1 = "select * from marks where student_grade='A' decs";
//     conection.query(sql1, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// var sql1 = "select student_name as name, student_grade as grade from students join marks on students.student_id=marks.student_id";
//         conection.query(sql1, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });

//value updation

// var sql1 = "update students set student_city='Trichy' where student_city='Thuraiyur' ";
//         conection.query(sql1, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });
//grouping
// var sql1 = "select student_grade,count(student_id) from marks group by student_grade order by count(student_id)";
//         conection.query(sql1, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });

//delete from students 
// var sql1 = "delete from students where student_id > 4";
//         conection.query(sql1, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });

//drop the table
var sql1 = "drop table marks";
        conection.query(sql1, function (err, result) {
            if (err) throw err;
            console.log(result);
        });