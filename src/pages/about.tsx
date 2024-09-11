'use client';
import React from 'react';
import UploadForm from '../components/UploadForm';
import dynamic from 'next/dynamic';


const DynamicMap = dynamic(() => import('./../components/Map'), {
  ssr: false, // Disable server-side rendering for this component
});

const AboutPage: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center jus text-center mx-auto p-4'>
      <div className='container p-10 '>
        <h1 className='text-3xl p-2'>Prečo si vybrať nás?</h1>
        <p className='text-xl'>Dôvody prečo sme najlepšia flotila pre donáškovú službu.</p>
      </div>

      <div className='bg-purple flex flex-row justify-between gap-8 flex-nowrap flex-shrink-0 flex-grow-0 md:flex-row'>
        <div className='text-start flex flex-col bg-neutral-300 rounded-sm shadow-xl w-80 h-80 p-2'>
          <h1
            className='text-green-800'
            style={{ fontSize: '4rem' }}>
            01.
          </h1>
          <h2>Rýchle Doručenie</h2>
          <p className='text-base'>
            Naši doručovatelia využívajú najnovšie technológie a optimalizované trasy, aby
            zabezpečili, že vaše jedlo dorazí čerstvé a včas.
          </p>
        </div>
        <div className='text-start flex flex-col bg-neutral-300 rounded-sm shadow-xl w-80 h-80 p-2'>
          <h1
            className='text-green-800'
            style={{ fontSize: '4rem' }}>
            02.
          </h1>
          <h2>Jednoduché Objednávanie</h2>
          <p className='text-base'>
            Naša aplikácia BoltFood je navrhnutá tak, aby vám uľahčila proces objednávania.
            Intuitívne rozhranie vám umožňuje jednoducho vyhľadať, objednať a zaplatiť za vaše
            obľúbené jedlá bez zbytočných komplikácií.
          </p>
        </div>
        <div className='text-start flex flex-col bg-neutral-300 rounded-sm shadow-xl w-80 h-80 p-2'>
          <h1
            className='text-green-800'
            style={{ fontSize: '4rem' }}>
            03.
          </h1>
          <h2>Bezpečnosť a Kvalita</h2>
          <p className='text-base'>
            Dbáme na vysoké štandardy hygieny a bezpečnosti. Naši doručovatelia sú školení na to,
            aby zabezpečili, že vaše jedlo bude doručené v najlepšom stave.
          </p>
        </div>
        <div className='text-start flex flex-col bg-neutral-300 rounded-sm shadow-xl w-80 h-80 p-2'>
          <h1
            className='text-green-800'
            style={{ fontSize: '4rem' }}>
            04.
          </h1>
          <h2>Podpora Zákazníkov</h2>
          <p className='text-base'>
            Naša zákaznícka podpora je vždy k dispozícii, aby riešila vaše otázky a problémy. Naším
            cieľom je zabezpečiť, aby vaše skúsenosti s Old Colony boli čo najpríjemnejšie.
          </p>
        </div>
      </div>
      <div className='bg-orange-900'>
        <div className='bg-green-500'>
          <UploadForm />
        </div>
        <div className='bg-green-200 w-80'>
          <DynamicMap />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;

{
  /* <p>Prečo vybrať nás?
Dôvody, prečo sme najlepšia flotila pre donáškovú službu.
Rýchle doručenie

Naši doručovatelia využívajú najnovšie technológie a optimalizované trasy, aby zabezpečili, že vaše jedlo dorazí čerstvé a včas
Jednoduché Objednávanie

Naša aplikácia BoltFood je navrhnutá tak, aby vám uľahčila proces objednávania. Intuitívne rozhranie vám umožňuje jednoducho vyhľadať, objednať a zaplatiť za vaše obľúbené jedlá bez zbytočných komplikácií.
Bezpečnosť a Kvalita:

Dbáme na vysoké štandardy hygieny a bezpečnosti. Naši doručovatelia sú školení na to, aby zabezpečili, že vaše jedlo bude doručené v najlepšom stave.
Skvelý zákaznícky servis

Naša zákaznícka podpora je vždy k dispozícii, aby riešila vaše otázky a problémy. Naším cieľom je zabezpečiť, aby vaše skúsenosti s Old Colony boli čo najpríjemnejšie. <p/> */
}
