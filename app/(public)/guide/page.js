import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="p-16 flex flex-col text-xl">
        <div className="mx-16 font-semibold text-2xl text-center">Guide to create portfolio</div>
        <div className="flex justify-center w-full mt-4 ">
          <Image src={"/guide.jpg"} className=" max-h-72 f place-content-center object-cover" width={2000} height={2000}></Image>
        </div>
        <div className="mt-8 flex-row flex justify-center mx-8">
          <a className="mx-2 text-primary font-medium" href="#1">
            Apa itu Portofolio
          </a>
          |
          <a className="mx-2 text-primary font-medium" href="#2">
            Bagaimana membuat portofolio?
          </a>
          |
          <a className="mx-2 text-primary font-medium" href="#3">
            Bagaimana mengelola portfolio?
          </a>
        </div>
        <div className="mt-8 flex-col flex justify-start mx-8" id="1">
          <div className="font-bold text-xl">Apa itu portofolio</div>
          Portofolio adalah pengalaman belajar yang Anda miliki dalam bentuk dokumen. Portofolio terdiri atas 2 bagian utama yaitu pengalaman belajar (seperti gambar, video, grafik, dan lain-lain) dan
          deskripsi atau narasi yang menceritakan pengalaman belajar tersebut atau proses pembuatannya. Penelitian ini mengasumsikan pengalaman belajar sebagai produk (aplikasi, website, game, AR/VR,
          atau bentuk prototype lainnya) yang pernah kalian buat di sekolah atau di luar sekolah.
        </div>
        <hr className="mt-4" />
        <div className="mt-8 flex-col flex justify-start mx-8" id="2">
          <div className="font-bold text-xl">Bagaimana membuat portofolio </div>
          Setelah kita mengetahui konsep portofolio dan komponen pendukung portofolio, kita dapat mengembangkan portfolio dengan mudah dengan bantuan POTOVET. POTOVET akan membuat pengembangan
          portofolio menjadi lebih mudah dan cepat. Kalian dapat mengembangkan portofolio menggunakan POTOVET dengan langkah-langkah di bawah ini.
          <ul className="mt-4 list-decimal mx-4 space-y-5">
            <li>
              Kalian dapat memilih “create a portfolio” pada fitur “portofolio”.
              <br />
              <Image src={"/panduan/1/1.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Pada menu “create a portfolio”, POTOVET akan menyediakan form yang harus kalian isi untuk membuat portfolio. Pembuatan portofolio pada POTOVET terdiri atas 3 (tiga) tahap, yaitu: (1)
              introduction, (2) process, dan (3) evaluation.
              <ul className="mx-4 list-disc">
                <li>
                  Introduction : tahap awal dari portofolio yang berisi informasi dasar mengenai proyek. Tahap ini akan menjelaskan informasi pengantar mengenai nama proyek, kategori proyek (dari mana
                  proyek didapat), waktu atau lama pembuatan proyek, posisi dalam proyek, tampilan proyek, tampilan awal proyek, dan narasi proyek berkaitan dengan pengantar pengembangan proyek.
                </li>
                <li>Process : tahapan pada portfolio yang menjelaskan bagaimana proyek itu dikembangkan dan gambaran proyek.</li>
                <li>Evaluation : tahapan pada portfolio yang menjelaskan pelajaran yang kalian peroleh, tantangan serta kesulitan selama pengembangan proyek.</li>
              </ul>
              <br />
              <Image src={"/panduan/1/2.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Setiap form pada masing-masing tahapan akan memandu kalian untuk mengisi data sesuai kebutuhan portofolio. Setiap tahap akan berisi 1 (satu) form dan kalian dapat berpindah menuju tahap
              selanjutnya dengan menekan button “next”.
            </li>
            <li>
              POTOVET akan memberi info berupa tanda merah untuk informasi yang wajib kalian isi pada form disetiap tahapan portofolio. POTOVET tidak akan melakukan perpindahan tahap jika kalian belum
              mengisikan seluruh informasi disetiap form.
              <br />
              <Image src={"/panduan/1/3.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Pada komponen deskripsi atau narasi proyek, POTOVET dilengkapi dengan fungsi “template”{" "}
              <span>
                <Image src={"/panduan/1/4.jpg"} className="w-24 object-cover" width={1000} height={1000} />
              </span>
              pada setiap form yang dapat kalian gunakan sebagai bantuan pengisian deskripsi atau narasi. Template yang disediakan bersifat flexible, kalian dapat melakukan proses edit sehingga
              deskripsi atau narasi dapat dituliskan dengan lengkap.
              <br />
              <Image src={"/panduan/1/3.1.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Setiap form pada tahap pengembangan portfolio dilengkapi dengan bantuan
              <span>
                <Image src={"/panduan/1/6.jpg"} className="w-24" width={1000} height={1000} />
              </span>
              yang dapat memudahkan kalian untuk memahami pengisian informasi.
            </li>
            <li>Portofolio telah berhasil dibuat jika kalian menekan button “submit” dan secara otomatis POTOVET akan menampilkan portfolio yang telah dibuat pada menu “ My Portfolio”.</li>
          </ul>
        </div>
        <hr className="mx-8 mt-4" />
        <div className="mt-8 flex-col flex justify-start mx-8" id="3">
          <div className="font-bold text-xl">Bagaimana mengelola portofolio </div>
          Pengelolaan portfolio adalah fitur lanjutan yang disediakan POTOVET untuk mengatur portofolio yang sudah kalian buat. Terdapat beberapa pengelolaan yang dapat kalian lakukan dalam POTOVET
          mulai pengaturan tampilan portofolio hingga mengedit portofolio yang kalian miliki. Kalian bisa mengikuti langkah-langkah berikut untuk membuat portfolio kalian mudah diakses.
          <ul className="mt-4 list-decimal mx-4 space-y-5">
            <li>
              Kalian dapat memilih “My Portfolio” untuk mengelola portofolio yang telah kalian buat.
              <br />
              <Image src={"/panduan/2/1.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Pengelolaan portofolio dapat dilakukan dengan bantuan sorting dan filtering pada fungsi list pada bagian atas tampilan portofolio.
              <br />
              <Image src={"/panduan/2/2.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Portofolio yang telah dibuat akan ditampilkan secara berjajaran dan memiliki penunjuk warna pada tanda bintang untuk mengetahui status portfolio.
              <ul className="mx-4 list-disc">
                <li>
                  Bintang dengan warna merah menunjukkan portofolio dengan status draf dan belum selesai dibuat . <br />
                  <Image src={"/panduan/2/3.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
                </li>
                <li>
                  Bintang dengan warna hijau menunjukkan portfolio dengan status selesai dibuat dan dapat dilanjutkan untuk dipublish. <br />
                  <Image src={"/panduan/2/4.jpg"} className="  place-content-center object-cover  w-16" width={2000} height={2000}></Image>
                </li>
              </ul>
            </li>
            <li>
              Pengelolaan dapat dilakukan menggunakan button “Read more” dan Icon “Privacy”, “Trash”, serta “Edit”.
              <br />
              <Image src={"/panduan/2/5.jpg"} className="  place-content-center object-cover w-1/4" width={2000} height={2000}></Image>
            </li>
            <li>
              Kalian dapat mengelola portfolio untuk dipublish dengan menekan button “Read more”.
              <br />
              <Image src={"/panduan/2/6.jpg"} className="  place-content-center object-cover w-1/12" width={2000} height={2000}></Image>
            </li>
            <li>
              Fungsi “Read more” adalah fungsi yang digunakan untuk melihat tampilan portfolio kita dengan mode online. Kalian dapat melakukan pengelolaan lain pada portofolio dengan menekan button
              “+”.
              <br />
              <Image src={"/panduan/2/8.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
              <br />
              <Image src={"/panduan/2/7.jpg"} className="  place-content-center object-cover" width={2000} height={2000}></Image>
            </li>
            <li>
              Button “+” memiliki fungsi yang berkaitan dengan penyebaran dan penyimpanan
              <br />
              <Image src={"/panduan/2/9.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
              <ul className="list-disc mx-4">
                <li>
                  Button bertanda “connection” adalah button yang menghasilkan link portfolio untuk disematkan pada tempat yang kalian tuju sehingga portofolio dapat diakses lebih luas melalui mode
                  online
                  <br />
                  <Image src={"/panduan/2/10.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
                </li>
                <li>
                  Button bertanda “printer” adalah button yang digunakan untuk mencetak portfolio dengan format PDF.
                  <br />
                  <Image src={"/panduan/2/11.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
                </li>
                <li>
                  Button bertanda “messange” adalah button yang digunakan untuk melakukan komunikasi antara user dengan external user berkaitan dengan konten portofolio yang telah publish.
                  <br />
                  <Image src={"/panduan/2/12.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
                </li>
              </ul>
            </li>
            <li>
              Kalian juga dapat mengshare portofolio yang dimiliki melalui sosial media dengan menekan icon sosial media yang dituju diatas cover proyek.
              <span>
                <Image src={"/panduan/2/13.jpg"} className="w-1/2" width={1000} height={1000} />
              </span>
            </li>
            <li>
              Portfolio online yang kalian miliki juga dapat menampilkan penilaian external user melalui fungsi “Rate this” pada laman bawah portfolio.
              <span>
                <Image src={"/panduan/2/14.jpg"} className="w-1/12" width={1000} height={1000} />
              </span>
            </li>
            <li>
              POTOVET juga dilengkapi dengan fungsi “Privasi” untuk mengelola hak akses portfolio berkaitan dengan sharing portfolio yang telah kalian buat.
              <ul className="list-disc mx-4">
                <li>
                  Hak akses “Private” memiliki fungsi untuk melindungi portofolio agar tidak dapat tampil secara online. Hanya user yang dapat melihat portofolio dengan status hak akses ini.
                  <br />
                  <Image src={"/panduan/2/15.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
                </li>
                <li>
                  Hak akses “Public” memiliki fungsi untuk membuka portofolio yang dibuat agar dapat dilihat oleh external user.
                  <br />
                  <Image src={"/panduan/2/16.jpg"} className="  place-content-center object-cover w-16" width={2000} height={2000}></Image>
                </li>
              </ul>
            </li>
            <li>
              Pengelolaan portofolio berupa perbaikan isi portofolio dengan status draf dan publish juga dapat dilakukan melalui fitur ini. Pengelolaan melalui icon “edit” akan menampilkan halaman
              yang sama dengan pembuatan portofolio pada fitur “create a portfolio”. Perbaikan yang dilakukan melalui fungsi ini dapat dilakukan secara tidak berurutan dengan cara menekan nama tahapan
              pembuatan portofolio. Setelah perbaikan selesai dilakukan kalian dapat menekan tombol save pada setiap laman yang diperbaiki.
              <span>
                <Image src={"/panduan/2/17.jpg"} className="w-1/12" width={1000} height={1000} />
              </span>
            </li>
            <li>
              Kalian juga dapat melakukan perbaikan pada portofolio yang dipublish dengan mengakses fitur “Gallery” lalu melakukan pemilihan letak proyek, kemudian melakukan perbaikan pada portofolio
              yang dipilih dengan menekan icon “edit”. Secara otomatis POTOVET akan menampilkan laman perbaikan yang sama seperti intruksi pada poin nomor 11.
              <span>
                <Image src={"/panduan/2/18.jpg"} className="w-full" width={2000} height={2000} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
