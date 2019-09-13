import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import {capitalizeFirstLetter} from './src/utils/capitalizeFirstLetter';

const appNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage,
    },
    PeopleDetail: {
      screen: PeopleDetailPage,
      navigationOptions: ({navigation}) => {
        return {
          title: capitalizeFirstLetter(
            navigation.state.params.people.name.first,
          ),
          headerTitleStyle: {
            color: '#fff',
            fontSize: 24,
          },
        };
      },
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
      headerTintColor: '#fff',
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
