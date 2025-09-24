import React, { use, useState } from 'react';
import StatuesBtn from './StatuesBtn';
import Container from '../Container';
import IssueCard from './IssueCard';

const IssuesContainer = ({ issuesPromiss }) => {
    const issuesData = use(issuesPromiss)
    const [toggleBtn, setToggleBtn] = useState("All")
    return (
        <div>
            <Container>
                <StatuesBtn
                    toggleBtn={toggleBtn}
                    setToggleBtn={setToggleBtn}
                />
                <div className='grid grid-cols-3 gap-3 mt-5'>
                    {
                        issuesData.map((issue,index) => <IssueCard key={index} issue={issue} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default IssuesContainer;