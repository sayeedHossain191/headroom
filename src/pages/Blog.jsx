
import img1 from '../assets/blog image/Rectangle 66.png'
import img2 from '../assets/blog image/Rectangle 66 (1).png'
import img3 from '../assets/blog image/analog-landscape-city-with-buildings.jpg'
import { Helmet } from 'react-helmet-async';

const Blog = () => {

    return (
        <div>
            <Helmet>
                <title>
                    HeadRoom | Blogs
                </title>
            </Helmet>
            <div className='grid lg:grid-cols-3'>
                <div className="card  bg-base-100">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Is It Better To Rent Than Buy a Home Right Now?</h2>
                        <p>You may have seen reports in the news recently saying it’s more affordable to rent right now than it is to buy a home. And while that may be true in some markets if you just look at typical monthly payments, there’s one thing that the numbers aren’t factoring in: and that’s home equity. Here’s a look at how big of an impact equity can have and why it’s worth considering as you make your decision.</p>
                    </div>
                </div>
                <div className="card  bg-base-100">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Should I Wait for Mortgage Rates To Come Down Before I Move?</h2>
                        <p>In the housing market, there’s a longstanding relationship between mortgage rates and buyer demand. Typically, the higher rates are, you’ll see lower buyer demand. That’s because some people who want to move will be hesitant to take on a higher mortgage rate for their next home. So, they decide to wait it out and put their plans on hold.</p>
                    </div>
                </div>
                <div className="card  bg-base-100">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ways To Use Your Tax Refund If You Want To Buy a Home</h2>
                        <p>Have you been saving up to buy a home this year? If so, you know there are a number of expenses involved – from your down payment to closing costs. But did you also know your tax refund can help you pay for some of these expenses? As Credit Karma explains:Have you been saving up to buy a home this year? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;