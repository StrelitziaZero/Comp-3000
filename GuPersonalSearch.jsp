<!-- Interface for search staff -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="gu.database.GuPersonalDB,gu.entity.ShopUser,gu.entity.GuPersonal,java.util.List" %>
<%@ include file="/common/header.jsp" %>
<body style="background-color: #97CBff">



</body>
<%
//Declare all variables used on this page
String bb=request.getParameter("aa");
String cc=request.getParameter("bb");
String username=request.getParameter("username");
String password=request.getParameter("password");
String names=request.getParameter("names");
String sex=request.getParameter("sex");
String address=request.getParameter("address");
String phone=request.getParameter("phone");
String delete=request.getParameter("delete");
String searchuser=request.getParameter("searchuser");
String searchevery=request.getParameter("searchevery");
String searchvalue=request.getParameter("searchvalue");

String upid=request.getParameter("upid");
String upusername=request.getParameter("upusername");
String uppassword=request.getParameter("uppassword");
String upname=request.getParameter("upname");
String upsex=request.getParameter("upsex");
String upaddress=request.getParameter("upaddress");
String upphone=request.getParameter("upphone");

String updelete=request.getParameter("updelete");
String abc="shop_user";

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
	
//Method and database statement for displaying information in database
		GuPersonalDB guPersonalDB = new GuPersonalDB();
		List<GuPersonal> guPersonalList = guPersonalDB.searchchaGuPersonal(searchuser,cc,searchvalue,bb);
	
		//out.println(buyCartList.size());
		out.println("<h2><font color=blue>Search</font></h2>");
		

		
		

	%>	
<form action="GuPersonalSearch.jsp" method="post" >
<table>
<!-- Choice of the first condition -->
<tr>
<td>Select field you  want to search with</td>
<td>
<select name="aa" id="aa" style="width:240px" >
<option value="name" }>Name</option>
<option value="address" }>Adddress</option>
<option value="job">Job</option>
<option value="salary">Salary</option>
</select></td></tr>
<!-- The information input control of the selection control -->
	<tr>
<td>Input the value that you want to search: <input name="searchuser"/></td>
</tr>


<tr>
<td>And select the another field you  want to search with</td>
<td>
<select name="bb" id="bb" style="width:240px" >
<option value="name" }>Name</option>
<option value="address" }>Adddress</option>
<option value="job">Job</option>
<option value="salary">Salary</option>
</select></td></tr>

	<tr>
<td>The value of this field: <input name="searchvalue"/></td>
</tr>

<tr>
 <td>
 <input type="submit" value="Search" /></td>
 </tr>
 </table>
 </form>
 <br/>
	<div align="center">
<form action="GuPersonalPage.jsp" method="post" >
<table class="table" align="center">
<tr>
<th>ID</th>
<th>Name</th>
<th>Address</th>
<th>Job</th>
<th>Salary RMB/Month</th>
</tr>

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
<tr>
<td>
<form action="GuPersonalPage.jsp" method="post" >
<input type="submit" value="Back"  style="width:300px;height:30%;font-size:16px"/>
</form>

<form action="wkf.jsp" method="post" >
<input type="submit" value="Go To MainPage"  style="width:300px;height:30%;font-size:16px"/>
 </form>
 </td>
</tr>
</div>

<%@ include file="/common/footer.jsp" %> 