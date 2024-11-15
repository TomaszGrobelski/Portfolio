import adminPanel from '../../assets/adminPanel.jpg';
import '../../styles/Expirience/expirience.scss';

const Expirience = () => {
  return (
    <section className='expirience'>
      <h2 className='expirience__header'>Expirience</h2>
      <div className='expirience__details'>
        <p className='aplication-name'>Social media application </p>
        <a href='https://www.fiszi.pl/' aria-label='open side fiszi.pl' target='_blank' rel='noopener noreferrer'>
          Fiszi.pl
        </a>
        <p className='role'>Role: Frontend Developer</p>
        <p className='duration'>Duration: 01.11.2023 - 01.08.2024</p>

        <p className='duration'></p>

        <img src={adminPanel} alt='admin-panel' />
        <div className='description '>
          <p>
            As a developer on a team developing a social media application, I had the pleasure of working on various
            aspects of the project that worked together to create a rich and interactive experience for users. My
            responsibilities included the development of cross-cutting functionalities such as sorting, filtering,
            pagination and event handling, which were crucial not only for the administration panel, but for the entire
            application, including the forum section, blog and other interactive modules.
          </p>

          <p>
            With particular emphasis on the reusability of components, I built modals used not only for basic
            administrative activities, but also for advanced operations, such as editing comments. These modals were
            designed in a way that allows them to be easily customized and reused in different parts of the application,
            which significantly accelerated the development of the project.{' '}
          </p>

          <p>
            Integration with the API was implemented using React Query (RQ), which allowed for effective management of
            the state of data coming from the server and optimization of the number of queries. This allows users to
            enjoy a smooth and responsive application that updates data in real time without overloading the server.
          </p>

          <p>
            {' '}
            I used the Yup library to validate forms, which allowed me to create consistent and well-thought-out
            validation schemes. Yup allowed for the rapid implementation of complex validation rules, which in turn
            contributed to improving the quality of data entered by users and administrators.
          </p>

          <p>
            Working closely with the team, gaining valuable experience and improving my Git version control skills were
            key elements of my role. Constructive code reviews and active participation in projects through pull
            requests have significantly improved my skills in a dynamic team environment. Through this process, I not
            only improved the quality of my own code, but also contributed to the development of the project, which
            allowed me to gain a deeper understanding of software development processes at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expirience;
