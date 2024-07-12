import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";


const App = () => {
  return (
    <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/">
              <Route index element={<div>Main Page</div>}></Route>
              {/* <Route path="private" element={isUserAuthorized ? <div>Private</div> : <Navigate to="/"/>}></Route>
              <Route path="signUp" element={<SignUp/>}/>
              <Route path="registrationConfirmation" element={<RegistrationConfirmation/>}/>
              <Route path="registrationSuccess" element={<RegistrationSuccess/>}/>
              <Route path="activate/:uid/:token" element={<SignUpActivation/>}/>
              <Route path="signIn" element={<SignIn/>}/>
              <Route path="posts">
                <Route index element={<Posts/>}></Route>
                <Route path="new" element={<AddPost/>}></Route>
                <Route path="search" element={<SearchResult/>}></Route>
                <Route path=":id" element={<SelectedPost />}></Route>
              </Route> */}
              <Route path="*" element={<div>Wrong Page</div>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
