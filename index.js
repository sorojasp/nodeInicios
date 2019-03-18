const hollidayChimch = require ("colombia-holidays");
const Http = require ("http")
const mysql = require ("mysql")


//var array = hollidayChimch.getColombiaHolidaysByYear(2017);

//console.log(array)

Http.createServer((requ,resp)=>{
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Hello World!');

}).listen(4200)



var con = mysql.createConnection({
    host: "199.79.62.144",
    user: "ingnovat_stiven",
    password: "#Ing2017",
    database: "ingnovat_prueba"
  });

 
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Personas WHERE Codigo_Persona='9090'", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
