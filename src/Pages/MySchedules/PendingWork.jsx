import { Dropdown, Table } from "flowbite-react";
import PropTypes from 'prop-types';
const PendingWork = ({booking,handleCompleted}) => {
    const {_id,serviceName, Price,date, userEmail} = booking;

    
    return (
       
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {userEmail}
          </Table.Cell>
          <Table.Cell>{date}</Table.Cell>
          <Table.Cell>{serviceName}</Table.Cell>
          <Table.Cell>${Price}</Table.Cell>
          <Table.Cell>
          <div className="">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="Pending">
          <Dropdown.Item>
            <button
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Pending
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              In Progress
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={() => handleCompleted(_id)}
              
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Completed 
            </button>
          </Dropdown.Item>
        </Dropdown>
      </div>
      
    </div>
          </Table.Cell>
        </Table.Row>
        
    );
};
PendingWork.propTypes ={
  booking:PropTypes.object
}
PendingWork.propTypes ={
  handleCompleted:PropTypes.node
}
export default PendingWork;