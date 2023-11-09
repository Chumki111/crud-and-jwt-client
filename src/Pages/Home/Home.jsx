
import Banner from "./Banner";
import CustomerShop from "./CustomerShop";
import Faq from "./Faq";
import PopularServices from "./PopularServices";





const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            
            <PopularServices></PopularServices>
            <Faq></Faq>
            <CustomerShop></CustomerShop>
        </div>
    );
};

export default Home;