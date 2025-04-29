import { Routes, Route } from "react-router";
import AppLayout from "./frontend/layouts/AppLayout";
import HomePage from "./frontend/pages/Home/HomePage";
import BookList from "./frontend/pages/Home/BookList";
import BookDetail from "./frontend/pages/WishList/BookDetail";
import MyPage from "./frontend/pages/WishList/MyPage";
import LikeList from "./frontend/pages/WishList/LikeList";
import MyLibrary from "./frontend/pages/Library/MyLibrary";
import MyLibraryDetail from "./frontend/pages/Library/MyLibraryDetail";
import SignIn from "./frontend/pages/Login/SignIn";
import SignUp from "./frontend/pages/Login/SignUp";
import MeetingList from "./frontend/pages/Meeting/MeetingList";
import MeetingDetail from "./frontend/pages/Meeting/MeetingDetail";
import CreateMeeting from "./frontend/pages/Meeting/CreateMeeting";
import RentalList from "./frontend/pages/Rental/RentalList";
import RentalDetail from "./frontend/pages/Rental/RentalDetail";
import Recommend from "./frontend/pages/Home/Recommend";
import Footer from "./frontend/layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./frontend/styles/App.css";
import NotFound from "./frontend/pages/NotFound/NotFound";

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

      <Footer />
    </div>
  );
}

export default App;
