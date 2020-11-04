var getfullName = function(employee)
{return employee.firstName+lastName;}
var last = employees.firstName.map(getfullName);

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getfullName)