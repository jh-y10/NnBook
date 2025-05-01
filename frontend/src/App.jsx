import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/Home/HomePage";
import BookList from "./pages/Home/BookList";
import BookDetail from "./pages/WishList/BookDetail";
import MyPage from "./pages/WishList/MyPage";
import LikeList from "./pages/WishList/LikeList";
import MyLibrary from "./pages/Library/MyLibrary";
import MyLibraryDetail from "./pages/Library/MyLibraryDetail";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import MeetingList from "./pages/Meeting/MeetingList";
import MeetingDetail from "./pages/Meeting/MeetingDetail";
import CreateMeeting from "./pages/Meeting/CreateMeeting";
import RentalList from "./pages/Rental/RentalList";
import RentalDetail from "./pages/Rental/RentalDetail";
import Recommend from "./pages/Home/Recommend";
import NotFound from "./pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="recommend" element={<Recommend />} />
          <Route path="books">
            <Route index element={<BookList />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="likes" element={<LikeList />} />
          </Route>
          <Route path="library">
            <Route index element={<MyLibrary />} />
            <Route path=":id" element={<MyLibraryDetail />} />
          </Route>
          <Route path="meeting">
            <Route index element={<MeetingList />} />
            <Route path=":id" element={<MeetingDetail />} />
            <Route path="create" element={<CreateMeeting />} />
          </Route>
          <Route path="rental">
            <Route index element={<RentalList />} />
            <Route path=":id" element={<RentalDetail />} />
          </Route>
        </Route>

        <Route path="/login">
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      
    </div>
  );
}

export default App;
