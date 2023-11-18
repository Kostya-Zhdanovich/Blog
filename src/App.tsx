import Layout from './components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { createColorTheme } from './styles/theme';
import { Routes , Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import { userRoutes } from './client/Routes/userRoutes';
import PrivateRoute from './client/Routes/PrivateRoute';
import { useTypedSelector } from './store/Hooks/useTypedSelector';
import { useActions } from './store/Hooks/useActions';
import React from 'react';

function App() {
  const userTheme = useTypedSelector((state) => state.theme.themeMode);
  const isUserSignedIn = useTypedSelector((state) => state.session.isSignedIn);
  const { authorizeUser } = useActions();
  const currentTheme = createColorTheme(userTheme);

  if(!isUserSignedIn) {
    authorizeUser();
  };
  
  return (  
      <ThemeProvider theme={currentTheme}>
          <Routes>
            <Route path = '/' element = {<Layout />}>
              <Route index element = {<MainPage />}/>
              {userRoutes.map(({id, path, Component, additionalProps, strict}) => {
                return <Route key = {id} path = {path} element = {
                !strict ? 
                <Component {...additionalProps}/> 
                : <PrivateRoute> <Component {...additionalProps}/> </PrivateRoute>}/> 
              })}
            </Route>              
          </Routes>       
      </ThemeProvider>  
  );
}

export default App;