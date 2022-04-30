<!-- Selection interface for dishes information -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="gu.entity.ShopUser,gu.database.ShopUserDao,java.util.List" %>    
    <body style="background-color: #97CBff"></body>
    
<%@ include file="/common/header.jsp" %>




<div align="center">
	<h1><font color=blue>Dishes Page</font></h1>
	<br/>
<h3><font color=blue>please choose the function</font></h3>
<br/>

<!--Page jump button  -->
<form action="GuWatch.jsp" method="post" >
<input type="submit" value="Browse" style="width:300px;height:60px;font-size:16px" />
</form>
<br/>

<form action="GuDishPage.jsp" method="post" >
<input type="submit" value="Dishes Management" style="width:300px;height:60px;font-size:16px"/>
</form>

<form action="GuComChange.jsp" method="post" >
<input type="submit" value="Comment Management" style="width:300px;height:60px;font-size:16px"/>
</form>

<form action="wkf.jsp" method="post" >
<input type="submit" value="MainPage"  />
</form>

</div>

<%@ include file="/common/footer.jsp" %> 