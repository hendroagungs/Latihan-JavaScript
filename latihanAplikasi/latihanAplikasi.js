var penumpang = [];

// penumpang naik
var tambahPenumpang = function(namaPenumpang, penumpang){
	//jika angkot kosong
	if(penumpang.length == 0){
		//tambah penumpang di awal array
		penumpang.unshift(namaPenumpang);
		//kembalikan isi array & keluar dari function
		return penumpang;
	//else
	} else
	//telusuri seluruh kursi dari awal
	for(var i = 0; i < penumpang.length; i++){
		// jika ada kursi kosong
		if(penumpang[i] == undefined){
			// tambah penumpang di kursi tersebut
			penumpang[i] = namaPenumpang;
			// kembalikan isi array & keluar dari funtion
			return penumpang;
		} 
		// jika sudah ada nama yang sama
		else if (penumpang[i]==namaPenumpang){
			// tampilkan pesan kesalahannya
			console.log(namaPenumpang + ' sudah ada di dalam angkot.')
			// kembalikan isi array & keluar dari function
			return penumpang;
		}
		// jika seluruh kursi terisi
		else if (i == penumpang.length -1) {
			// tambah penumpang di akhir array
			penumpang.push(namaPenumpang);
			// kembalikan isi array & keluar dari function
			return penumpang;
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
	if(penumpang.length == 0){
		console.log('Angkot masih kosong');
		return penumpang;
	} else {
		for(var i=0; i < penumpang.length; i++){
			if(penumpang[i] == namaPenumpang){
				penumpang[i] = undefined;
				return penumpang;
			} else if(i == penumpang.length -1){
				console.log(namaPenumpang + ' tidak ada di dalam angkot');
				return penumpang; 
			}
		}
	}
}

// membuat object angkot
function Angkot(supir, trayek, penumpang, kas){
	this.supir = supir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang, bayar){
		if(this.penumpang.length == 0){
			alert('angkot masih kosong');
			return false; //untuk keluar dari if
		}

		for(var i = 0; i < this.penumpang.length; i++){
			if(this.penumpang[i] == namaPenumpang){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}

}

var angkot1 = new Angkot('Hendro', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Agung',['Antapani','Ciroyom'],[],0);