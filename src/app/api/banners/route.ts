import { NextResponse } from "next/server";

export async function GET() {
  const banners = [
    {
      id: "1",
      title: "Biznesingizni Biz Bilan Rivojlantiring!",
      description: "REKVIZITAI portalida premium reklama joylashtiring va mijozlar oqimini oshiring.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=400&q=80",
      targetUrl: "/advertisement",
      ctaText: "Batafsil ma'lumot"
    },
    {
      id: "2",
      title: "Kompaniyangizni Katalogga Qo'shing!",
      description: "Biznesingizni Litva va xalqaro miqyosda taniting. Ro'yxatdan o'tish mutlaqo bepul.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=400&q=80",
      targetUrl: "/registration",
      ctaText: "Ro'yxatdan o'tish"
    },
    {
      id: "3",
      title: "Professional Audit va Konsalting Xizmatlari",
      description: "Biznesingiz uchun ishonchli moliyaviy yechimlar va xalqaro audit xizmatlari.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=400&q=80",
      targetUrl: "#",
      ctaText: "Bog'lanish"
    }
  ];

  return NextResponse.json(banners);
}
