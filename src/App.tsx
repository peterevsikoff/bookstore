import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Books, Cart, Favorites, Header, SearchResult, SelectedBook } from "./components";

//https://api.itbook.store/

const App = () => {
  return (
    <BrowserRouter basename="/bookstore">
          <Header/>
          <Routes>
            <Route path="/">
              <Route index element={<Books/>}></Route>
              {/* <Route path="private" element={isUserAuthorized ? <div>Private</div> : <Navigate to="/"/>}></Route>
              <Route path="signUp" element={<SignUp/>}/>
              <Route path="registrationConfirmation" element={<RegistrationConfirmation/>}/>
              <Route path="registrationSuccess" element={<RegistrationSuccess/>}/>
              <Route path="activate/:uid/:token" element={<SignUpActivation/>}/>
              <Route path="signIn" element={<SignIn/>}/> */}
              <Route path="books">
                <Route index element={<Books/>}></Route>
                <Route path=":id" element={<SelectedBook />}></Route>
                <Route path="search">
                  <Route path=":searchValue" element={<SearchResult />}></Route>
                </Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="favorites" element={<Favorites />}></Route>
              </Route>
              <Route path="*" element={<div>Wrong Page</div>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
