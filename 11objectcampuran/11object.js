// https://bookshelfappsdicoding.netlify.app/



let ambildata = document.getElementById("run");
// let ambilnama = document.getElementById("Namaa").value;


// Tambahkan event saat form disubmit
ambildata.addEventListener("submit", function(event) {
    event.preventDefault(); // mencegah reload halaman



    // Ambil nilai input
    let ambilnama = document.getElementById("Namaa").value;
    // const nama = document.getElementById("nama").value;
    // const email = document.getElementById("email").value;


    // Tampilkan hasilnya
    // const output = document.getElementById("output");
    // output.textContent = `Halo ${nama}, email kamu adalah ${email}`;
    let out = document.getElementById("nama");
    out.textContent = `hasil ${ambilnama}`;

    });


// document.getElementById("nama").innerHTML = ambilnama;
