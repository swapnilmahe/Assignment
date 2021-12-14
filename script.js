myFunction = () => {
    var tab = document.createElement('table');
tab.style.borderCollapse = "collapse";
    tab.setAttribute('Border', '1');    
    var tr = document.createElement('tr');   
 
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td'); 
    

    var text1 = document.createTextNode('Name');
    var text2 = document.createTextNode('Age')
    var text3 = document.createTextNode('email')
    var text4 = document.createTextNode('DOB')
    var text5 = document.createTextNode('Company')
    
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tab.appendChild(tr);  

    for (var i = 1; i < 5 ; i++) {
        var tr1 = document.createElement('tr');
        for (var j = 1; j < 6; j++) {

            var td6 = document.createElement('td');
            var text6 = document.createTextNode('');
            td6.appendChild(text6);
            tr1.appendChild(td6);
        }
        tab.appendChild(tr1);
    }
    document.body.appendChild(tab);

    var x = document.getElementsByTagName("td");
    for(let i in x){
        x[i].style.width="5vw";
        x[i].style.height="3.5vw";
        x[i].style.borderCollapse="collapse";
    }    
    
}