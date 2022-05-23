import './App.css';
import Rating from './components/Rating';
import UserFeedback from './components/UserFeedback';

function App() {
  return (
    <div className="App">
      <div className='stats-info'>
        <div className='users-stats'>
          <h1>10,000+ of our users love our products.</h1>
          <p className='users-info'>We only provide great products combined with excelent customer service. See what our satisfied customers are saying about our services.</p>
        </div>
        <div className='users-rating'>
          <Rating rate='5' place='Reviews' />
          <Rating rate='5' place='Report Guru' />
          <Rating rate='5' place='BestTech' />
        </div>
      </div>
      <div className='feedbacks-container'>
          <UserFeedback key={1} name="Colton Smith" status="Verified Buyer" text="We needed the same printed design as the one we had ordered a week prior.
      Not only did they find the original order, but we also received it in time.
      Excellent!" />
          <UserFeedback key={2} name="Irene Roberts" status="Verified Buyer" text="Customer service is always excellent and very quick turn around. Completely
      delighted with the simplicity of the purchase and the speed of delivery." />
          <UserFeedback key={3} name="Anne Wallace" status="Verified Buyer" text="Put an order with this company and can only praise them for the very high
      standard. Will definitely use them again and recommend them to everyone!" />
      </div>
    </div>
  );
}

export default App;
