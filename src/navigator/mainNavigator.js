import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile6164129Navigator from '../features/UserProfile6164129/navigator';
import ArticleList7164128Navigator from '../features/ArticleList7164128/navigator';
import CalendarView9164126Navigator from '../features/CalendarView9164126/navigator';
import Dashboard111164124Navigator from '../features/Dashboard111164124/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile6164129: { screen: UserProfile6164129Navigator },
ArticleList7164128: { screen: ArticleList7164128Navigator },
CalendarView9164126: { screen: CalendarView9164126Navigator },
Dashboard111164124: { screen: Dashboard111164124Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
