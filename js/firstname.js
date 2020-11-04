var getfirstName = function(employees)
{return employees.firstName;}
var last= employees.map(getfirstName)

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getfirstName)