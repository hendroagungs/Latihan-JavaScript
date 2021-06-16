// var mahasiswa ={
// 	nama: 'Hendro Agung Setiawan',
// 	lulus: true,
// 	IPSemester: [2.5, 2.7, 3.1, 3.6, 2.5, 3.4],
// 	alamat : {
// 		jalan: "Jalan jalan",
// 		kota: "Otak",
// 		provisi: "Rahasia"
// 	},
// 	IPKumulatif: function(){
// 		var total = 0;
// 		var ips = this.IPSemester;
// 		for(var i=0; i < ips.length; i++){
// 			total += ips[i];
// 		}
// 		return total/ips.length;
// 	}

// }
// console.log(mahasiswa.IPKumulatif());

// var orang = {
// 	nama: 'Hendro Agung',
// 	umur: 26,
// 	pekerjaan: 'IT Support',
// 	profil: function(){
// 		return 'Hi, nama saya ' + this.nama + ' usia saya' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
// 	}
// }
// console.log(orang.profil());

// Membuat Object
// // Object Literal
// var mhs1 = {
// 	nama: 'Hendro Agung Setiawan',
// 	nim: '0505050505',
// 	email: 'hendroagungs@gmail.com',
// 	jurusan: 'Teknik Informatika'
// }

// var mhs2 = {
// 	nama: 'Heni',
// 	nim: '04040404',
// 	email: 'heni@gmail.com',
// 	jurusan: 'Teknik Informatika'
// }

// // function declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan){
// 	var mhs={};
// 		mhs.nama = nama;
// 		mhs.nim = nim;
// 		mhs.email = email;
// 		mhs.jurusan = jurusan;
// 		return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Hennn', '03030303', 'hennn@gmail.com', 'Teknik Informatika');

// constructor
// function Mahasiswa(nama, nim, email, jurusan){
// 	this.nama = nama;
// 	this.nim = nim;
// 	this.email = email;
// 	this.jurusan = jurusan;
// }

// var mhs4 = new Mahasiswa('Agunggg', ' 02020202', 'agung@gmail.com', 'Teknik Informatika')

// cara 1 - function declaration
// function halo(){
// 	console.log(this);
// 	console.log('halo');
// }
// this.halo(); //this mengembalikan object global

// cara 2 - object literal
// var obj = {};
// obj.halo = function(){
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo(); //this mengembalikan objek yang bersangkutan

// cara 3 - constructor
// function Halo(){
// 	console.log(this);
// 	console.log('halo');
// }

// new Halo();
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat


// this
// var a = 10;
// console.log(window.a);
// console.log(this.a);