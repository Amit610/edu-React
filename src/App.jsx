
import MentorshipProgram from './pages/mentorshipProgram/MentorshipProgram';
import Courses from './pages/courses/Courses';
import Footer from './pages/footer/Footer'
import Hire from './pages/hire/components/Hire'
import HireFromUs from './pages/hireFromUs/HireFromUs';
import Skilled from './pages/skilled/Skilled'
import StudentReviews from './pages/StudentReviews/StudentReviews';

const App = () => {
  return (
    <div>
      <Courses></Courses>
      <Footer></Footer>
      <StudentReviews></StudentReviews>
      {/* <MentorshipProgram></MentorshipProgram>
      
      <Hire></Hire>
      <HireFromUs></HireFromUs>
      <Skilled></Skilled> */}
    </div>
  );
};

export default App;