import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account, Books, Cart, Favorites, Footer, Header, RegistrationSuccess, SearchResult, SelectedBook, Sign, SignUpActivation } from "./components";

//https://api.itbook.store/

const App = () => {
  return (
    <BrowserRouter basename="/bookstore">
          <Header/>
          <Routes>
            <Route path="/">
              <Route index element={<Books/>}></Route>
              <Route path="registrationSuccess" element={<RegistrationSuccess/>}/>
              <Route path="activate/:uid/:token" element={<SignUpActivation/>}/>
              <Route path="sign" element={<Sign />}/>
              <Route path="account" element={<Account />}/>
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
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
