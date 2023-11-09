import { Table } from "flowbite-react";


const MyBooking = ({booking}) => {
    const { serviceImage, serviceName, serviceDescription, providerImage, providerName, Price,date, location ,providerEmail,userEmail} = booking
    return (
        
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {userEmail}
          </Table.Cell>
          <Table.Cell>{date}</Table.Cell>
          <Table.Cell>{serviceName}</Table.Cell>
          <Table.Cell>${Price}</Table.Cell>
          
        </Table.Row>
        
    );
};

export default MyBooking;