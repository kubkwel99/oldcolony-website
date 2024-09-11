import AboutPage from '@/pages/about';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-24'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start relative'>
        <div className='relative w-full h-auto'>
          <img
            src='hero-desktop.jpg'
            className='w-full h-auto object-cover shadow-2xl'
            alt='Hero Image'
          />
          <div className='absolute inset-0 flex flex-col items-center text-center justify-center p-5 text-neutral-900 bg-gradient-to-t from-black via-transparent to-transparent sm:p-20 md:items-start md:text-start'>
            <h1 className='text-4xl font-bold sm:text-5xl'>OLD COLONY</h1>
            <h2 className='text-neutral-800 w-auto mt-4 pl-1 md:w-1/2'>
              Špičková donášková služba, ktorá je súčasťou BoltFood, známej svojou rýchlosťou a
              efektívnosťou. Naším cieľom je priniesť vám obľúbené jedlá priamo k vašim dverám,
              pričom dbáme na kvalitu a pohodlie.
            </h2>
          </div>
        </div>
        <AboutPage />
      </main>
    </div>
  );
}
