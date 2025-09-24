import React from 'react';
import Container from './Container';

const StatasBox = ({issuesData}) => {
    const pendingData =issuesData.filter(issues =>issues.status==="Pending")
    const submittedData =issuesData.filter(issues =>issues.status==="Submitted")
    const reviewedData =issuesData.filter(issues =>issues.status==="Reviewed")
    
    return (
        <div className='mt-5'>
            <Container>
                <div className='grid grid-cols-3 gap-3'>
                    <div className="pending min-h-80  bg-gray-600 text-white flex flex-col items-center justify-center rounded-xl">
                        <h2 className='font-bold text-4xl'>Pending</h2>
                        <p className='font-semibold text-3xl'>{pendingData.length}</p>
                    </div>
                    <div className="submitted min-h-80  bg-purple-400 text-white flex flex-col items-center justify-center rounded-xl">
                        <h2 className='font-bold text-4xl'>Submitted</h2>
                        <p className='font-semibold text-3xl'>{submittedData.length}</p>
                    </div>
                    <div className="reviewed min-h-80  bg-green-500 text-white flex flex-col items-center justify-center rounded-xl">
                        <h2 className='font-bold text-4xl'>Reviewed</h2>
                        <p className='font-semibold text-3xl'>{reviewedData.length}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StatasBox;