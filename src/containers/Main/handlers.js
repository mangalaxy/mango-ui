import React from 'react';
import {adjustHeight, adjustWidth} from "../../helpers/helpers";
import {renderModal} from "../../services/renderModal";
import LoginFrame from "../../components/Auth/Login/LoginFrame";
import routes from "../../constants/routes.json";
import SignUpTalentFrame from "../../components/Auth/SignUpTalent/SignUpTalentFrame";
import SignUpEmployerFrame from "../../components/Auth/SignUpEmployer/SignUpEmployerFrame";

export const openLoginForm = (history, setRole) => {
    const width = adjustWidth();
    const height = adjustHeight();
    if (width > 800 && height > 600) {
        renderModal(<LoginFrame
                history={history}
                setRole={setRole}
                handleSignUpTalent={openSignUpTalent}
                handleSingUpEmployer={openSignUpEmployer}
            />
        )
    } else {
        document.location.href = routes.COMMON.LOGIN;
    }
}

export const openSignUpTalent = () => {
    const width = adjustWidth();
    const height = adjustHeight();
    if (width > 800 && height > 600) {
        renderModal(<SignUpTalentFrame handleSignIn={openLoginForm}/>);
    } else {
        document.location.href = routes.COMMON.SIGNUP_TALENT;
    }
}

export const openSignUpEmployer = () => {
    const width = adjustWidth();
    const height = adjustHeight();
    if (width > 800 && height > 600) {
        renderModal(<SignUpEmployerFrame handleSignIn={openLoginForm}/>);
    } else {
        document.location.href = routes.COMMON.SIGNUP_EMPLOYER;
    }
}
