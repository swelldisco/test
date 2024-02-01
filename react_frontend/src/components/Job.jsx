
const Job = ({companyName, positionName, location, applicationDate}) => {
    return (
        <div className="job-container">
            <ul><h3>{companyName}</h3>
                <li>{positionName}</li>
                <li>{location}</li>
                <li>{applicationDate}</li>
            </ul>
        </div>
    )
}

export default Job;