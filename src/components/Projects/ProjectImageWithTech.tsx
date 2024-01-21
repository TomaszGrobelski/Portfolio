import '../../styles/Projects/projectImageWithTech.scss';

interface ProjectImageWithTechProps {
  image: string;
  alt: string;
  year: string;
  tech: string;
}
const ProjectImageWithTech = ({ image, alt, year, tech }: ProjectImageWithTechProps) => {
    return (
      <div className='project-image-with-tech'>
        <img className='project-image-with-tech__image' src={image} alt={alt} />
        <div className='project-image-with-tech__info'>
          <div className='project-image-with-tech__year'>{year}</div>
          <div className='project-image-with-tech__tech'>{tech}</div>
        </div>
      </div>
    );
  };
  
  export default ProjectImageWithTech;
  
