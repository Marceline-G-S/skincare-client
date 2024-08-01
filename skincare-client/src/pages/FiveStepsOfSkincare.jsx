// FiveStepsOfSkincare.jsx
export const FiveStepsOfSkincare = () => {
  return (
    <main className='max-w-4xl mx-auto px-4 py-8 md:px-10 lg:px-20 bg-gray-800 text-white'>
      <section className='text-center my-8'>
        <h1 className='text-5xl font-bold'>Welcome to the Skincare Project!</h1>
        <p className='mt-2 text-xl'>Understanding the 5 primary steps to effective skincare.</p>
      </section>

      <section className='space-y-8'>
        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>1. Cleansing</h2>
          <p className='mt-4'>Imagine your skin as a fortress with towering walls (the stratum corneum). Cleansing is like maintaining those walls—it removes dirt, oil, and impurities, keeping your skin's security system intact.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>2. Exfoliating</h2>
          <p className='mt-4'>Think of exfoliation as spring cleaning for your skin. Exfoliants sweep away dead skin cells to reveal fresh, radiant skin underneath.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>3. Treatment</h2>
          <p className='mt-4'>Products with targeted ingredients treat specific skin concerns, addressing issues like acne, dryness, or signs of aging.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>4. Moisturizing</h2>
          <p className='mt-4'>Moisturizers hydrate the skin, keeping it fresh and plump. They're essential for maintaining skin health and preventing dehydration.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>5. Protection</h2>
          <p className='mt-4'>Sunscreen is crucial for protecting against sun damage, which contributes significantly to premature skin aging.</p>
        </article>
      </section>
    </main>
  );
};
