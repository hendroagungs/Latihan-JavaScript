// POPUPBOX
// var nama = prompt("masukan nama"); 
// console.log(nama);

// var test = confirm("kamu yakin?");
// if(test === true){
// 	alert("OKE");
// 	}
// 	else{
// 		alert("Cancel");
// }

// alert("selamat datang");
// var lagi = true;
// while (lagi===true){
// 	var nama = prompt("masukan nama");

// 	alert("halo" + nama);

// 	lagi = confirm("coba lagi?");
// }


// PENGULANGAN
// var angka = prompt("Masukan angka:");
// if (angka % 2 === 0){
// 	alert(angka + " adalah bilangan GENAP");
// } else {
// 	alert(angka + " adalah bilangan GANJIL");
// }

// var ulang = true;
// while(ulang === true){
// 	console.log('hello world');

// 	ulang=confirm("Coba lagi?")
// }

// var nilaiAwal = 1;
// while(nilaiAwal <= 5){
// 	console.log("hello world " + nilaiAwal + "x");
// 	nilaiAwal++;
// }

// LATIHAN WHILE 
// var jmlAngkot=10;
// var noAngkot=1;
// while(noAngkot <= jmlAngkot){
// 	console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
// 	noAngkot++;
// }

// LATIHAN FOR
// for (var i = 1; i <= 10; i++){
// 	console.log("Hello World "+i+"x");
// }

// var noAngkot=1;
// var angkotBeroperasi=6;
// var jmlAngkot=10;

// while(noAngkot <= angkotBeroperasi){
// 	console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
// noAngkot++;
// }

// for(angkotBeroperasi=angkotBeroperasi+1;angkotBeroperasi<=jmlAngkot;angkotBeroperasi++){
// 	console.log("Angkot No. " + angkotBeroperasi + " tidak beroperasi dengan baik");
// }

// LATIHAN IF
// var angka = 2;
// if(angka<5){
// 	alert(angka + " lebih kecil dari 5");
// }

// var noAngkot = 1;
// var angkotBeroperasi = 6;
// var jmlAngkot = 10;
// var string1="beroperasi dengan baik";
// var string2="tidak beroperasi";

// for(noAngkot;noAngkot <= jmlAngkot;noAngkot++){
// 	if(noAngkot<=angkotBeroperasi){
// 	console.log("Angkot No. " + noAngkot +" " + string1);
// 	} else{
// 		console.log ("Angkot No. " + noAngkot +" " + string2);
// 	}
// }

// LATIHAN ELSE IF
// var angka = prompt('masukan angka:');
// if(angka % 2 ==0){
// 	alert(angka + " adalah bilangan GENAP");
// } else if (angka % 2 ==1){
// 	alert(angka + " adalah bilangan GANJIL");
// } else {
// 	alert("Yang anda masukan bukan angka");
// }

// var noAngkot = 1;
// var angkotBeroperasi = 6;
// var jmlAngkot = 10;
// var str="Angkot No. ";

// for(noAngkot;noAngkot <= jmlAngkot;noAngkot++){
// 	if(noAngkot<=angkotBeroperasi && noAngkot != 5){
// 	console.log(str + noAngkot +" " + " beroperasi dengan baik");
// 	} else if(noAngkot == 8 || noAngkot == 10 || noAngkot ==5){
// 	console.log(str + noAngkot + " " + " sedang lembur");
// 	} else{
// 		console.log (str + noAngkot +" " + " sedang tidak beroperasi");
// 	}
// }


// LATIHAN SWITCH
// var item = prompt('masukan nama makanan / minuman :\n (cth: nasi, daging, susu, hamburger, softdrink');

// switch(item){
// 	case 'nasi' :
// 	case 'daging' :
// 	case 'susu' :
// 	alert ('makanan / minuman SEHAT!');
// 	break;
// 	case 'hamburger' :
// 	case 'softdrink' :
// 	alert ('makanan / minuman TIDAK SEHAT!');
// 	default :
// 	alert ('makanan / minuman tidak ada di list');
// 	break;
// }

// LATIHAN NESTED LOOP
// var s ='';
// var p = 5;

// for(var i = p; i >= 0; i--){
// 	for(var j = 0; j < p; j++){
// 		if (j>=i){
// 			s += '*';
// 		} else {
// 			s +=' ';
// 		}
// 	}
// 	s += '\n';
// }
// 	console.log(s);

// LATIHAN GAME SUIT JAWA
// var tanya = true;
// while (tanya){
// 	// menangkap pilihan player
// 	var p = prompt('pilih: gajah, semut, orang');

// 	// menangkap pilihan computer

// 	// membangkitkan bilangan random
// 	var comp = Math.random();

// 	if (comp < 0.34){
// 		comp = 'gajah';
// 	} else if (comp >= 0.34 && comp <0.67){
// 		comp = 'orang';
// 	} else {
// 		comp = 'semut';
// 	}

// 	console.log(comp);

// 	var hasil ='';
// 	// menentukan rules
// 	if (p == comp){
// 		hasil = 'SERI';
// 	} else if (p == 'gajah'){
// 		// if (comp == 'orang'){
// 		// 	hasil = 'MENANG';
// 		// } else {
// 		// 	hasil == 'KALAH';
// 		// }
// 		hasil = (comp == 'orang')? 'MENANG' : 'KALAH';
// 	} else if (p == 'orang'){
// 		// if (comp == 'gajah'){
// 		// 	hasil = 'KALAH';
// 		// } else {
// 		// 	hasil = 'MENANG';
// 		// }
// 		hasil = (comp == 'gajah')? 'MENANG' : 'KALAH';
// 	} else if (p == 'semut'){
// 		hasil = (comp == 'orang')? 'MENANG' : 'KALAH';
// 	} else {
// 		hasil = 'memasukan pilihan yang salah!';
// 	}

// 	// tampilkan hasilnya
// 	alert('Kamu memilih:' + p + ' dan Komputer memilih' + comp + '\nMaka hasilnya: kamu:' + hasil);

// tanya = confirm('coba lagi?');
// }

// alert('terimakasih sudah bermain');


// LATIHAN TEBAK ANGKA
// looping game
var tanya = true;
while (tanya){
// membangkitkan random angka 1-9
	var comp = Math.floor(Math.random()*10); //membulatkan angka hasil random menjadi 0-9
	comp +=1; //menambah 1 point jika angka yg muncul adalah 0
	if(comp ==10){ //memberikan kondisi jika angka muncul 10 dikurangi 1 agar menjadi 9
		comp -= 1;
	}
// player memasukan angka 
	alert('tebak angka dari 1-9 \nkamu punya 3 kesempatan');
		for(var i=2;i>=0;i--){ //membuat perulangan 3x kesempatan
		var p = prompt('masukan angka tebakan:');
// rules permainan tebak angka
			if(p == comp){
				alert('Anda benar \nAngka yang dicari adalah '+comp);
				i=0; //jika player benar maka i diubah menjadi 0 agar keluar dari looping
			} else if (p < comp){
				alert('TERLALU RENDAH \nAnda memiliki ' + i + ' kesempatan');
			} else if (p > comp){
				alert('TERLALU TINGGI \nAnda memiliki ' + i + ' kesempatan');
			} else{
				alert('anda masukan angka yg salah');
			}
	}
	tanya = confirm('coba lagi?'); //untuk keluar dari permainan
}
