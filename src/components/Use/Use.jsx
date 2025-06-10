import Title from "../Title/Title";
const Use = () => {
  return (
    <div className="p-14 dark:bg-gray-900">
      <div className="">
        <div className="text-center">
          <Title title="Who use it" />
        </div>
        <div className="max-w-5xl mx-auto mt-10 space-y-4">
          <div>
            <h1 className="text-xl font-bold dark:text-gray-400">Developer</h1>
            <p className="text-justify text-sm text-gray-500">
              Geared towards developers, showcasing how the task management
              platform streamlines project workflows, enhances collaboration,
              and provides a structured environment for efficient development
              processes
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold dark:text-gray-400">Creatives</h1>
            <p className="text-justify text-sm text-gray-500">
              Tailored for creative professionals, emphasizing the adaptability
              of the platform to creative project management. It outlines how
              the tool aids in organizing and executing creative endeavors,
              fostering a conducive environment for ideation.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold dark:text-gray-400">Bankers</h1>
            <p className="text-justify text-sm text-gray-500">
              Addresses the needs of bankers, highlighting the platform s
              utility in managing financial tasks, ensuring secure
              collaboration, and maintaining a systematic approach to financial
              project management.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold dark:text-gray-400">
              Entrepreneurs
            </h1>
            <p className="text-justify text-sm text-gray-500">
              Targets entrepreneurs, illustrating how the task management
              website supports the unique challenges of entrepreneurship. It
              emphasizes features that facilitate goal setting, progress
              tracking, and effective team communication.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold dark:text-gray-400">
              Students and Educators
            </h1>
            <p className="text-justify text-sm text-gray-500">
              Tailored for students and educators, showcasing the platform s
              role in academic task management. It highlights features that
              assist in organizing assignments, collaborating on projects, and
              maintaining a structured approach to educational tasks..
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold dark:text-gray-400">
              Legal Professionals
            </h1>
            <p className="text-justify text-sm text-gray-500">
              Addresses the specific needs of legal professionals, emphasizing
              the platform s capabilities in managing legal tasks, deadlines,
              and fostering secure collaboration within a legal context.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
