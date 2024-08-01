// BuildRoutine.jsx
export const BuildRoutine = () => {
  return (
    <main className='max-w-4xl mx-auto px-4 py-8 md:px-10 lg:px-20 bg-gray-800 text-white'>
      <section className='text-center my-8'>
        <h1 className='text-5xl font-bold'>Welcome to the Skincare Project!</h1>
        <p className='mt-2 text-xl'>Guiding you through building a personalized skincare routine.</p>
      </section>

      <section className='space-y-8'>
        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>Determine Your Skin Type</h2>
          <p className='mt-4'>Many products work best for specific skin types. Knowing yours is a great starting point.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>Choose a Gentle Cleanser</h2>
          <p className='mt-4'>Most soaps are harsh and can damage the skin barrier. Opt for a cleanser suitable for your skin type.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>Add Targeted Products</h2>
          <p className='mt-4'>Each product should address at least one concern, ideally several. This layered approach helps tackle various skin needs.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>Monitor and Adjust</h2>
          <p className='mt-4'>Keep a record of your skin's condition before and after each addition. Gradual improvements are common, so tracking is key.</p>
        </article>

        <article className='bg-gray-900 p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold'>Finalize Your Routine</h2>
          <p className='mt-4'>Once satisfied, your routine is set. Remember, balance is key—there's no meaningful limit, but avoid overdoing it.</p>
        </article>
      </section>
    </main>
  );
};
