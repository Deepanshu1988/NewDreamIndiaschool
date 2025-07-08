import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Gallery from "./pages/Gallery";
import Eregister from "./pages/Eregister";
import Contact from "./pages/Contact";
import AdminRegister from "./pages/AdminDashboard/AdminRegister";
import AdminHome from "./pages/AdminDashboard/AdminHome";
import RegisterResponse from "./pages/RegisterResponse";
import ViewStudentData from "./component/adminDashboard/ViewStudentData";
import Cart from "./pages/Cart";
// import Payment from "./pages/TestRazor";
import GalleryLogin from "./pages/GalleryLogin";
// import { useAuth } from "./context/Index";
import AdminLogin from "./pages/AdminDashboard/AdminLogin";
import AllListItems from "./component/adminDashboard/GalleryPart/AllListItems";
import AdminViewImages from "./component/adminDashboard/GalleryPart/AdminViewImages";
import ResponseReceipt from "./pages/ResponseReceipt";
import CCAvenue from "./component/CCAvenue";
import Uniform from "./component/Uniform";
import PaymentCC from "./CcAvenue/PaymentCC";
import RegResponse from "./pages/RegResponse";
import ViewReceipt from "./component/adminDashboard/ViewReceipt";

const App = () => {
  // const [auth, setAuth] = useAuth();
  // console.log(auth.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/gallery-login" element={<GalleryLogin />} />

        <Route path="/e-register" element={<Eregister />} />
        <Route path="/reg-response" element={<RegResponse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register-response" element={<RegisterResponse />} />
        <Route path="/response-receipt" element={<ResponseReceipt />} />
        <Route path="/cartPage" element={<Cart />} />
        {/* admin-routes */}
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/eventList" element={<AllListItems />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route
          path="/admin-view-images/:event_name"
          element={<AdminViewImages />}
        />

        <Route path="/view-student-data/:id" element={<ViewStudentData />} />
        <Route path="/view-student-receipt/:id" element={<ViewReceipt />} />
        <Route path="/cc-avenue" element={<PaymentCC />} />
        <Route path="/uniform" element={<Uniform />} />
      </Routes>
    </>
  );
};

export default App;
