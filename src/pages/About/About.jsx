import HeroImg from "@/assets/images/hero.jpeg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
         Developer, Designer, Creator, Innovator

          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Nitesh Lad, a Computer Science student and passionate Python & Web Developer.
    I enjoy building responsive websites and practical real-world projects using
    HTML, CSS, JavaScript and React.{" "}
                <span className="font-bold text-white">
                  I am continuously learning new technologies and building practical projects to strengthen my development skills.

                </span>
              </p>
              <p className="text-white">
                 I am currently learning Data Structures & Algorithms and backend development
    to become a full-stack developer. I love solving problems, improving my coding
    skills, and continuously exploring new technologies in software development.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    My goal is to work as a software developer where I can apply my knowledge,
        build useful applications, and grow every day as a programmer. I believe
        in learning by building projects and turning ideas into real applications.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nitesh Lad
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Aspiring Software Developer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
