import { Head } from '@inertiajs/react'

interface HomeProps {
  champions: any
  items: any
}

export default function Home({ champions }: HomeProps) {
  console.log(champions)
  return (
    <>
      <Head title="Homepage" />
      <div className="bg-gray-950 m-auto">
        <section className="w-11/12 m-auto">
          <h1 className="text-3xl font-bold underline text-yellow-500">Hello world!</h1>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-6 lg:grid-cols-8">
            {Object.values(champions).map((champion: any) => (
              <article key={champion.id} className="group w-fit cursor-pointer transition">
                <img className="rounded-md" src={champion.skins[0].tilePath} />
                <p className="text-gray-600 text-xl pt-4 group-hover:text-gray-300 transition">
                  {champion.name}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
