import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from "../../constants/routes.json";
import TalentMenu from "../../components/Talent/TalentMenu/TalentMenu";
import CreateProfile from "../../components/Profile/CreateProfile/CreateProfile";
import TalentProfile from "../TalentProfile/TalentProfile";
import ProfileInterview from "../../components/ProfileInterview/ProfileInterview";

const TalentPage = ({setRole}) => {
  return (
        <div className="employer-bg">
          <TalentMenu setRole={setRole}/>
          <div id='dialog-container'/>
          <Switch>
            <Route exact path={routes.TALENT.BUILD_PROFILE} component={CreateProfile}/>
            <Route exact path={routes.TALENT.VIEW_PROFILE} component={TalentProfile}/>
            <Route exact path={routes.TALENT.INTERVIEWS} component={ProfileInterview}/>
          </Switch>
        </div>
  )
}

export default TalentPage