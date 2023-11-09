import { useLoaderData } from "react-router-dom";


// import SearchInput from "./SearchInput";
import TypeWriter from "./TypeWriter";
import AllServices from "./AllServices";
const Services = () => {
  

    const handleSearch=(e) =>{
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        console.log(search);
        
    }


    const services = useLoaderData();
    
    return (
        <div className="mt-14">
            
            <TypeWriter></TypeWriter>
            <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch}>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input type="search" id="default-search" name="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
        <button  type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-[#FF3811] hover:bg-[#FF3811] focus:ring-4 focus:outline-none focus:ring-[#FF3811] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]">Search</button>
    </div>
</form>

            </div>
            <div className="text-center my-6">
                <h1 className="font-bold text-4xl">All Services Here</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 max-w-6xl mx-auto">
                {
                    services?.map(service => <AllServices key={service._id} service={service}></AllServices>)
                }
            </div>
            <button  type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-[#FF3811] hover:bg-[#FF3811] focus:ring-4 focus:outline-none focus:ring-[#FF3811] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]">See More</button>
           
          
        </div>
    );
};

export default Services;