export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "nlw-connect",
      languages: ["React ", "NextJS ", "NodeJS ", "Fastify "],
      url: "https://github.com/guilhermeslimadev/nlw-connect",
    },
    {
      id: 3,
      name: "pricing-panel",
      languages: ["HTML ", "CSS ", "BootStrap"],
      url: "https://github.com/guilhermeslimadev/pricingpanel",
    },
    {
      id: 2,
      name: "quiz-react",
      languages: ["React ", "CSS ", "JavaScript "],
      url: "https://github.com/guilhermesilvaDev2048/quiz_react",
    },
    {
      id: 4,
      name: "form-steps",
      languages: ["React ", "CSS ", "JavaScript "],
      url: "https://github.com/guilhermesilvaDev2048/formulariomulti-react",
    },
  ];

  return (
    <ul className="flex items-center justify-start flex-wrap gap-4">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          className="py-3 px-4 rounded-md border lg:w-[300px] border-gray-500 space-y-5 w-full"
        >
          <header className="flex items-center justify-between">
            <span className="text-blue-500">{project.name}</span>
            <span className="text-sm py-1 px-3 rounded-2xl border border-gray-500">
              Public
            </span>
          </header>
          <span className="flex items-center gap-3 space-x-4 text-xs font-light text-gray-200">
            {project.languages}
          </span>
        </a>
      ))}
    </ul>
  );
};
