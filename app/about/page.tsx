import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-start justify-center p-24 max-lg:p-4 mt-20 lg:mt-0 gap-6">
      <h1 className="text-4xl lg:text-7xl font-semibold  text-start">
        About{" "}
        <span
          className="text-[#FC506A]
        "
        >
          Beats Alchemy
        </span>{" "}
        Founder
      </h1>
      <Image
        src="/aboutus.png"
        alt="From Holywood to Healing"
        width={1440}
        height={1440}
        className="object-contain w-full h-full "
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-32 justify-center items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium text-start">
            Jamin Van Dillen
          </h2>
          <p className="text-lg text-gray-600 my-4">
            A Los Angeles native, Jamin has produced songs for music industry
            legends such as Britney Spears, Prodigal Sunn of Wu-Tang Killa Bees,
            and Nicki Minaj. He has also worked for business leaders, composing
            and producing motivational songs for them before they take the
            stage. Success was at {"Jamin's"} fingertips, but after seeing some
            of the darker aspects of the music industry, he found himself at a
            crossroads. He recognized a deeper calling and decided to leave LA
            behind. Now based in North Carolina, surrounded by nature, he
            pursues his true passion for sound healing, sacred geometry, and
            helping humanity return to truth through music.
          </p>
        </div>
        <div>
          <Image
            src="/jamin1.png"
            alt="Jamin Van Dillen"
            width={1440}
            height={1440}
            className="object-contain w-full h-full "
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-32 justify-center items-center">
        <div>
          <Image
            src="/jamin2.png"
            alt="Jamin Van Dillen"
            width={1440}
            height={1440}
            className="object-contain w-full h-full "
          />
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium text-start">
            Founding <span className="text-[#FC506A]">Beats Alchemy</span>
          </h2>
          <p className="text-lg text-gray-600 my-4">
            In 2018, Jamin founded Beats Alchemy, a venture born from prayer,
            synchronicities, and aligned energies. Since then, he has used his
            sensitivity to energy and ability to understand emotion to further
            his mission to integrate sound healing and modern mixing methods.
            For Jamin, the most rewarding aspect of Beats Alchemy is the
            opportunity to help people through sound. "I love that we get to
            help people through sound. That still amazes me," he says. His work
            at Beats Alchemy continues to be driven by his passion for using
            sound to facilitate healing and transformation, helping others reach
            their highest potential
          </p>
        </div>
      </div>
    </section>
  );
}
