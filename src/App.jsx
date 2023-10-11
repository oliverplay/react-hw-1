import React from 'react';
import Friends from 'components/Friends/Friends';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Transactions from 'components/Transactions/Transactions';
import profileData from './data/profile.json';
import friendsData from './data/friends.json';
import statisticsData from './data/statistics.json';
import transactionsData from './data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile data={profileData} />
      <Friends data={friendsData} />
      <Statistics data={statisticsData} />
      <Transactions data={transactionsData} />
    </div>
  );
};

export default App;
