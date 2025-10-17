function insert_Row() {
    //Write your code here
  const tableBody=document.getElementById("sampleTable");
	// let rows=parseInt(document.querySelectorAll('tr'));
	// let length=rows.length;
	let row=document.createElement('tr');
	row.innerHTML=`
	<td>New Cell1</td>
	<td>New Cell2</td>
	`
	// tableBody.insertBefore(row,tableBody.firstElementChild);
	tableBody.appendChild(row);
  
}
