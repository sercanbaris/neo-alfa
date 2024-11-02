import "../css/videocall.css";

import { FaWhatsapp } from "react-icons/fa";

function VideoCall() {
  return (
    <div className="videocall">
      <div className="videoTitle">
        ALMANCA ÖĞENME İSTEĞİN İÇİNE TESADÜFEN DOĞMADI
      </div>
      <div className="videoTexts">
        <div className="videoText">
          Bugüne kadar kaç hayalini erteledin? Hayat koşturmacasında hangi güzel
          anları kaçırdın? Bugün kendin için her gün yaptıkların dışında ne
          yaptın?
        </div>
        <div className="videoText">
          Almanca sadece senin için Almanya'nın kapısını açan bir ANAHTAR olarak
          kalmayacak.
        </div>
        <div className="videoText">
          İlber Ortaylı'nın da dediği gibi "ALMANCA BİLMEYEN HİÇBİR ŞEY BİLMEZ".
        </div>
        <div className="videoText">
          Yeni bir dil öğrenmenin farklı kültürlere, ufuklara, dünyalara açılan
          bir kapı olduğunu, zihnimizi dinç tutan bir nimet olduğunu ancak bu
          serüvende olan
        </div>
        <div className="videoText">
          Almanca bilimin ve felsefenin dilidir. Öğreneceğin her kelimenin seni
          günlük rutininden çıkarması ve kendin için bir şeyler yapmış olmanın
          mutluluğunu vermesi dileğimizle.
        </div>
      </div>
      <a
        className="ucretsiz-gorusme"
        target="blank"
        href="https://api.whatsapp.com/send/?phone=491782483080&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
      >
        <FaWhatsapp className="whatsapp" />
        ÜCRETSİZ ÖN GÖRÜŞME İÇİN RANDEVU AL
      </a>
    </div>
  );
}

export default VideoCall;
