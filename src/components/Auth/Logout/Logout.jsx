import React from 'react';
import {Button} from 'primereact/button';
import {destroyModal} from '../../../services/renderModal';

const LogoutMessage = ({handleLogout}) => {
  return (
      <div className="authContainer">
        <div className="logoutMessage">
          <h3>Do you want to logout?</h3>
          <div className='buttonsContainer'>
            <Button label='Cancel' icon="pi pi-times" iconPos="right"
                    className="p-button-lg p-button-outlined" onClick={destroyModal}/>
            <Button label='Logout' icon="pi pi-sign-out" iconPos="right"
                    className="p-button-lg"
                    onClick={handleLogout}/>
          </div>
        </div>
      </div>
  );
};

export default LogoutMessage;