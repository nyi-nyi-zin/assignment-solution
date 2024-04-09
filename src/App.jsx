import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import TitleContextProvider from "./usecontext";

function App() {
  return (
    <>
      <TitleContextProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </TitleContextProvider>
    </>
  );
}
export default App;
