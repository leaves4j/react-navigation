import createNavigationContainer from './createNavigationContainer';
import StateUtils from './StateUtils';

import createNavigator from './navigators/createNavigator';
import {
  createStackNavigator,
  Transitioner,
  StackView,
  StackViewCard,
  StackViewTransitionConfigs,
  Header,
  HeaderTitle,
  HeaderBackButton,
  HeaderStyleInterpolator,
} from 'react-navigation-stack';
import createSwitchNavigator from './navigators/createSwitchNavigator';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import NavigationActions from './NavigationActions';
import StackActions from './routers/StackActions';

import StackRouter from './routers/StackRouter';
import TabRouter from './routers/TabRouter';
import SwitchRouter from './routers/SwitchRouter';

import SafeAreaView from 'react-native-safe-area-view';
import SceneView from './views/SceneView';
import ResourceSavingSceneView from './views/ResourceSavingSceneView';

import {
  DrawerView,
  DrawerItems,
  DrawerSidebar,
  createDrawerNavigator,
  DrawerActions,
  DrawerRouter,
} from 'react-navigation-drawer';

import SwitchView from './views/SwitchView/SwitchView';

import withNavigation from './views/withNavigation';
import withNavigationFocus from './views/withNavigationFocus';
import withOrientation from './views/withOrientation';

export {
  // Core
  createNavigationContainer,
  StateUtils,
  // Navigators
  createNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  // Actions
  NavigationActions,
  StackActions,
  DrawerActions,
  // Routers
  StackRouter,
  TabRouter,
  DrawerRouter,
  SwitchRouter,
  // Views
  Transitioner,
  StackView,
  StackViewCard,
  SafeAreaView,
  SceneView,
  ResourceSavingSceneView,
  StackViewTransitionConfigs,
  // Header
  Header,
  HeaderTitle,
  HeaderBackButton,
  HeaderStyleInterpolator,
  // DrawerView
  DrawerView,
  DrawerItems,
  DrawerSidebar,
  // SwitchView
  SwitchView,
  // HOCs
  withNavigation,
  withNavigationFocus,
  withOrientation,
};
