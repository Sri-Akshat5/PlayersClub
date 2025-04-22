import PageWrapper from '../components/PageWrapper'

const Home = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-7xl font-extrabold uppercase leading-tight">
          Join the<br />PlayersClub
        </h1>
        <p className="mt-6 max-w-md text-lg sm:text-xl text-gray-300">
          Streetwear that speaks for you. T-Shirts, Hoodies, Caps — built for confidence.
        </p>
        <a
          href="/products"
          className="mt-8 px-6 py-3 bg-white text-black text-sm font-bold tracking-wide uppercase hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </section>
    </PageWrapper>
  )
}

export default Home
