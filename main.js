const canvas = document.getElementById("site-bg") || document.getElementById("ai-bg");

if (canvas) {
  const ctx = canvas.getContext("2d");
  const particles = [];
  const particleCount = 120;

  if (ctx) {
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles.length = 0;

      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        ctx.fillStyle = "rgba(255, 215, 0, 0.4)";
        ctx.fillRect(particle.x, particle.y, 2, 2);
      });

      requestAnimationFrame(animate);
    }

    resizeCanvas();
    createParticles();
    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    animate();
  }
}

/* Language toggle + content data */

const defaultLanguage = "en";
let currentLanguage = defaultLanguage;

const translations = {
  tr: {
    "common.logoAlt": "SRT TRADE logosu",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımızda",
    "nav.services": "Hizmetler",
    "nav.contact": "İletişim",
    "hero.title": "Sınır Tanımayan Küresel Ticaret",
    "hero.lead": "Profesyonel ithalat-ihracat, tedarik, uyum desteği ve küresel ticaret yönetimi.",
    "hero.cta": "İş Birliği Başlat",
    "hero.secondary": "Hizmetleri Görüntüle",
    "footer.note": "Acil tedarik, satın alma ve uluslararası ticaret talepleri için ekibimiz 7/24 doğrudan yanıt desteği sunmaktadır.",
    "footer.call": "7/24 Doğrudan Arama",
    "home.meta.title": "SRT TRADE | Küresel İthalat İhracat",
    "home.meta.description": "İstanbul merkezli SRT TRADE IÇ VE DIŞ TİCARET A.Ş küresel ithalat ihracat şirketi",
    "home.meta.keywords": "ithalat ihracat şirketi, uluslararası ticaret, lojistik, tedarik",
    "home.intro.eyebrow": "Kurumsal Profil",
    "home.intro.title": "Şirket Genel Bakışı",
    "home.intro.body": "İthalat-ihracat şirketi, çok sayıda sektörde malların küresel tedariki, dağıtımı ve taşınması alanlarında faaliyet gösteren uluslararası bir ticaret ve tedarik zinciri yönetimi kuruluşudur.",
    "home.overview.title": "Stratejik Aracı",
    "home.overview.tag": "Genel Bakış",
    "home.overview.body": "Şirket, üreticiler, imalatçılar, distribütörler ve uluslararası alıcılar arasında stratejik bir aracı olarak faaliyet gösterir; verimli sınır ötesi ticaret ve güvenilir ürün tedariki sağlar.",
    "home.model.title": "Operasyonel Model",
    "home.model.tag": "Ağ",
    "home.model.body": "Yapılandırılmış küresel tedarikçi, lojistik ortağı ve ticari temsilci ağı sayesinde şirket; uluslararası satın alma, sözleşme müzakeresi, kargo taşımacılığı ve mevzuat uyumunu şeffaflık, verimlilik ve uzun vadeli ticari ortaklık odağıyla yönetir.",
    "home.value.title": "Ticari Değer",
    "home.value.tag": "Amaç",
    "home.value.body": "Şirket, pazar uzmanlığını lojistik koordinasyonuyla birleştirerek işletmelerin uluslararası ticaretle ilişkili operasyonel riskleri azaltırken küresel tedarik zincirlerine erişmesini sağlar.",
    "home.reach.title": "Uluslararası Erişim",
    "home.reach.tag": "Pazarlar",
    "home.reach.asia": "Asya",
    "home.reach.europe": "Avrupa",
    "home.reach.middleEast": "Orta Doğu",
    "home.reach.africa": "Afrika",
    "home.reach.northAmerica": "Kuzey Amerika",
    "home.reach.latinAmerica": "Latin Amerika",
    "home.activities.eyebrow": "Temel Faaliyetler",
    "home.activities.title": "Profesyonel İthalat-İhracat Hizmetleri",
    "home.trading.title": "Uluslararası Ticaret",
    "home.trading.body": "Şirket, toptancıları, distribütörleri, perakendecileri ve endüstriyel alıcıları destekleyerek uluslararası pazarlar arasında ürünlerin satın alınması, satılması ve dağıtımını kapsayan küresel ticaret operasyonları yürütür.",
    "home.trading.item1": "Küresel ürün tedariki",
    "home.trading.item2": "İhracat ve ithalat operasyonları",
    "home.trading.item3": "Tedarikçi ve alıcı sözleşme yönetimi",
    "home.trading.item4": "Uluslararası dağıtım anlaşmaları",
    "home.trading.item5": "Toplu emtia ve tüketim malları ticareti",
    "home.sourcing.title": "Stratejik Küresel Tedarik",
    "home.sourcing.body": "Şirket, rekabetçi tedarikçilere ve üretim kapasitesine erişim sağlamak için dünyanın önde gelen sanayi ve üretim bölgelerindeki imalatçılar ve üreticilerle iş birliği yapar.",
    "home.sourcing.item1": "Üretici tespiti ve doğrulaması",
    "home.sourcing.item2": "Tedarikçi durum tespiti",
    "home.sourcing.item3": "Üretim takibi",
    "home.sourcing.item4": "Sözleşme müzakeresi ve satın alma yönetimi",
    "home.sourcing.item5": "Özel marka ve OEM tedariki",
    "home.advantages.eyebrow": "Avantajlar",
    "home.advantages.title": "Rekabet Avantajları",
    "home.adv1.title": "Küresel Tedarikçi Ağı",
    "home.adv1.body": "Uluslararası pazarlardaki doğrulanmış imalatçılar ve üreticilerle doğrudan iş birliği.",
    "home.adv2.title": "Ticaret ve Lojistik Uzmanlığı",
    "home.adv2.body": "Uluslararası ticaret mevzuatı, gümrük prosedürleri ve küresel lojistik ağları konusunda derin operasyonel bilgi.",
    "home.adv3.title": "Operasyonel Şeffaflık",
    "home.adv3.body": "Uluslararası kabul görmüş ticaret standartlarına dayalı yapılandırılmış işlem süreçleri.",
    "home.adv4.title": "Güvenilir Tedarik Zincirleri",
    "home.adv4.body": "Güvenli kargo teslimatı için istikrarlı tedarik kanalları ve koordine edilmiş lojistik operasyonları.",
    "home.adv5.title": "Profesyonel Ticaret Yönetimi",
    "home.adv5.body": "Satın alma, taşımacılık, dokümantasyon ve uyum süreçlerini kapsayan entegre destek.",
    "home.adv6.title": "Misyon ve Vizyon",
    "home.adv6.body": "Bugün güvenilir küresel ticaret, yarın güvene dayalı uzun vadeli uluslararası ortaklıklar.",
    "about.meta.title": "Hakkımızda | SRT TRADE",
    "about.hero.eyebrow": "Kurumsal Profil",
    "about.title": "Şirket Hakkında",
    "about.body": "SRT TRADE IÇ VE DIŞ TİCARET ANONİM ŞİRKETİ, küresel tedarik, mevzuat uyumu ve pazara giriş koordinasyonuna odaklanan, İstanbul merkezli uluslararası bir ticaret şirketidir.",
    "about.portfolio.title": "Ürün Portföyü",
    "about.portfolio.tag": "Kapsam",
    "about.portfolio.item1": "Tarımsal emtialar",
    "about.portfolio.item2": "Kahve ve gıda ürünleri",
    "about.portfolio.item3": "Tüketim malları",
    "about.portfolio.item4": "Tekstil ve hazır giyim ürünleri",
    "about.portfolio.item5": "Elektronik ve aksesuarlar",
    "about.portfolio.item6": "Endüstriyel malzemeler ve ekipmanlar",
    "about.portfolio.item7": "Ambalaj ürünleri ve hammaddeler",
    "about.presence.title": "Küresel Pazar Varlığı",
    "about.presence.tag": "Kapsam",
    "about.presence.body": "Şirket; Asya, Avrupa, Orta Doğu, Afrika, Kuzey Amerika ve Latin Amerika'daki önemli uluslararası pazarlarda ticari faaliyetlerini sürdürmektedir. Stratejik lojistik koridorları ve uluslararası navlun hatları aracılığıyla tedarikçiler ve alıcılar küresel pazarlarda birbirine bağlanmaktadır.",
    "about.qa.title": "Kalite Güvencesi ve Risk Kontrolü",
    "about.qa.tag": "Kalite",
    "about.qa.item1": "Sevkiyat öncesi denetimler",
    "about.qa.item2": "Fabrika denetimleri",
    "about.qa.item3": "Miktar doğrulaması",
    "about.qa.item4": "Ambalaj uygunluk kontrolleri",
    "about.qa.item5": "Gerektiğinde ürün testleri",
    "about.principles.title": "Kurumsal İlkeler",
    "about.principles.tag": "Değerler",
    "about.principles.body": "Tüm ticaret faaliyetleri; şeffaflık, verimlilik ve uzun vadeli ticari ortaklıklar temelinde yapılandırılarak satın alma riskini azaltır ve müşteriler için tedarik zinciri görünürlüğünü güçlendirir.",
    "about.mission.title": "Kurumsal Misyon",
    "about.mission.tag": "Misyon",
    "about.mission.body": "Profesyonel tedarik, lojistik koordinasyonu ve tedarik zinciri yönetimi aracılığıyla küresel üreticiler ile alıcıları buluşturarak güvenilir uluslararası ticareti kolaylaştırmak.",
    "about.vision.title": "Kurumsal Vizyon",
    "about.vision.tag": "Vizyon",
    "about.vision.body": "Operasyonel mükemmeliyet, pazar uzmanlığı ve uzun vadeli uluslararası ortaklıklarla tanınan güvenilir bir küresel ticaret ortağı olmak.",
    "services.meta.title": "Hizmetler | SRT TRADE",
    "services.hero.eyebrow": "Operasyonlar",
    "services.title": "Hizmetlerimiz",
    "services.lead": "Temel iş faaliyetleri uluslararası ticaret, stratejik küresel tedarik, lojistik yönetimi, ticari uyum ve kalite kontrolü etrafında yapılandırılmıştır.",
    "services.trading.title": "Uluslararası Ticaret",
    "services.trading.tag": "Ticaret",
    "services.trading.body": "Şirket, uluslararası pazarlar arasında ürünlerin satın alınması, satılması ve dağıtımını kapsayan küresel ticaret operasyonları yürütür. Bu faaliyetler; toptancıları, distribütörleri, perakendecileri ve endüstriyel alıcıları destekler.",
    "services.trading.item1": "Küresel ürün tedariki",
    "services.trading.item2": "İhracat ve ithalat operasyonları",
    "services.trading.item3": "Tedarikçi ve alıcı sözleşme yönetimi",
    "services.trading.item4": "Uluslararası dağıtım anlaşmaları",
    "services.trading.item5": "Toplu emtia ve tüketim malları ticareti",
    "services.sourcing.title": "Stratejik Küresel Tedarik",
    "services.sourcing.tag": "Tedarik",
    "services.sourcing.body": "Şirket, müşterilere rekabetçi tedarikçilere ve güvenilir üretim kapasitesine erişim sağlamak için dünyanın başlıca sanayi ve üretim bölgelerindeki imalatçılar ve üreticilerle iş birliği yapar.",
    "services.sourcing.item1": "Üretici tespiti ve doğrulaması",
    "services.sourcing.item2": "Tedarikçi durum tespiti",
    "services.sourcing.item3": "Üretim takibi",
    "services.sourcing.item4": "Sözleşme müzakeresi ve satın alma yönetimi",
    "services.sourcing.item5": "Özel marka ve OEM tedariki",
    "services.logistics.title": "Lojistik ve Tedarik Zinciri Yönetimi",
    "services.logistics.tag": "Lojistik",
    "services.logistics.body": "Verimli lojistik koordinasyonu, uluslararası ticaret operasyonlarının merkezindedir. Şirket, küresel navlun ağları ve lojistik ortakları üzerinden taşımacılık ve kargo hareketini yönetir.",
    "services.logistics.item1": "Deniz yolu taşımacılığı (FCL / LCL konteyner sevkiyatları)",
    "services.logistics.item2": "Hava kargo taşımacılığı",
    "services.logistics.item3": "Çok modlu kargo taşımacılığı",
    "services.logistics.item4": "Depolama ve konsolidasyon hizmetleri",
    "services.logistics.item5": "Dağıtım koordinasyonu",
    "services.compliance.title": "Uluslararası Ticaret Uyum Süreçleri",
    "services.compliance.tag": "Uyum",
    "services.compliance.body": "Tüm ticaret faaliyetleri, işlem riskini azaltmak amacıyla uluslararası gümrük mevzuatı, ihracat kontrol yasaları ve dokümantasyon gereklilikleriyle uyumlu şekilde yürütülür.",
    "services.compliance.item1": "Gümrük evraklarının hazırlanması",
    "services.compliance.item2": "İhracat ve ithalat beyannameleri",
    "services.compliance.item3": "Tarife sınıflandırması ve HS kodu doğrulaması",
    "services.compliance.item4": "Mevzuata uyum desteği",
    "services.compliance.item5": "Ticari dokümantasyon yönetimi",
    "services.incoterms.eyebrow": "Incoterms",
    "services.incoterms.title": "Sık Uygulanan Incoterms",
    "services.incoterms.body": "Şirket tarafından yürütülen uluslararası ticaret işlemleri; taşıma, risk, sigorta ve gümrük sorumluluklarını tanımlamak için Uluslararası Ticaret Odası tarafından yayımlanan Incoterms kurallarını esas alır.",
    "services.incoterms.exw.title": "EXW - İş Yerinde Teslim",
    "services.incoterms.exw.body": "Satıcı malları kendi tesislerinde hazır eder. Taşıma, ihracat işlemleri ve uluslararası sevkiyat sorumluluğu alıcıya aittir.",
    "services.incoterms.fob.title": "FOB - Gemide Teslim",
    "services.incoterms.fob.body": "Satıcı malları belirtilen yükleme limanında gemiye teslim eder. Risk, yük gemiye yüklendiğinde alıcıya geçer.",
    "services.incoterms.cif.title": "CIF - Masraf, Sigorta ve Navlun",
    "services.incoterms.cif.body": "Satıcı varış limanına kadar taşıma ve asgari sigortayı düzenler; risk ise yükleme sonrasında devredilir.",
    "services.incoterms.cfr.title": "CFR - Masraf ve Navlun",
    "services.incoterms.cfr.body": "Satıcı varış limanına kadar taşıma maliyetini öder, ancak risk yükleme noktasında alıcıya geçer.",
    "services.incoterms.dap.title": "DAP - Belirlenen Yerde Teslim",
    "services.incoterms.dap.body": "Satıcı malları kararlaştırılan varış noktasına teslim etmekten sorumludur. İthalat işlemleri ve vergiler alıcıya aittir.",
    "services.incoterms.ddp.title": "DDP - Gümrük Vergileri Ödenmiş Teslim",
    "services.incoterms.ddp.body": "Satıcı taşıma, gümrük işlemleri, vergiler ve malların alıcının belirttiği noktaya tesliminden sorumludur.",
    "services.qa.title": "Kalite Güvencesi ve Risk Kontrolü",
    "services.qa.tag": "Kontrol",
    "services.qa.item1": "Sevkiyat öncesi denetimler",
    "services.qa.item2": "Fabrika denetimleri",
    "services.qa.item3": "Miktar doğrulaması",
    "services.qa.item4": "Ambalaj uygunluk kontrolleri",
    "services.qa.item5": "Gerektiğinde ürün testleri",
    "services.management.title": "Profesyonel Ticaret Yönetimi",
    "services.management.tag": "Yönetim",
    "services.management.body": "Entegre destek; satın alma, taşımacılık, dokümantasyon ve uyum süreçlerini kapsayarak güvenilir tedarik, operasyonel şeffaflık ve uzun vadeli ticari iş birliği sağlar.",
    "contact.meta.title": "İletişim | SRT TRADE",
    "contact.hero.eyebrow": "İletişime Geçin",
    "contact.title": "Bizimle İletişime Geçin",
    "contact.lead": "Tedarik talepleri, uluslararası ticaret ortaklıkları, satın alma istekleri ve ticari iş birliği için İstanbul'daki ekibimizle iletişime geçin.",
    "contact.office.title": "Kurumsal İletişim",
    "contact.office.tag": "Ofis",
    "contact.office.phone": "Telefon: +90 552 572 1794",
    "contact.office.email": "E-posta: srttrade1@gmail.com",
    "contact.office.enquiry": "Uluslararası tedarik ve ticari iş birliği talepleri",
    "contact.scope.title": "Ticari Kapsam",
    "contact.scope.tag": "Profil",
    "contact.scope.body": "Şirket; birden fazla ürün kategorisi ve uluslararası pazarda üreticiler, imalatçılar, distribütörler ve alıcılarla çalışarak satın alma, lojistik koordinasyonu, dokümantasyon ve uyum süreçlerini destekler.",
    "contact.form.title": "Talep Gönderin",
    "contact.form.tag": "Form",
    "contact.form.name": "Ad Soyad",
    "contact.form.email": "E-posta",
    "contact.form.phone": "Telefon Numarası",
    "contact.form.message": "Mesajınız",
    "contact.button": "Mesaj Gönder",
    "contact.location.title": "Konum",
    "contact.location.tag": "Harita",
    "contact.status.sending": "Gönderiliyor...",
    "contact.alert.unavailable": "E-posta hizmeti şu anda kullanılamıyor.",
    "contact.alert.missingSettings": "E-posta ayarları eksik. EmailJS anahtarlarını contact.html içinde ekleyin.",
    "contact.alert.sent": "Mesaj başarıyla gönderildi.",
    "contact.alert.failed": "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin."
  }
};

const attributeMappings = [
  ["data-i18n-placeholder", "placeholder"],
  ["data-i18n-alt", "alt"],
  ["data-i18n-title", "title"],
  ["data-i18n-content", "content"],
  ["data-i18n-value", "value"]
];

function getStoredLanguage() {
  const storedLanguage = localStorage.getItem("site-language");
  return storedLanguage === "tr" ? "tr" : defaultLanguage;
}

function rememberOriginalValue(element, storageKey, value) {
  if (element.dataset[storageKey] === undefined) {
    element.dataset[storageKey] = value;
  }
}

function translateKey(key, fallback = "", lang = currentLanguage) {
  return translations[lang]?.[key] ?? fallback;
}

function applyTextTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    rememberOriginalValue(element, "i18nOriginalText", element.textContent);

    const originalText = element.dataset.i18nOriginalText ?? "";
    element.textContent = lang === defaultLanguage ? originalText : translateKey(key, originalText, lang);
  });
}

function applyAttributeTranslations(lang) {
  attributeMappings.forEach(([dataAttribute, attribute]) => {
    const storageKey = `i18nOriginal${attribute.charAt(0).toUpperCase()}${attribute.slice(1)}`;

    document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
      const key = element.getAttribute(dataAttribute);
      const originalValue = element.getAttribute(attribute) ?? "";

      rememberOriginalValue(element, storageKey, originalValue);

      const fallbackValue = element.dataset[storageKey] ?? "";
      const translatedValue = lang === defaultLanguage
        ? fallbackValue
        : translateKey(key, fallbackValue, lang);

      if (attribute === "value") {
        element.value = translatedValue;
      } else {
        element.setAttribute(attribute, translatedValue);
      }
    });
  });
}

function applyTranslations(lang) {
  currentLanguage = lang === "tr" ? "tr" : defaultLanguage;

  applyTextTranslations(currentLanguage);
  applyAttributeTranslations(currentLanguage);
  document.documentElement.lang = currentLanguage;

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = currentLanguage === defaultLanguage ? "TR" : "EN";
    langToggle.dataset.current = currentLanguage;
  }

  localStorage.setItem("site-language", currentLanguage);
  document.dispatchEvent(new CustomEvent("site-language-changed", {
    detail: { lang: currentLanguage }
  }));
}

window.translateKey = translateKey;
window.getSiteLanguage = () => currentLanguage;
window.applySiteTranslations = applyTranslations;

const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage = langToggle.dataset.current === defaultLanguage ? "tr" : defaultLanguage;
    applyTranslations(nextLanguage);
  });
}

applyTranslations(getStoredLanguage());
