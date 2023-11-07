import { useLoaderData } from "react-router-dom";


import SearchInput from "./SearchInput";
import TypeWriter from "./TypeWriter";
import AllServices from "./AllServices";
const Services = () => {



    const services = useLoaderData();
    console.log(services);
    return (
        <div className="mt-14">
            <TypeWriter></TypeWriter>
            <div className="max-w-4xl mx-auto">
                <SearchInput></SearchInput>

            </div>
            <div className="text-center my-6">
                <h1 className="font-bold text-4xl">All Services Here</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    services?.map(service => <AllServices key={service._id} service={service}></AllServices>)
                }
            </div>
        </div>
    );
};

export default Services;