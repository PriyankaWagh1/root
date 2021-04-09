function create_table(){
    var row = document.getElementById('row').value
    var col = document.getElementById('col').value
    var body = document.body
    tbl  = document.createElement('table')
    tbl.style.width  = '120px'
    tbl.style.border = '1px solid black'
    tbl.style.margin= '10px'
    

    for(var i = 0; i < row; i++){
        var tr = tbl.insertRow()
        for(var j = 0; j < col; j++){
            var td = tr.insertCell()
            td.appendChild(document.createTextNode('Cell ' + i+j))
            td.style.border = '1px solid black'
        }
    }
    body.appendChild(tbl)
}