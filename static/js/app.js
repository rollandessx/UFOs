showData();
d3.selectAll('input').on('change',showData);

function showData() {
    let filtered = data;
    d3.select('tbody').html('');

    d3.selectAll('input')._groups[0].forEach(({id,value})=>{
        if(value){
            filtered = filtered.filter(obj=>obj[id]==value);
        } ;
    });

    filtered.forEach(obj => {
        let row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val);
        });
    });
};