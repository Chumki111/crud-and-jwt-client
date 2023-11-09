'use client';

import { Accordion } from 'flowbite-react';
const Faq = () => {
    return (
      <div>

        <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold'>
            Frequently Asked Questions
            </h1>
            <p className='py-3'>FAQs are organized in a way that addresses the most common queries or concerns that users may have, <br /> making it a convenient resource for obtaining information. </p>
        </div>
         <div className='max-w-4xl mx-auto'>
         <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>What types of home services do you offer?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          there are different service ywe provide, such as 
          <ul>
            <li>
            plumbing
            </li>
            <li>
            electrical work
            </li>
            <li>
            cleaning
            </li>
            <li>
            landscaping
            </li>
          </ul>
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Do you offer emergency services?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Let customers know if we provide 24/7 emergency services and how they can reach we in urgent situations.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Can I schedule recurring services, such as regular cleaning or maintenance? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          In your response, you should clarify whether you offer this service and if so, provide information on how customers can set up recurring appointments, what frequency options are available, and any details they should be aware of, such as pricing or flexibility in scheduling.
          </p>
        
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What COVID-19 safety measures do you have in place? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          By providing clear and detailed information about the COVID-19 safety measures you have in place, you can help build trust with your customers and show that you prioritize their health and well-being. This information is particularly important in today`s environment where safety concerns are paramount.
          </p>
        
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How quickly can I expect a response to my service request? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Providing a clear expectation for response time helps manage customer expectations and demonstrates your commitment to timely and effective communication. It `s also an opportunity to showcase your dedication to customer service.
          </p>
        
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
         </div>
      </div>
    );
};

export default Faq;