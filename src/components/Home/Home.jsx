import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobCategories from "../JobCategories/JobCategories";


const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategories />
            <FeatureJobs />
        </div>
    );
};

export default Home;