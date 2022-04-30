<!-- Provides a jump interface for adding, deleting, and modifying functions of staff -->

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
String delete1=request.getParameter("delete");

String upid=request.getParameter("upid");
String upname=request.getParameter("upname");
String upaddress=request.getParameter("upaddress");
String upjob=request.getParameter("upjob");
String upsalary=request.getParameter("upsalary");
String updelete=request.getParameter("updelete");


if(upid!=null&&upname!=null&&upname!=""&&upid!=""){
	GuPersonal guPersonal5 = new GuPersonalDB().updatename(upid,upname);
	upname=null;
	%>
	<script>
	alert('Name Pass');
	</script>
	<% 
}
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







if((name!=null&&address!=null&&job!=null&&salary!=null)&&(name!=""&&address!=""&&job!=""&&salary!="")){
	GuPersonal guPersonal2 = new GuPersonalDB().ggetGuPersonal(name,address,job,salary);
    name=address=job=salary=null;
    %>
	<script>
	alert('Add Success');
	</script>
	<% 
}
else{
	%>
	<script>
	//alert('Null Info');
	</script>
	<% 
}

if(delete1!=null&&delete1!=""){
	GuPersonal guPersonal3 = new GuPersonalDB().deleteGuPersonal(delete1);
    delete1=null;
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
	int pageSize=15;
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

 <!--Page jump button  -->
<form action="GuPersonalApp.jsp" method="post" >
<input type="submit" value="Application Staff"  style="width:300px;height:30%;font-size:16px"/>
</form><br/>
<form action="GuPersonalDelete.jsp" method="post" >
<input type="submit" value="Dismiss Staff"  style="width:300px;height:30%;font-size:16px"/>
</form><br/>
<form action="GuPersonalUpdate.jsp" method="post" >
<input type="submit" value="Update Staff Info"  style="width:300px;height:30%;font-size:16px"/>
</form><br/>
<form action="GuPersonalSearch.jsp" method="post" >
<input type="submit" value="Search"  style="width:300px;height:30%;font-size:16px"/>
</form><br/>
<form action="GuHr.jsp" method="post" >
<input type="submit" value="Back to human resources"  style="width:200px;height:30%;font-size:16px"/>
</form><br/>
<form action="wkf.jsp" method="post" >
<input type="submit" value="MainPage"  style="width:150px;height:30%;font-size:16px"/>
 </form>

</div>

<%@ include file="/common/footer.jsp" %> 