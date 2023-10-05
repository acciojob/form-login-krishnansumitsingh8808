function getFormvalue() {
    //Write your code here
	let result=document.getElementByTagName("input");
	let temp=result[0].innerHTML;
	let temp1=result[1].innerHTML;
	let mainresult=`${temp} ${temp1}`
	return alert(mainresult);
	

}
