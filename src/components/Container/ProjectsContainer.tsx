

interface ProjectsContainerProps {
  children: React.ReactNode;
}

const ProjectsContainer = ({ children }: ProjectsContainerProps) => {
  return <div className="scroll-container">{children}</div>;
};

export default ProjectsContainer;
