function getFormvalue() {
    //Write your code here
	let result=document.querySelectorAll("input");
	let temp=result[0].value;
	let temp1=result[1].value;
	let mainresult=`${temp} ${temp1}`
	return alert(mainresult);
	

}
