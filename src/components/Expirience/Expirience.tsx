import adminPanel from '../../assets/adminPanel.jpg';
import '../../styles/Expirience/expirience.scss';

const Expirience = () => {
  return (
    <section className='expirience'>
      <h2 className='expirience__header'>Expirience</h2>
      <div className='expirience__details'>
        <p className='aplication-name'>Social media application</p>
        <p className='role'>Role: Frontend Developer</p>
        <p className='duration'>Duration: 01.11.2023 - Present</p>
        <img src={adminPanel} alt='admin-panel' />
        <p className='description'>
          As a developer within a team dedicated to a social media application, my primary focus involved overseeing the
          administrative panel. I designed a user-friendly table for displaying information, incorporating filters,
          sorting, events handling such as changes in user status, and pagination to streamline data navigation. I
          collaborated closely with the team, gaining valuable experience and refining my Git version control skills.
          Notably, during this collaborative effort, I received constructive reviews and contributed to the project
          through pull requests, further enhancing my abilities in a dynamic team environment.
        </p>
      </div>
    </section>
  );
};

export default Expirience;
