import { Provider } from "react-redux";
import Weather from "./components/Weather";
import { store } from "./redux/store";

const App = () => {
  return ( 
    <>
      <Provider store={store}>
        <section>
          <Weather/>
        </section>
      </Provider>
    </>
   );
}
 
export default App;