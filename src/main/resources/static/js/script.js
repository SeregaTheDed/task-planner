'use strict'

function fillTable(){
    const table = document.getElementById("calendar");
    const rowCount = 5;
    const columnCount = 7;
    for (let row = 0; row < rowCount; row++) {
        let rowNode = document.createElement('tr');
        for (let column = 0; column < columnCount; column++) {
            let columnNode = document.createElement('td');
            rowNode.append(columnNode);
        }
        table.append(rowNode);
    }
}

document.addEventListener('DOMContentLoaded', ()=>
{
    fillTable();
});
