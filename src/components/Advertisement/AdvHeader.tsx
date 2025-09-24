import Link from 'next/link';
import React from 'react'

const AdvHeader = () => {
  return (
    <div>
      <div className="w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5">
        <p>Business news, economic current affairs, articles</p>
        <div className='border border-zinc-300 my-5'></div>
        <div>
          <h2 className="text-2xl font-semibold leading-none tracking-tight mb-10">Advertising for companies</h2>
          <p className='text-base mb-10'>During the last year, REKVIZITAI.LT was visited by 10.7 million unique visitors (users) from Lithuania and abroad, who viewed over 130 million business pages (Google Analytics data for the period: 2022-01-01 - 2022-12-31). </p>
          <div className='flex items-end gap-1 mb-14'><h3 className="text-xl font-semibold leading-none tracking-tight">For banner advertising</h3> on the relikisai.lt website, please contact <Link href="#" className="text-blue-800 transition hover:underline">UAB &quot;Verslo žinios&quot;.</Link></div>
          <h3 className="text-xl font-semibold leading-none tracking-tight mb-1">&quot;Verslo žinios&quot; communication services department</h3>
          <p className='text-base mb-5'>Project manager Auksė Kazanavičienė +370 5 2507148</p>
          <p className='text-base mb-5'>Project manager Aida Butėnė +370 5 2507149</p>
          <p className='text-base mb-5'>Project manager Roberta Mačiukaitė-Tairova +370 5 2507150</p>
          <p className='text-base mb-5'>Project Manager Ingrida Kontvainytė-Raišienė +370 5 2507147</p>
          <p className='text-base mb-5'>Project manager Indrė Povilavičienė +370 5 2507193</p>
          <p className='text-base mb-5'>Project manager Lina Čeponė +370 5 2509458</p>
          <p className='text-base mb-5'>Project specialist Rima Šilkaitė +370 5 2507167</p>
          <div className='flex items-end gap-1 my-14'><h3 className="text-xl font-semibold leading-none tracking-tight">For updating information, data, etc. ask questions</h3> <Link href="#" className="text-blue-800 transition hover:underline">here.</Link></div>
          <h3 className="text-xl font-semibold leading-none tracking-tight mb-1">Managers of UAB &quot;Rekvizitai&quot;</h3>
          <p className='text-base mb-5'>Marijus mob. tel. +370 687 33009</p>
          <p className='text-base mb-5'>Dig in mobile. tel. +370 698 15178</p>
          <div className='flex items-end gap-1 mt-14'><h3 className="text-xl font-semibold leading-none tracking-tight">For the promotion of a company</h3> or the granting of a priority position, please contact:</div>
          <span className='bg-white px-1 inline-block mt-2 mb-14'>pardavimai@rekvizitai.It</span>
          <h3 className="text-xl font-semibold leading-none tracking-tight mb-5">UAB &quot;Rekvizitai&quot;</h3>
          <p className='text-base mb-5'>Kalvariju st. 300, LT-08318 Vilnius</p>
          <p className='text-base mb-5'>Company code 303341878</p>
          <p className='text-base mb-5'>VAT code LT100008694518</p>
          <p className='text-base mb-5'>Current account LT374010051002057779 AB Luminor bankas</p>
          <h3 className="text-xl font-semibold leading-none tracking-tight mt-14 mb-5">UAB &quot;Rekvizitai&quot; Kaunas branch</h3>
          <p className='text-base'>Volunteer Ave. 363-302, LT-49425 Kaunas</p>
          <p className='text-base mb-14'>Mob. tel. +370 618 79008</p>
          <h3 className="text-xl font-semibold leading-none tracking-tight mb-5">Sales department</h3>
          <p className='text-base mb-5'>Andrius mobile tel. +370 612 76644</p>
          <p className='text-base mb-5'>Asta mobile tel. +370 616 19905</p>
          <p className='text-base mb-5'>Daiva mobile. tel. +370 614 49247</p>
          <p className='text-base mb-5'>Donatas mobile tel. +370 660 36834</p>
          <p className='text-base mb-5'>Lily mobile. tel. +370 626 991554</p>
          <p className='text-base mb-5'>Mantas mobile tel. +370 610 15883</p>
          <p className='text-base mb-5'>Rasa mobile tel. +370 626 20260</p>
          <p className='text-base mb-5'>Victoria mobile tel. +370 620 63916</p>
          <h3 className="text-xl font-semibold leading-none tracking-tight mt-14 mb-5">Web solutions</h3>
          <p className='text-base mb-5'>Domantas mobile. tel. +370 616 72175</p>
        </div>
      </div>
    </div>
  )
}

export default AdvHeader