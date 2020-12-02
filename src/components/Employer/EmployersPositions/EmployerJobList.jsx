import React from "react"
import EmployerJobItem from "./EmployerJobItem"

const EmployerJobList = ({jobs, history}) => {
  return (
        <div className="employersPositions-content">
          {jobs.map(job => <EmployerJobItem key={job.id} entry={job} history={history} />)}
        </div>
  )
}

export default EmployerJobList