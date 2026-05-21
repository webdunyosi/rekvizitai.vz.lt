# 🏢 REKVIZITAI.VZ.LT — Kompaniyalar Katalogi Portali (Real Production Project)

Ushbu loyiha Litvaning eng yirik biznes ma'lumotnomasi va korxonalar reyestri portali — **rekvizitai.vz.lt** uchun tayyorlangan professional, keng ko'lamli ishlab chiqarish (production) loyihasidir. 

Loyiha muallifning **Litvaning nufuzli kompaniyasida masofaviy (online/remote) dasturchi** sifatida faoliyat yuritgan davrida to'liq o'zi tomonidan ishlab chiqilgan va amaliyotga tatbiq etilgan professional portfolio namunasidir. Dastur zamonaviy korporativ talablarga mos ravishda, yuqori yuklamalarga chidamli, tezkor va interaktiv interfeysga ega qilib yaratilgan.

---

## 🌐 Jonli Demo (Live Demo)

Loyiha Vercel platformasiga muvaffaqiyatli yuklangan va jonli ishlamoqda. Loyihani quyidagi havola orqali ko'rishingiz mumkin:

🔗 **[https://rekvizitai-vz-lt.vercel.app](https://rekvizitai-vz-lt.vercel.app/)**

---

## ✨ Loyihaning Asosiy Imkoniyatlari (Features)

*   **🔍 Murakkab Qidiruv Tizimi**: Kompaniyalarni nomi, kodi, kalit so'zlari, shahar va faoliyat sohasi bo'yicha tezkor va batafsil qidirish (Detailed Search).
*   **📂 Kategoriyalar Katalogi**: Korxonalarni faoliyat turlari (kategoriyalari) bo'yicha guruhlangan holda saralash.
*   **📺 Dynamic ADs Banner (Reklama Tizimi)**: Maxsus yaratilgan Next.js backend API orqali ishlovchi interaktiv reklama bannerlari. Silliq animatsiyalar (Framer Motion), avtomat almashinish (auto-rotation), navigatsiya ko'rsatkichlari va oyna-simon (Glassmorphism) zamonaviy dizayn.
*   **📊 Moliyaviy va Birja Vidjetlari**:
    *   **Valyuta kursi (Exchange Currency)**: Real vaqt rejimida valyuta kurslarini hisoblash va ko'rish.
    *   **Aksiyalar (Stock)** va **Xom-ashyo (Raw)** narxlarini kuzatish paneli.
*   **📰 Yangiliklar Bo'limi**: Biznes va iqtisodiyot sohasidagi so'nggi yangiliklar lentasi.
*   **📝 Kompaniyani Ro'yxatdan O'tkazish**: Yangi korxonalarni katalogga qo'shish uchun maxsus ro'yxatdan o'tish (Registration) sahifasi.
*   **📱 Mobil va Planshet Mosligi**: To'liq moslashuvchan (fully responsive) dizayn.

---

## 🛠 Texnologiyalar To'plami (Tech Stack)

Loyihada eng zamonaviy va professional dasturlash vositalaridan foydalanilgan:

*   **Asosiy Karkas**: [Next.js 14](https://nextjs.org/) (App Router) va [React 18](https://react.dev/)
*   **Dasturlash Tili**: [TypeScript](https://www.typescriptlang.org/)
*   **Stillashtirish (UI/UX)**:
    *   [Tailwind CSS](https://tailwindcss.com/) — Moslashuvchan va tezkor CSS stillari.
    *   [Framer Motion](https://www.framer.com/motion/) — Murakkab va silliq interaktiv animatsiyalar.
    *   [shadcn/ui](https://ui.shadcn.com/) va [Radix UI](https://www.radix-ui.com/) — Kirish shakllari va menyular uchun tayyor komponentlar.
    *   [Magic UI](https://magicui.design/) — Vizual effektlar uchun.
*   **Holat Boshqaruvi (State Management)**:
    *   [Redux Toolkit](https://redux-toolkit.js.org/) — Global mijoz holati boshqaruvi.
    *   [React Query (TanStack)](https://tanstack.com/query/latest) — Server ma'lumotlarini keshlashtirish va sinxronizatsiya qilish.
*   **Ma'lumotlar bilan ishlash**:
    *   Next.js fetch API va Axios (Asinxron so'rovlar).
    *   React Hook Form va Zod (Shakllarni to'ldirish va validatsiya qilish).

---

## 📂 Loyihaning Tuzilishi (Project Structure)

```text
rekvizitai.vz.lt/
├── public/                 # Statik resurslar (rasmlar, logotiplar)
├── src/
│   ├── app/                # Next.js App Router (Sahifalar va API)
│   │   ├── (pages)/        # Loyihaning asosiy sahifalari
│   │   │   ├── (client)/   # Mijoz bo'limi (kategoriya, batafsil qidiruv)
│   │   │   ├── advertisement/# Reklama beruvchilar uchun ma'lumot sahifasi
│   │   │   ├── help/       # Yordam bo'limi sahifasi
│   │   │   └── registration/# Kompaniyani qo'shish sahifasi
│   │   ├── api/            # API Route-lar (Lokal backend API xizmati)
│   │   │   └── banners/    # Reklama bannerlari uchun API
│   │   ├── globals.css     # Global CSS va Tailwind konfiguratsiyasi
│   │   └── layout.tsx      # Global sahifa andozasi (Layout)
│   ├── components/         # Qayta ishlatiluvchi React komponentlari
│   │   ├── Auth/           # Tizimga kirish va ro'yxatdan o'tish
│   │   ├── Company/        # Kompaniya kartalari va ma'lumotlari
│   │   ├── Currency/       # Valyuta kalkulyatori
│   │   ├── Navigation/     # Navbar, Footer va boshqa menyular
│   │   ├── Search/         # Qidiruv shakllari
│   │   └── ui/             # Shadcn va boshqa tayyor UI elementlari
│   ├── lib/                # API chaqiruvlari va yordamchi funksiyalar (utils)
│   └── state/              # Redux do'koni va slice-lari
├── utils/                  # Global provayderlar (Redux/React Query)
├── .env                    # Tizim muhit o'zgaruvchilari (API havolalari)
├── tailwind.config.ts      # Tailwind CSS sozlamalari
└── package.json            # Loyihaning bog'liqliklari (dependencies)
```

---

## 🚀 Loyihani Lokal Ishga Tushirish

Loyihani o'z kompyuteringizda ishga tushirish uchun quyidagi bosqichlarni bajaring:

### 1. Repository-ni yuklab oling (Clone)
```bash
git clone <repository-link>
cd rekvizitai.vz.lt
```

### 2. Kutubxonalarni o'rnating
Loyiha paketlarini o'rnatish uchun `pnpm` yoki `npm` dan foydalaning:
```bash
pnpm install
# yoki
npm install
```

### 3. Muhit o'zgaruvchilarini sozlang (`.env`)
Loyiha ildizida `.env` faylini oching va u yerda API havolasini tekshiring:
```env
NEXT_PUBLIC_API_URL=https://api.cmpxyz.ru/api
```

### 4. Dasturni ishga tushiring
Lokal ishlab chiqish serverini ishga tushirish uchun:
```bash
pnpm dev
# yoki
npm run dev
```

Server ishga tushgach, brauzeringizda **[http://localhost:3000](http://localhost:3000)** manziliga kirib natijani ko'rishingiz mumkin.

---

## 🔒 Ishlab Chiqish (Production) Uchun Sozlash

1.  **Lokal API Banners**: Masofaviy server ishlashdan to'xtagan vaqtda loyiha mustaqil ishlashi uchun Next.js `src/app/api/banners/route.ts` API yaratilgan. U bannerlarni lokal backend sifatida taqdim etadi.
2.  **React Query Devtools**: Kod toza va faqat foydalanuvchiga kerakli elementlardan tashkil topishi uchun ishlab chiqish jarayonidagi floating diagnostic asboblari (`ReactQueryDevtools`) butunlay o'chirib tashlangan.

---

## 💼 Tajriba va Mualliflik Huquqi

Ushbu loyiha muallifning Litva kompaniyasidagi masofaviy (remote) ish tajribasining bevosita mevasi bo'lib, real bozor talablariga javob beradigan professional dasturiy ta'minot hisoblanadi. Barcha mualliflik va ishlab chiqish huquqlari himoyalangan.
