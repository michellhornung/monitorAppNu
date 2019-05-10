import { createAppContainer, createStackNavigator } from 'react-navigation';

import SignIn from './pages/signIn';
import SiteInfo from './pages/siteInfo';
import Main from './pages/Main';

const Routes = createAppContainer(createStackNavigator({
  SignIn,
  SiteInfo,
  Main,
}));

export default Routes;
