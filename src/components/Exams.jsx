import "../css/exams.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import telc from "../media/telc.png";
import goethe from "../media/goethe.png";
import testdaf from "../media/testdaf.png";
import dsh from "../media/dsh.png";
import osd from "../media/osd.png";

function Exams() {
  return (
    <div className="exams">
      <div className="examsTitle">
        <AiFillSafetyCertificate />
        Almanya'da Tanınan Dil Sınavları
      </div>
      <div className="examsDecs">
        <div className="exam">
          <div className="examTitle">
            telc (The European Language Certificates):
          </div>
          <div className="examDesc">
            telc, farklı seviyelerde dil yeterliliğini ölçen uluslararası bir
            sınavdır. Genel Almanca ve mesleki Almanca gibi farklı alanlarda
            sertifikalar sunarak, çeşitli kariyer hedeflerine ulaşmak
            isteyenlere yardımcı olur.
          </div>
        </div>

        <div className="exam">
          <div className="examTitle">Goethe-Zertifikat:</div>
          <div className="examDesc">
            Goethe Enstitüsü tarafından düzenlenen Goethe-Zertifikat, A1
            seviyesinden C2 seviyesine kadar dil yeterliliğini ölçer. Bu sınav,
            genel dil bilgisi ve akademik dil becerileri için geçerlidir.
            Almanya'da yüksek öğrenim görmek veya iş bulmak isteyenler için
            yaygın olarak tercih edilmektedir.
          </div>
        </div>

        <div className="exam">
          <div className="examTitle">TestDaF:</div>
          <div className="examDesc">
            Almanya'da üniversite eğitimi alabilmesi için gerekli dil
            yeterliliğini ölçen bir sınavdır. Bu sınav, özellikle akademik
            ortamlarda başarılı olmak için gereken Almanca dil bilgisine
            odaklanır ve birçok üniversite tarafından kabul edilmektedir.
          </div>
        </div>

        <div className="exam">
          <div className="examTitle">
            DSH (Deutsche Sprachprüfung für den Hochschulzugang):
          </div>
          <div className="examDesc">
            DSH, Almanya'daki üniversitelere giriş için gerekli olan bir dil
            sınavıdır. Genellikle üniversitelerin kendileri tarafından
            düzenlenen bu sınav, yüksek öğrenim için gereken dil yeterliliğini
            ölçmektedir.
          </div>
        </div>

        <div className="exam">
          <div className="examTitle">
            ÖSD (Österreichisches Sprachdiplom Deutsch):
          </div>
          <div className="examDesc">
            Avusturya merkezli olan ÖSD sınavı, Almanya'da da kabul
            edilmektedir. A1'den C2'ye kadar farklı seviyelerde dil
            yeterliliğini ölçen bu sınav, uluslararası geçerliliği ile öne
            çıkmaktadır.
          </div>
        </div>
      </div>

      <div className="examsLogo">
        <div className="brand">
          <img
            src={telc}
            alt="     The European Language Certificates"
            className="brandPic"
          />
          <div className="brandtext"> The European Language Certificates</div>
        </div>
        <div className="brand">
          <img src={goethe} alt="Goethe Institut" className="brandPic" />
          <div className="brandtext">Goethe Institut</div>
        </div>
        <div className="brand">
          <img
            src={testdaf}
            alt="Test Deutsch als Fremdsprache"
            className="brandPic"
          />
          <div className="brandtext">Test Deutsch als Fremdsprache</div>
        </div>
        <div className="brand">
          <img
            src={dsh}
            alt=" Deutsche Sprachprüfung für den Hochschulzugang"
            className="brandPic"
          />
          <div className="brandtext">
            {" "}
            Deutsche Sprachprüfung für den Hochschulzugang
          </div>
        </div>
        <div className="brand">
          <img
            src={osd}
            alt="Österreichisches Sprachdiplom Deutsch"
            className="brandPic"
          />
          <div className="brandtext">Österreichisches Sprachdiplom Deutsch</div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
