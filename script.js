const wordInput = document.getElementById("wordInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

// Kamus Indonesia → Inggris (super lengkap)
const dictionary = {
  // Hari
  "senin": "monday",
  "selasa": "tuesday",
  "rabu": "wednesday",
  "kamis": "thursday",
  "jumat": "friday",
  "sabtu": "saturday",
  "minggu": "sunday",

  // Bulan
  "januari": "january",
  "februari": "february",
  "maret": "march",
  "april": "april",
  "mei": "may",
  "juni": "june",
  "juli": "july",
  "agustus": "august",
  "september": "september",
  "oktober": "october",
  "november": "november",
  "desember": "december",

  // Angka
  "satu": "one",
  "dua": "two",
  "tiga": "three",
  "empat": "four",
  "lima": "five",
  "enam": "six",
  "tujuh": "seven",
  "delapan": "eight",
  "sembilan": "nine",
  "sepuluh": "ten",
  "dua puluh": "twenty",
  "tiga puluh": "thirty",
  "seratus": "hundred",
  "seribu": "thousand",
  "sejuta": "million",

  // Warna
  "merah": "red",
  "biru": "blue",
  "kuning": "yellow",
  "hijau": "green",
  "hitam": "black",
  "putih": "white",
  "coklat": "brown",
  "abu-abu": "gray",
  "ungu": "purple",
  "oranye": "orange",
  "merah muda": "pink",
  "emas": "gold",
  "perak": "silver",

  // Hewan
  "anjing": "dog",
  "kucing": "cat",
  "burung": "bird",
  "ikan": "fish",
  "sapi": "cow",
  "kuda": "horse",
  "gajah": "elephant",
  "harimau": "tiger",
  "singa": "lion",
  "ular": "snake",
  "monyet": "monkey",
  "ayam": "chicken",
  "bebek": "duck",
  "kelinci": "rabbit",
  "paus": "whale",
  "hiu": "shark",
  "beruang": "bear",
  "serigala": "wolf",
  "rusa": "deer",
  "kura-kura": "turtle",
  "katak": "frog",

  // Makanan & Minuman
  "nasi": "rice",
  "roti": "bread",
  "daging": "meat",
  "sayur": "vegetable",
  "buah": "fruit",
  "telur": "egg",
  "keju": "cheese",
  "pizza": "pizza",
  "sup": "soup",
  "mie": "noodles",
  "kentang": "potato",
  "tomat": "tomato",
  "wortel": "carrot",
  "ayam goreng": "fried chicken",
  "ikan bakar": "grilled fish",
  "kopi": "coffee",
  "teh": "tea",
  "susu": "milk",
  "jus": "juice",
  "es krim": "ice cream",
  "air": "water",

  // Profesi
  "guru": "teacher",
  "murid": "student",
  "dokter": "doctor",
  "perawat": "nurse",
  "petani": "farmer",
  "nelayan": "fisherman",
  "polisi": "police",
  "tentara": "soldier",
  "pilot": "pilot",
  "pengacara": "lawyer",
  "arsitek": "architect",
  "penulis": "writer",
  "aktor": "actor",
  "penyanyi": "singer",
  "pelukis": "painter",
  "fotografer": "photographer",
  "programmer": "programmer",

  // Aktivitas
  "makan": "eat",
  "minum": "drink",
  "tidur": "sleep",
  "belajar": "study",
  "bermain": "play",
  "berlari": "run",
  "berjalan": "walk",
  "menulis": "write",
  "membaca": "read",
  "mendengar": "listen",
  "melihat": "see",
  "bekerja": "work",
  "memasak": "cook",
  "menyanyi": "sing",
  "menari": "dance",
  "berenang": "swim",
  "berbicara": "talk",
  "membeli": "buy",
  "menjual": "sell",
  "mendaki": "climb",
  "bersepeda": "cycle",
  "berbelanja": "shop",
  "menonton": "watch",
  "bermain bola": "play football",
  "bermain gitar": "play guitar",
  "bermain piano": "play piano",

  // Sifat
  "besar": "big",
  "kecil": "small",
  "panjang": "long",
  "pendek": "short",
  "cantik": "beautiful",
  "jelek": "ugly",
  "baik": "good",
  "buruk": "bad",
  "cepat": "fast",
  "lambat": "slow",
  "dingin": "cold",
  "panas": "hot",
  "baru": "new",
  "lama": "old",
  "mudah": "easy",
  "sulit": "difficult",
  "senang": "happy",
  "sedih": "sad",
  "marah": "angry",
  "tenang": "calm",
  "ramah": "friendly",
  "pemalu": "shy",
  "pintar": "smart",
  "bodoh": "stupid",
  "kuat": "strong",
  "lemah": "weak",
  "sehat": "healthy",
  "sakit": "sick",
  "kaya": "rich",
  "miskin": "poor",

  // Frasa umum
  "halo": "hello",
  "selamat pagi": "good morning",
  "selamat siang": "good afternoon",
  "selamat malam": "good evening",
  "selamat datang": "welcome",
  "selamat tinggal": "goodbye",
  "sampai jumpa": "see you",
  "apa kabar": "how are you",
  "terima kasih": "thank you",
  "sama-sama": "you are welcome",
  "maaf": "sorry",
  "tolong": "please",
  "permisi": "excuse me",
  "berapa harganya": "how much is it",
  "di mana": "where",
  "apa": "what",
  "siapa": "who",
  "kapan": "when",
  "mengapa": "why",
  "bagaimana": "how",

  // Kalimat percakapan
  "saya lapar": "i am hungry",
  "saya haus": "i am thirsty",
  "saya capek": "i am tired",
  "saya senang": "i am happy",
  "saya sedih": "i am sad",
  "saya sakit": "i am sick",
  "saya baik-baik saja": "i am fine",
  "saya tidak tahu": "i don't know",
  "saya mengerti": "i understand",
  "saya tidak mengerti": "i don't understand"
};

searchBtn.addEventListener("click", () => {
  const word = wordInput.value.toLowerCase().trim();

  if (!word) {
    resultDiv.textContent = "Silakan masukkan kata terlebih dahulu.";
    resultDiv.className = "result-false";
    return;
  }

  if (dictionary[word]) {
    resultDiv.textContent = `Kata "${word}" → ${dictionary[word]}`;
    resultDiv.className = "result-true";
  } else {
    resultDiv.textContent = "Tidak ada";
    resultDiv.className = "result-false";
  }
});
