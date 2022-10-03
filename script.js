$(document).ready(function(){
    $('.cells').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_row = rid[1];
        let nama_mahasiswa = $('#nama__'+id_row).text();

        if(isi=='Delete'){
            let konfirmasi = confirm(`Yakin mau di hapus row nama ${nama_mahasiswa} ??`);
            if(!konfirmasi) return;

            $('#row__'+id_row).fadeOut();
        }else{
            alert("Aksi lain untuk cell ini belum ada")
        }
    })
})
