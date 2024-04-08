import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaBriefcase,
  FaMinus,
} from "react-icons/fa";

export default function Home() {
  const axelLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/axel-morillion/",
      icon: <FaLinkedinIn />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/AxelMGit",
      icon: <FaGithubAlt />,
      target: "_blank",
    }
  ];

  const erwanLinks = [
    {
      name: "Twitter",
      url: "https://ci3l.github.io/",
      icon: <FaBriefcase />,
      target: "_blank",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/erwan-poir%C3%A9/",
      icon: <FaLinkedinIn />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/Ci3l",
      icon: <FaGithubAlt />,
      target: "_blank",
    },
  ];

  return (
    <main className="pb-2 max-w-4xl mx-auto">
      <div className="text-center p-10">
        <span className='text-4xl text-orange-500'>Hey !</span>
        <h1 className='font-bold pt-3 text-xl sm:text-4xl md:text-5xl'>Algorithmic Antics Association</h1>
        <div className="flex flex-col items-center">
          <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>Associés en développement, prêts à concrétiser vos idées.       <a href="mailto:poire.erwan2005@gmail.com,axel.morillion@outlook.com" className="text-blue-500 hover:underline">Contactez-nous </a>et passons à l'action !</h2>
          <span className="mt-2 bg-white hover border-slate-200 p-4  font-medium text-sm md:text-lg max-w-xl text-gray-600 text-center rounded-xl shadow-sm hover:shadow-md duration-200" style={{ textAlign: 'justify' }}>
          Notre association étudiante se spécialise dans le développement de sites web et d'applications, offrant des solutions sur mesure pour répondre aux besoins de nos clients. <br/><br/>
          Forts de notre amitié et de notre collaboration de longue date, nous combinons nos compétences variées en CSS, HTML, Python, Java, C++, C, API et GPT-6 pour réaliser des projets de haute qualité. <br/><br/>
          Notre flexibilité et notre engagement envers la satisfaction client nous permettent de nous adapter rapidement aux exigences changeantes et de garantir des résultats exceptionnels. <br/><br/>
          En bref, nous sommes une équipe jeune, dynamique et passionnée, prête à concrétiser vos idées et à transformer vos projets en succès.
        </span>

        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col mx-auto p-10 text-center">
          <span className='text-4xl text-orange-500'>⌘</span>
          <h1 className='font-bold pt-3 text-xl sm:text-4xl md:text-5xl'>Axel Morillion</h1>
          <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>Étudiant à l’ESGI (École Supérieure de Génie Informatique)</h2>
          <div className="mt-6 sm:mt-8 flex justify-center  gap-2">
            {axelLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.target}
                className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-slate-500 bg-white shadow-sm hover:text-red-500 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 hover:shadow-md duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col mx-auto p-10 text-center">
          <span className='text-4xl text-orange-500'>⌘</span>
          <h1 className='font-bold pt-3 text-xl sm:text-4xl md:text-5xl'>Erwan Poiré</h1>
          <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>L1 MIDO @ Paris Dauphine PSL</h2>
          <div className="mt-6 sm:mt-8 flex justify-center  gap-2">
            {erwanLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.target}
                className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-slate-500 bg-white shadow-sm hover:text-red-500 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 hover:shadow-md duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
      <p className="text-gray-600 font-medium">Vous avez un projet que vous souhaitez concrétiser ? Contactez-nous par e-mail :</p>
      <a href="mailto:poire.erwan2005@gmail.com,axel.morillion@outlook.com" className="text-blue-500 hover:underline">Envoyer un mail</a>
      </div>

    </main>
  )
}
