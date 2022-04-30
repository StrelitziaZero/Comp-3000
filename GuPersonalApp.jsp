<!-- Interface for adding staff -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="gu.database.GuPersonalDB,gu.entity.ShopUser,gu.entity.GuPersonal,java.util.List" %>
<%@ include file="/common/header.jsp" %>
<body style="background-color: #97CBff">



</body>
<%

//Declare all variables used on this page

String name=request.getParameter("name");
String address=request.getParameter("address");
String job=request.getParameter("job");
String salary=request.getParameter("salary");
String delete=request.getParameter("delete");

String upid=request.getParameter("upid");
String upname=request.getParameter("upname");
String upaddress=request.getParameter("upaddress");
String upjob=request.getParameter("upjob");
String upsalary=request.getParameter("upsalary");
String updelete=request.getParameter("updelete");

//ADD method, name
if(upid!=null&&upname!=null&&upname!=""&&upid!=""){
	GuPersonal guPersonal5 = new GuPersonalDB().updatename(upid,upname);
	upname=null;
	%>
	<script>
	alert('Name Pass');
	</script>
	<% 
}

//ADD method, address
if(upid!=null&&upaddress!=null&&upaddress!=""&&upid!=""){
	GuPersonal guPersonal6 = new GuPersonalDB().updateaddress(upid,upaddress);
	upaddress=null;
	%>
	<script>
	alert('Address Pass');
	</script>
	<% 
}
if(upid!=null&&upjob!=null&&upjob!=""&&upid!=""){
	GuPersonal guPersonal7 = new GuPersonalDB().updatejob(upid,upjob);
	upjob=null;
	%>
	<script>
	alert('Job Pass');
	</script>
	<% 
}
if(upid!=null&&upsalary!=null&&upsalary!=""&&upid!=""){
	GuPersonal guPersonal8 = new GuPersonalDB().updatesalary(upid,upsalary);
	upsalary=null;
	%>
	<script>
	alert('Salary Pass');
	</script>
	<% 
}
upid=upname=upaddress=upjob=upsalary=null;







if(name!=null&&address!=null&&job!=null&&salary!=null){
	GuPersonal guPersonal2 = new GuPersonalDB().ggetGuPersonal(name,address,job,salary);
    name=address=job=salary=null;
    %>
	<script>
	alert('Add Success');
	</script>
	<% 
}

if(delete!=null){
	GuPersonal guPersonal3 = new GuPersonalDB().deleteGuPersonal(delete);
    delete=null;
    %>
	<script>
	alert('Delete Success');
	</script>
	<% 
}

//LOGIN, Method for identifying user login status
ShopUser shopUser =(ShopUser) session.getAttribute("user");
if(shopUser==null&&session.getAttribute("user3")==null)
{
	%>
	<script>
	alert('Need login');
	</script>
	<% 
	response.sendRedirect("login2.jsp");
	return;
}

//Method and database statement for displaying information in database, dish list
    GuPersonalDB guPersonalDB = new GuPersonalDB();
	String sql = "select * from personal  order by id desc";
	int pageNo=1;
	int pageSize=10;
	List<GuPersonal> guPersonalList = guPersonalDB.searchGuPersonal(sql,pageNo,pageSize);
	//out.println(buyCartList.size());
	out.println("<h2><font color=blue>Personal</font></h2>");
%>
<div align="center">
<form action="GuPersonalPage.jsp" method="post" >
<table class="table" align="center">
<tr>
<!-- The header of the output list -->
<th>ID</th>
<th>Name</th>
<th>Address</th>
<th>Job</th>
<th>Salary RMB/Month</th>
</tr>
<!--Loop through the information in the database  -->
<%
 for(GuPersonal guPersonal : guPersonalList )
 {
 %>
<tr>


<td><%=guPersonal.getId() %></td>
<td><%=guPersonal.getName() %></td>
<td><%=guPersonal.getAddress()%></td>
<td><%=guPersonal.getJob() %></td>
<td><%=guPersonal.getSalary()%></td>


</tr>

<%} %>


</table>
</form>
<% out.println("<h3><font color=blue>Application</font></h3>");%>

<form action="GuPersonalPage.jsp" method="post" >
<table>

<!-- Add information input control for staff -->
<tr>
<td>NAME</td>
<td><input name="name" /></td>
</tr>

<tr>
<td>ADDRESS</td>
<td><input name="address" /></td>
</tr>

<tr>
<td>JOB</td>
<td><input name="job" /></td>
</tr>

<tr>
<td>SALARY RMB/Month</td>
<td><input name="salary" type="number"/></td>
</tr>
<tr>
 <td>
 <input type="submit" value="Application" /></td>
 </tr>
 </table>
 </form>
 <br/>
 
 <!-- submit button -->
<form action="GuPersonalPage.jsp" method="post" >
<input type="submit" value="Back" />
</form>
 <br/>
 <form action="wkf.jsp" method="post" >
<input type="submit" value="MainPage" />
</form>
 <br/>

</div>

<%@ include file="/common/footer.jsp" %> 