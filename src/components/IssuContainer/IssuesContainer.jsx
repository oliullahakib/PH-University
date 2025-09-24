import React, { use, useState } from 'react';
import StatuesBtn from './StatuesBtn';
import Container from '../Container';
import IssueCard from './IssueCard';
import StatasBox from '../StatasBox';
const IssuesContainer = ({ issuesPromiss }) => {
    const issuesData = use(issuesPromiss)
    const [datas,setDatas]=useState(issuesData)
    const [toggleBtn, setToggleBtn] = useState("All")
    const filtaredIssues = datas.filter(data => data.status ===toggleBtn)
    console.log(filtaredIssues)
    return (
        <div>
            <Container>
                <StatasBox issuesData={issuesData} />
                <StatuesBtn
                    toggleBtn={toggleBtn}
                    setToggleBtn={setToggleBtn}
                />
                <div className='grid grid-cols-3 gap-3 mt-5'>
                    {
                       toggleBtn==="All"? issuesData.map((issue,index) => <IssueCard key={index} issue={issue} />):filtaredIssues.map((issue,index) => <IssueCard key={index} issue={issue} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default IssuesContainer;