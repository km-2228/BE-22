console.log(JSON.parse(localStorage.getItem('pembelian')));
var riwayat = JSON.parse(localStorage.getItem('pembelian'));
var table = document.getElementById('riwayat-pem').innerHTML;

if(riwayat.length > 0){
    riwayat.forEach(element => {
        table.innerHTML += `
        <tr>
        <td>${element.nama_obat}</td>
        <td>${element.jumlah}</td>
        <td>${element.harga_obat}</td>
        </tr>
        `
    });
}
console.log(table);
