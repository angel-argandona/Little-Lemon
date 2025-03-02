import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { WindowProvider } from './components/context/windowContext';

function App() {
  return (
    <WindowProvider>
		<Header/>
		<Routes>
			<Route path='/' element={<Main/>}></Route>
		</Routes>
		<Footer/>
	</WindowProvider>
  );
}

export default App;
