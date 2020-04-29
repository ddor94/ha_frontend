import React from 'react';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import AccountSettings from './AccountSettings/AccountSettings';

import 'react-tabs/style/react-tabs.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Dashboard() {
  return (
    <div className="container is-fluid">
      <Tabs className="tabs">
        <div className="dashboard">
          <div className="dashboard__tabs">
            <TabList>
              <Tab className="dashboard__tab-item tabs__item is-size-5 has-text-weight-bold"><span>Perfil</span></Tab>
              <Tab className="dashboard__tab-item tabs__item is-size-5 has-text-weight-bold"><span>Conta</span></Tab>
            </TabList>
          </div>

          <div className="dashboard__content">
            <TabPanel>
              <ProfileSettings />
            </TabPanel>

            <TabPanel>
              <AccountSettings />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default Dashboard;
