import React from "react";
import "../css/warrant.css";
import { TbCertificate } from "react-icons/tb";
import { IoCheckmarkDone } from "react-icons/io5";

function Warrant() {
  return (
    <div className="warrant">
      <div className="warrantTitle">
        <TbCertificate className="warrantCert" />
        Öğrenme Garantisi
      </div>
      <div className="maddeler">
        <p className="madde">
          <IoCheckmarkDone className="check" />
          Zaman sınırın yok. (Kitap bitti diye kur bitmiyor, sen gerçekten
          seviyeyi tamamlayana kadar ekstra ücret ödemeden öğreniyorsun.)
        </p>
        <p className="madde">
          <IoCheckmarkDone className="check" />
          Ders kaçırma problemin yok.
        </p>
        <p className="madde">
          <IoCheckmarkDone className="check" />
          Bir sınıfın hızına değil, kendi hızına bağlı olarak Almanca
          öğreniyorsun.
        </p>
        <p className="madde">
          <IoCheckmarkDone className="check" />
          Hem GERÇEK ALMANCA hem de İSTEDİĞİN SINAVA YÖNELİK Almanca'yı bir
          arada götürüyorsun.
        </p>
        <p className="madde">
          <IoCheckmarkDone className="check" />
          Sadece bir öğretmen değil her kurda birden fazla öğretmenden destek
          alabiliyorsun.
        </p>
        <p className="madde">
          <IoCheckmarkDone className="check" />
          EĞİTİM PLATFORMU ve CANLI DERSLERDEN istediğin zaman
          faydalanabiliyorsun.
        </p>
        <p className="madde">
          <IoCheckmarkDone className="check" />
          SİSTEMATİK, BEYİN DOSTU, ALMAN EĞİTİM EKOLÜ İLE ÜRETİLMİŞ, DİSİPLİN
          gerektiren bir sisteme sahip oluyorsun.
        </p>
      </div>
    </div>
  );
}

export default Warrant;
