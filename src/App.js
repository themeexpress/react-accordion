import Question from './Question';
import './App.css';



// lets create the list of dictionaries of out FAQ data

const faq_data = [
  {
      "id": 1,
      "title": "What is AWS?",
      "info": "Amazon Web Services (AWS) is a secure cloud services platform offered by Amazon.com. It provides a wide range of computing power, storage options, and networking capabilities to help businesses scale and grow."
  },
  {
      "id": 2,
      "title": "What is Amazon EC2?",
      "info": "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It allows users to quickly scale up or down to meet demand, pay only for what they use, and deploy applications on a global scale."
  },
  {
      "id": 3,
      "title": "What is Amazon S3?",
      "info": "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. It is designed to store and retrieve any amount of data from anywhere on the web."
  },
  {
      "id": 4,
      "title": "What is AWS Lambda?",
      "info": "AWS Lambda is a serverless computing service that lets you run code without provisioning or managing servers. It automatically scales and manages the underlying infrastructure based on the size of the workload, so you pay only for the compute time you consume."
  },
  {
      "id": 5,
      "title": "What is Amazon RDS?",
      "info": "Amazon Relational Database Service (Amazon RDS) is a fully managed database service that makes it easy to set up, operate, and scale relational databases in the cloud. It supports several database engines, including MySQL, PostgreSQL, Oracle, and SQL Server."
  }
]

function App() {
  return (
    <>
      <h1> React Accordion FAQ </h1>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='questions'>
          {faq_data.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
      
    </>
  );
}

export default App;
