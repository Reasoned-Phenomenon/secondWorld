//데이터베이스 정보 -> EmpDAO - > json(서블릿) - > ajax 호출
let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    
    let data = JSON.parse(xhtp.responseText);
    //console.log(data);
    showEmpList(data);
    
}
xhtp.open('get', '../empJsonServlet.json');
xhtp.send();

function showEmpList(data) {

	//EmpDAO dao = new EmpDAO();
	
    let table, tr, td, txt;
    table = document.createElement('table');
    table.setAttribute('border','1');
    tr = document.createElement('tr');
    //title
    for ( let field in data[0]) {
        //console.log(field);
        td = document.createElement('th');
        txt = document.createTextNode(field);
        td.appendChild(txt);
        tr.appendChild(td);
    }

    td = document.createElement('th');
    td.innerHTML='삭제';
    tr.appendChild(td);

    table.appendChild(tr);
    //데이터
    for (let i=0 ; i < data.length ; i ++) {

        tr = document.createElement('tr');

        td = document.createElement('td');
        txt = document.createTextNode(data[i].empId);
        td.appendChild(txt);
        tr.appendChild(td);

        td = document.createElement('td');
        txt = document.createTextNode(data[i].lname);
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement('td');
        txt = document.createTextNode(data[i].email);
        // console.log(txt);
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement('td');
        txt = document.createTextNode(data[i].hireDate);
        // let txt2 = txt.substringData(0,11);
        // console.log(txt2);
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement('td');
        txt = document.createTextNode(data[i].job);
        td.appendChild(txt);
        tr.appendChild(td);

        td = document.createElement('td');
        let btnTag = document.createElement('button')
        btnTag.innerHTML = '삭제';
        btnTag.onclick = function () {
              this.parentNode.parentNode.remove();

           }       
        td.appendChild(btnTag);	
        tr.appendChild(td);
        
        table.appendChild(tr);
    }
    document.getElementById('show').appendChild(table);
}
		
		
	

