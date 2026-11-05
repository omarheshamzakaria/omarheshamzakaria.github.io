(function () {
  'use strict';
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------------- Arabic translations (English lives in the HTML) ---------------- */
  var AR = {
    'skip': 'انتقل إلى المحتوى',
    'brand': 'عمر هشام',
    'nav.about': 'نبذة', 'nav.exp': 'الخبرات', 'nav.skills': 'المهارات', 'nav.projects': 'الأعمال', 'nav.certs': 'الشهادات', 'nav.contact': 'تواصل',
    'hero.status': 'متاح لفرص مدير نظم المعلومات الجغرافية · الرياض، السعودية',
    'hero.hello': 'مرحباً، أنا',
    'name': 'عمر هشام زكريا',
    'role': 'مدير نظم المعلومات الجغرافية',
    'hero.tags': 'GIS المؤسسي · شبكات المرافق · إدارة البيانات المكانية',
    'hero.lead': 'أبني وأدير قواعد البيانات الجغرافية المؤسسية وبوابات ArcGIS Enterprise وشبكات المرافق، وأحوّل بيانات CAD والبيانات الميدانية إلى معلومات جغرافية دقيقة ومُدقّقة وجاهزة لاتخاذ القرار للأمانات وشركات المرافق في السعودية ومصر.',
    'hero.cta1': 'شاهد أعمالي', 'hero.cta2': 'تحميل السيرة الذاتية',
    'stat1': 'سنوات في GIS', 'stat2': 'جهات عمل', 'stat3': 'دورة معتمدة', 'stat4': 'دول عمل',
    'about.title': 'الملخص المهني',
    'about.p1': 'متخصص في نظم المعلومات الجغرافية بخبرة تتجاوز <strong>7 سنوات</strong> في إدارة البيانات الجغرافية، وإدارة أنظمة GIS المؤسسية، والتحليل المكاني، وجودة البيانات في مشاريع المرافق والبنية التحتية والتخطيط العمراني والبلديات في <strong>المملكة العربية السعودية ومصر</strong>.',
    'about.p2': 'إتقان قوي لمنظومة Esri — ArcGIS Pro وArcGIS Enterprise وArcGIS Online وقواعد البيانات الجغرافية المؤسسية وUtility Network وData Reviewer وAttribute Rules وTopology وModelBuilder وExperience Builder وArcGIS Dashboards — مع خبرة عملية في الأتمتة باستخدام FME وPython وSQL.',
    'about.p3': 'متخصص في تحويل بيانات CAD والمخططات التنفيذية (As-Built) والبيانات الميدانية المعقدة إلى معلومات جغرافية دقيقة ومنظمة ومنشورة تدعم البنية التحتية والمرافق وإدارة الأصول واتخاذ القرار التشغيلي.',
    'fact.loc.k': 'الموقع', 'fact.loc.v': 'الرياض، المملكة العربية السعودية',
    'fact.role.k': 'الوظيفة الحالية', 'fact.role.v': 'أخصائي GIS — أمانة منطقة الرياض',
    'fact.sce.k': 'الهيئة السعودية للمهندسين', 'fact.sce.v': 'عضو مسجّل بدرجة أخصائي (مساحة)',
    'fact.edu.k': 'المؤهل', 'fact.edu.v': 'بكالوريوس الجغرافيا ونظم المعلومات الجغرافية — جامعة حلوان',
    'fact.lang.k': 'اللغات', 'fact.lang.v': 'العربية (اللغة الأم) · الإنجليزية (مهنية)',
    'exp.title': 'الخبرات المهنية', 'current': 'حالياً',
    'j1.date': 'يناير 2026 – حتى الآن', 'j1.title': 'أخصائي نظم المعلومات الجغرافية',
    'j1.org': 'أمانة منطقة الرياض — وكالة البلديات والتخصيص · الرياض',
    'j1.b1': 'إدارة وصيانة قواعد البيانات الجغرافية المؤسسية لعقود الأراضي، وتراخيص أجهزة الصراف والبنوك، وعقود أبراج الاتصالات، والمرافق وأصول البنية التحتية، مع ضمان الدقة والتكامل والاكتمال.',
    'j1.b2': 'دعم مشاريع منصة ArcGIS عبر ArcGIS Pro وArcGIS Enterprise وArcGIS Online لإدارة البيانات وتحريرها وتحليلها والتحقق منها ونشرها.',
    'j1.b3': 'تنفيذ التحليلات المكانية ودراسات ملاءمة المواقع لدعم تخطيط البنية التحتية واتخاذ القرار المكاني.',
    'j1.b4': 'تطبيق Data Reviewer وTopology وAttribute Rules وModelBuilder لضبط جودة البيانات (QA/QC) ورفع دقتها وكفاءة سير العمل.',
    'j1.b5': 'تحويل بيانات CAD والمخططات التنفيذية إلى قواعد بيانات GIS، وأتمتة المعالجة والتحقق باستخدام Python وSQL.',
    'j1.b6': 'نشر البيانات النهائية على ArcGIS Enterprise وOnline، وتسليم الخرائط وملفات KMZ وExcel ومخططات المنافسات والتقارير الفنية لأصحاب المصلحة.',
    'j2.date': 'يناير 2025 – ديسمبر 2025', 'j2.title': 'خبير مساعد نظم معلومات جغرافية',
    'j2.org': 'الهيئة العامة للتخطيط العمراني · مصر',
    'j2.b1': 'إنشاء وتحديث طبقات GIS للقطاعات العمرانية من الخرائط الأساسية واستكمال جداول البيانات الوصفية لدعم التخطيط العمراني.',
    'j2.b2': 'إعداد بيانات بصيغ Excel وKMZ وإخراج الخرائط والمخرجات الجغرافية للمراجعة على Google Earth.',
    'j2.b3': 'دعم التحليل المكاني وإعداد الخرائط والبيانات والتوثيق الفني لمتطلبات التخطيط العمراني والإقليمي.',
    'j3.date': 'أغسطس 2023 – ديسمبر 2024', 'j3.title': 'محلل GIS – ضبط الجودة',
    'j3.org': 'الشركة الحديثة للغاز الطبيعي · مصر',
    'j3.b1': 'تنفيذ ضبط جودة بيانات GIS للنقاط والخطوط والمضلعات لضمان السلامة المكانية والالتزام بمعايير المشروع.',
    'j3.b2': 'التحقق من البيانات باستخدام Esri Data Reviewer وAttribute Rules وTopology Rules ومتابعة الإجراءات التصحيحية.',
    'j3.b3': 'دعم سير عمل Utility Network لشبكات الغاز الطبيعي: تحويل CAD إلى GIS، وطوبولوجيا الشبكة، وتحليل الأحمال، وقطاعات الاختبار، والقطع، وحصر المواد (MTO).',
    'j3.b4': 'إدارة قواعد بيانات المرافق المؤسسية ونشر الخدمات عبر ArcGIS Enterprise Portal وExperience Builder وDashboards.',
    'j3.b5': 'بناء نماذج معالجة جغرافية باستخدام ModelBuilder وFME وPython للتحويل والأتمتة.',
    'j3.b6': 'المشاركة في مشاريع التحول الرقمي، وحياة كريمة، ومدينة الجبيل، والتقاطعات، وتحويل المخططات التنفيذية إلى قواعد بيانات.',
    'j4.date': 'مايو 2023 – أغسطس 2023', 'j4.title': 'أخصائي نظم المعلومات الجغرافية',
    'j4.org': 'مايكرو للتقنيات الهندسية (METI)',
    'j4.b1': 'استخدام أنظمة المسح المتنقل لتصنيف العناصر ثلاثية الأبعاد والتحقق من دقة البيانات والخرائط وفق المعايير لمشاريع المدن الذكية.',
    'j5.date': 'يونيو 2021 – ديسمبر 2021', 'j5.title': 'أخصائي GIS – مشروع الكهرباء السعودية',
    'j5.org': 'EKC لنظم المعلومات الجغرافية',
    'j5.b1': 'رسم وإدخال بيانات خطوط الجهد المنخفض والمتوسط والعدادات والمحولات لمدينة الجبيل وحفر الباطن وقرية العليا.',
    'j6.date': 'يناير 2020 – مايو 2021', 'j6.title': 'أخصائي GIS – مشروع الكهرباء السعودية',
    'j6.org': 'فارسي جيوتك',
    'j6.b1': 'دعم توسعة بيانات شبكة توزيع الكهرباء على نظم المعلومات الجغرافية لمشروع مرافق سعودي.',
    'skills.title': 'المهارات التقنية',
    'sk1': 'منصة Esri ArcGIS', 'sk2': 'إدارة البيانات والأنظمة', 'sk3': 'ضمان وضبط الجودة', 'sk4': 'الأتمتة ونقل البيانات (ETL)', 'sk5': 'أدوات GIS والهندسة', 'sk6': 'التحليل وإعداد التقارير',
    'comp.title': 'الكفاءات الأساسية',
    'c1': 'إدارة أنظمة GIS المؤسسية', 'c2': 'تصميم وإدارة قواعد البيانات الجغرافية', 'c3': 'شبكات المرافق Utility Network', 'c4': 'ضبط الجودة وسلامة البيانات',
    'c5': 'تحويل CAD والمخططات التنفيذية إلى GIS', 'c6': 'أتمتة سير العمل والمعالجة الجغرافية', 'c7': 'تحليل ملاءمة المواقع', 'c8': 'تحرير البيانات ونشرها',
    'c9': 'تحويل البيانات الجغرافية ETL', 'c10': 'الكارتوجرافيا والإظهار المرئي', 'c11': 'GIS العمراني وخرائط البنية التحتية', 'c12': 'التوثيق الفني لنظم GIS',
    'proj.title': 'أعمال مختارة',
    'proj.sub': 'نماذج من الخرائط وشبكات المرافق ومخرجات GIS المؤسسية. اضغط على أي خريطة لتكبيرها.',
    'live.badge': 'تفاعلية',
    'live.title': 'شبكة توزيع الغاز منخفضة الضغط — سوهاج، مصر',
    'live.desc': 'بيانات مرافق حقيقية قمت بمعالجتها وإعادة إسقاطها من WGS 84 / UTM 36N إلى خريطة ويب. حرّك الخريطة وكبّرها واضغط على أي خط لمعرفة قطره وطوله.',
    'live.feat': 'عنصر خطي',
    'base.map': 'خريطة', 'base.img': 'صور فضائية',
    'f.all': 'الكل', 'f.utility': 'شبكات المرافق', 'f.municipal': 'البلديات والبنية التحتية', 'f.planning': 'التخطيط العمراني',
    'w1.t': 'مخطط شبكة توزيع 100 مللي بار', 'w1.d': 'لوحة قطاع اختبار معتمدة للتنفيذ لقطاعات سوهاج 13–15: مفتاح الخريطة والتفاصيل وأقطار المواسير وجدول البيانات.',
    'w2.t': 'شبكة غاز على Utility Network في ArcGIS Pro', 'w2.d': 'تجميعات المواسير والأجهزة والوصلات والخطوط ضمن نموذج Esri Utility Network.',
    'w3.t': 'ضبط جودة الشبكة آلياً بـ ModelBuilder', 'w3.d': 'نموذج معالجة جغرافية لتوليد نهايات المواسير والتحقق من اتصال الشبكة على نطاق واسع.',
    'w4.t': 'القطاعات البلدية والأصول المرخّصة', 'w4.d': 'حدود القطاعات مع مواقع الصرافات والبنوك وعقود أبراج الاتصالات من قاعدة البيانات المؤسسية.',
    'w5.t': 'نظرة عامة على توزيع الأصول', 'w5.d': 'تصنيف رمزي لفئات الأصول على الحدود البلدية لدعم التخطيط وإعداد التقارير.',
    'w6.t': 'ممرات البنية التحتية', 'w6.d': 'مسارات البنية التحتية الخطية مع نقاط الأصول الموصّفة فوق الصور الفضائية.',
    'w7.t': 'مسارات الشبكة حسب الفئة', 'w7.d': 'شبكة خطوط متعددة الفئات بإخراج مخصص لمراجعة أصحاب المصلحة.',
    'w8.t': 'تحليل ملاءمة المواقع', 'w8.d': 'تقييم ملاءمة على مستوى القطع لتحديد المواقع المرشحة لمنشأة مقترحة.',
    'w9.t': 'لوحة خرائط تخطيط عمراني', 'w9.d': 'إخراج خريطة احترافية بخريطة موقع ومفتاح وجدول بيانات لدراسة تخطيطية.',
    'w10.t': 'رقمنة القطاعات العمرانية', 'w10.d': 'رقمنة البلوكات وقطع الأراضي وتوصيفها على صور فضائية عالية الدقة.',
    'w11.t': 'مواقع المشاريع والنطاقات التخطيطية بمكة المكرمة', 'w11.d': 'توقيع المواقع المرقّمة في مكة المكرمة مع الطرق الدائرية القائمة والحد الشرعي للحرم والنطاق العمراني، مع خرائط تفصيلية مكبّرة لتجمعات المواقع وقطع وادي نعمان.',
    'cert.title': 'الشهادات والمؤهلات',
    'cr1.t': 'الهيئة السعودية للمهندسين — أخصائي', 'cr1.d': 'عضو مسجّل، تخصص المساحة · 2026 – 2027',
    'cr2.t': 'الاعتماد المهني — أخصائي جغرافيا', 'cr2.d': 'وزارة الموارد البشرية والتنمية الاجتماعية · 2025',
    'cr3.t': 'خبير مساعد نظم معلومات جغرافية', 'cr3.d': 'الهيئة العامة للتخطيط العمراني · 2025',
    'docs.title': 'وثائق موثّقة',
    'doc1.t': 'شهادة الاعتماد المهني', 'doc1.d': 'وزارة الموارد البشرية والتنمية الاجتماعية · أخصائي جغرافيا (263202) · 2025',
    'doc2.t': 'مصادقة المؤهل العلمي', 'doc2.d': 'تمت المصادقة على درجة البكالوريوس · طلب التحقق من الشهادة، 2024',
    'doc3.t': 'شهادة التخرج وشهادات الخبرة', 'doc3.d': 'شهادة جامعة حلوان وخطابات الخبرة والدورات · 22 صفحة',
    'certs.all': 'الشهادات', 'certs.more': 'عرض كل الشهادات (25)', 'certs.less': 'عرض أقل',
    'doc.open': 'عرض الملف ↗',
    'courses.title': 'التدريب والدورات',
    'tr1': '10 دورات GIS معتمدة', 'tr2': 'دورتان معتمدتان في GIS', 'tr3': 'دورتان معتمدتان في GIS', 'tr4': 'دورتان معتمدتان في GIS', 'tr5': 'دورة معتمدة في الذكاء الاصطناعي',
    'tr6k': 'المقاولون العرب', 'tr6': 'تدريب صيفي، 2019', 'tr7k': 'المركز الأفريقي لخدمات المساحة', 'tr7': 'تدريب صيفي، 2018',
    'edu.title': 'التعليم',
    'edu.deg': 'بكالوريوس الجغرافيا ونظم المعلومات الجغرافية (GIS)',
    'edu.uni': 'جامعة حلوان — كلية الآداب، شعبة الخرائط والمساحة',
    'edu.grade': 'التقدير العام: جيد جداً',
    'contact.title': 'لنرسم مشروعك القادم معاً',
    'contact.lead': 'تبحث عن مدير نظم معلومات جغرافية يتولى منظومة GIS المؤسسية وقواعد البيانات وجودة البيانات لديك؟ أنا متاح لوظائف بدوام كامل في المملكة العربية السعودية.',
    'ct.email': 'البريد الإلكتروني', 'ct.phone': 'الجوال / واتساب',
    'totop': 'العودة للأعلى ↑'
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = [];
  nodes.forEach(function (el, i) { EN[i] = el.innerHTML; });

  function setLang(lang) {
    var ar = lang === 'ar';
    root.lang = ar ? 'ar' : 'en';
    root.dir = ar ? 'rtl' : 'ltr';
    nodes.forEach(function (el, i) {
      var k = el.getAttribute('data-i18n');
      el.innerHTML = ar && AR[k] ? AR[k] : EN[i];
    });
    document.querySelector('.lang-label').textContent = ar ? 'EN' : 'ع';
    document.getElementById('langBtn').setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = ar ? 'عمر هشام زكريا | مدير نظم المعلومات الجغرافية' : 'Omar Hisham Zakaria | GIS Administrator';
    store.set('lang', lang);
    renderLegend();
  }
  document.getElementById('langBtn').addEventListener('click', function () {
    setLang(root.lang === 'ar' ? 'en' : 'ar');
  });

  /* ---------------- Theme ---------------- */
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.getElementById('themeBtn').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store.set('theme', next);
    updateBasemap();
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateBasemap);

  /* ---------------- Nav ---------------- */
  var nav = document.querySelector('.nav');
  var links = document.querySelector('.nav__links');
  var menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });
  window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });

  var navMap = {};
  links.querySelectorAll('a').forEach(function (a) { navMap[a.getAttribute('href').slice(1)] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting && navMap[en.target.id]) {
        Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove('active'); });
        navMap[en.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

  /* ---------------- Reveal + counters ---------------- */
  var rev = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('.count').forEach(countUp);
      rev.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { rev.observe(el); });

  function countUp(el) {
    var to = +el.dataset.to, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1200, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Hero contour lines ---------------- */
  (function contours() {
    var svg = document.getElementById('contours');
    var W = 1400, H = 800;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    var peaks = [[1050, 260, 13], [260, 640, 9], [700, 820, 7]];
    var html = '';
    peaks.forEach(function (pk, pi) {
      for (var r = 1; r <= pk[2]; r++) {
        var pts = [], n = 72, base = r * 34;
        for (var i = 0; i < n; i++) {
          var a = (i / n) * Math.PI * 2;
          var wob = 1 + 0.16 * Math.sin(a * 3 + r * 0.5 + pi) + 0.09 * Math.cos(a * 5 - r * 0.3);
          pts.push([pk[0] + Math.cos(a) * base * wob * 1.25, pk[1] + Math.sin(a) * base * wob]);
        }
        var d = 'M' + pts.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('L') + 'Z';
        html += '<path d="' + d + '" opacity="' + (1 - r / (pk[2] + 2)).toFixed(2) + '"/>';
      }
    });
    svg.innerHTML = html;
  })();

  /* Live coordinate readout (maps pointer to a Riyadh-area extent) */
  var coordText = document.getElementById('coordText');
  document.querySelector('.hero').addEventListener('mousemove', function (e) {
    var r = this.getBoundingClientRect();
    var lon = 46.55 + ((e.clientX - r.left) / r.width) * 0.3;
    var lat = 24.85 - ((e.clientY - r.top) / r.height) * 0.25;
    coordText.textContent = lat.toFixed(4) + '° N, ' + lon.toFixed(4) + '° E';
  });

  /* ---------------- Gallery filters ---------------- */
  var filterBtns = document.querySelectorAll('.filters button');
  filterBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      filterBtns.forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      var f = b.dataset.filter;
      document.querySelectorAll('.work').forEach(function (w) {
        w.classList.toggle('hide', f !== 'all' && w.dataset.cat !== f);
      });
    });
  });

  /* ---------------- Certificates show more ---------------- */
  var certgrid = document.getElementById('certgrid');
  var moreBtn = document.getElementById('moreCerts');
  moreBtn.addEventListener('click', function () {
    var collapsed = certgrid.classList.toggle('collapsed');
    var ar = root.lang === 'ar';
    moreBtn.textContent = collapsed ? (ar ? AR['certs.more'] : 'Show all certificates (25)') : (ar ? AR['certs.less'] : 'Show less');
    if (collapsed) certgrid.scrollIntoView({ block: 'start' });
  });

  /* ---------------- Lightbox ---------------- */
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('.lightbox__cap');
  document.querySelectorAll('.work__img, .cred__img').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      var fig = btn.closest('figure, article');
      var h = fig && fig.querySelector('h3, figcaption');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lbCap.textContent = h ? h.textContent : img.alt;
      lb.hidden = false; document.body.style.overflow = 'hidden';
      lb.querySelector('.lightbox__close').focus();
    });
  });
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  /* ---------------- Interactive network map ---------------- */
  var CLASSES = {
    'PIP 180 LP': { c: '#2563eb', w: 5, en: 'LP Ø180 mm', ar: 'منخفض الضغط Ø180 مم' },
    'PIP 125 LP': { c: '#0d9488', w: 4, en: 'LP Ø125 mm', ar: 'منخفض الضغط Ø125 مم' },
    'PIP 63 LP':  { c: '#f59e0b', w: 2.6, en: 'LP Ø63 mm', ar: 'منخفض الضغط Ø63 مم' },
    'PIP 32 LP':  { c: '#e11d48', w: 1.4, en: 'LP Ø32 mm (services)', ar: 'منخفض الضغط Ø32 مم (توصيلات)' }
  };
  var counts = {};
  var map, layers = {}, base = 'carto';

  function renderLegend() {
    var ul = document.getElementById('legend');
    if (!ul) return;
    var ar = root.lang === 'ar';
    ul.innerHTML = Object.keys(CLASSES).map(function (k) {
      var c = CLASSES[k];
      return '<li><i style="height:' + Math.max(3, c.w) + 'px;background:' + c.c + '"></i>' + (ar ? c.ar : c.en) +
        '<small>' + (counts[k] || '') + '</small></li>';
    }).join('');
  }

  function updateBasemap() {
    if (!map) return;
    Object.keys(layers).forEach(function (k) { map.removeLayer(layers[k]); });
    var key = base === 'imagery' ? 'imagery' : (isDark() ? 'dark' : 'light');
    layers[key].addTo(map).bringToBack();
  }

  function initMap() {
    if (!window.L) return;
    map = L.map('map', { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
    var esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/';
    var grayAttr = 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors';
    layers.light = L.tileLayer(esri + 'Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', { attribution: grayAttr, maxNativeZoom: 16, maxZoom: 20 });
    layers.dark = L.tileLayer(esri + 'Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', { attribution: grayAttr, maxNativeZoom: 16, maxZoom: 20 });
    layers.imagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Imagery &copy; Esri, Maxar, Earthstar Geographics', maxNativeZoom: 19, maxZoom: 20 });
    updateBasemap();
    map.on('click', function () { map.scrollWheelZoom.enable(); });

    fetch('assets/data/network.geojson').then(function (r) { return r.json(); }).then(function (gj) {
      gj.features.forEach(function (f) { counts[f.properties.l] = (counts[f.properties.l] || 0) + 1; });
      gj.features.sort(function (a, b) { return CLASSES[b.properties.l].w - CLASSES[a.properties.l].w; });
      var lyr = L.geoJSON(gj, {
        style: function (f) { var c = CLASSES[f.properties.l]; return { color: c.c, weight: c.w, opacity: .92 }; },
        onEachFeature: function (f, l) {
          l.on('click', function (e) {
            var c = CLASSES[f.properties.l], ar = root.lang === 'ar';
            L.popup().setLatLng(e.latlng).setContent('<strong>' + (ar ? c.ar : c.en) + '</strong><br>' +
              (ar ? 'الطول: ' : 'Length: ') + f.properties.m + ' m').openOn(map);
          });
          l.on('mouseover', function () { l.setStyle({ weight: CLASSES[f.properties.l].w + 3 }); });
          l.on('mouseout', function () { lyr.resetStyle(l); });
        }
      }).addTo(map);
      map.fitBounds(lyr.getBounds(), { padding: [20, 20] });
      document.getElementById('featCount').textContent = gj.features.length.toLocaleString('en');
      renderLegend();
    }).catch(function () {});

    document.querySelectorAll('.map-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.map-switch button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); base = b.dataset.base; updateBasemap();
      });
    });
  }

  // Lazy-init the map when it scrolls near view
  var mapObs = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { mapObs.disconnect(); initMap(); }
  }, { rootMargin: '300px' });
  mapObs.observe(document.getElementById('map'));

  document.getElementById('year').textContent = new Date().getFullYear();
  if (store.get('lang') === 'ar') setLang('ar'); else renderLegend();
})();
