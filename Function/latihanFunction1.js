// var a = prompt('masukan angka pertama');
// var b = prompt('masukan angka kedua');
// function jumlahVolumeDuaKubus(a,b){
// 	var volumeA = a * a * a;
// 	var volumeB = b * b * b;

// 	var total = volumeA + volumeB;
// 	return total;
// }
// alert(jumlahVolumeDuaKubus(a,b));

// function tambah(a,b){
// 	return a + b;
// }
// function kali(a,b){
// 	return a*b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

// LATIHAN REFACTORING
// function jumlahVolumeDuaKubus(a,b){
// 	return a * a * a + b * b * b;
// }
// alert(jumlahVolumeDuaKubus(8,3));

// SCOPE
// var a = 1;

// function tes(){
// 	var b = 2;
// 	console.log(a); //a bisa tampil karena bisa ambil variable diluar
// }

// tes();
// console.log(b); //b tidak tampil karena tidak bisa ambil variable didalam

//--------

// var a = 1;

// function tes(){
// 	// name conflict
// 	var a = 2;
// }

// tes();
// console.log(a);

//-------

// var a = 1;

// function tes(){
// 	var a = 2;
// 	console.log(window.a); //untuk bisa memanggil variable a diluar function
// }

// tes();


// //--------------------
// var a = 1;

// function tes(a){
// 	console.log(a);
// }

// tes(2); //function akan mengisi parameter dgn 2 sehingga console log pertama hasilnya akan 2
// console.log(a); //sedangkan console log kedua karena tidak memanggil function hasilnya akan tetap 1

// LATIHAN REKURSIF
// function cetakAngka(n){
// 	//base case
// 	if(n===0){
// 		return; //return tidak diberi nilai karena untuk memberhentikan function
// 	}
// 	console.log(n);
// 	cetakAngka(n-1);
// }

// cetakAngka(10);

// function faktorial(n){
// 	if(n===0) return 1; //return 1 untuk menghindari angka 0 masuk ke dalam faktorial
// 	return n*faktorial(n-1);
// }

// console.log(faktorial(5));

