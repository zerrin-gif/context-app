import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoItemsContextProvider from './contexts/TodoItemsContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Titlebar />
          <Navbar />
          <TodoItemsContextProvider>
            <TodoList/>
          </TodoItemsContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
