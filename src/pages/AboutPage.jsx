import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"


function AboutPage() {
  return <Card>
     <div className="about">npm run deploy
         <hi>About This Project</hi>
         <p>Thi is a React app to leave feedback for a product or a service</p>
         <p>Version: 1.0.0</p>

         <p>
             <Link to="/feedback-app"> Back to Home</Link>
         </p>
     </div>
     </Card>
}

export default AboutPage