import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';

const appNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Lista de Contatos',
      headerStyle: {
        backgroundColor: '#64b5f6',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
      },
      headerTitleStyle: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
      },
    },
  },
);

export default createAppContainer(appNavigator);
