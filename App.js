import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './views/home/HomeScreen';
import SearchListScreen from "./views/searchlist/SearchListScreen";
import MovieDetailScreen from './views/detailscreen/MovieDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SearchList: SearchListScreen,
    MovieDetailScreen: MovieDetailScreen
    
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);