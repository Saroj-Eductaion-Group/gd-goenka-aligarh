import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Eagerly load Home page for instant initial first paint
import Home from "./pages/Home";

// Route wrappers & context providers
import PrivateRoute from "./admin/components/PrivateRoute";
import UserPrivateRoute from "./user/components/UserPrivateRoute";
import { FormProvider } from "./user/forms/FormContext";

// Lazy-loaded Public Pages
const PrincipalMessage = lazy(() => import("./pages/PrincipalMessage"));
const ManagementPage = lazy(() => import("./pages/ManagementPage"));
const VisionAndMission = lazy(() => import("./pages/VisionAndMission"));
const FacultyAndCurriculum = lazy(() => import("./pages/FacultyAndCurriculum"));
const TeachingMethodology = lazy(() => import("./pages/TeachingMethodology"));
const IgnitingMindsPage = lazy(() => import("./pages/IgnitingMindsPage"));
const CompetitionAwards = lazy(() => import("./pages/CompetitionAwards"));
const BookSeller = lazy(() => import("./pages/BookSeller"));
const BeyondAcademics = lazy(() => import("./pages/BeyondAcademics"));
const ClassInfrastructure = lazy(() => import("./pages/ClassInfrastructure"));
const LabsAndLibrary = lazy(() => import("./pages/LabsAndLibrary"));
const Activities = lazy(() => import("./pages/Activities"));
const ImageGallery = lazy(() => import("./pages/ImageGallery"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const MandatoryDisclosure = lazy(() => import("./pages/MandatoryDisclosure"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const GoenkanPursuits = lazy(() => import("./pages/GoenkanPursuits"));
const FeeStructure = lazy(() => import("./pages/FeeStructure"));
const AdmissionForm = lazy(() => import("./pages/AdmissionForm"));
const CurrentOpening = lazy(() => import("./pages/CurrentOpening"));
const JobApplicationForm = lazy(() => import("./pages/JobApplicationForm"));
const RecognisationCet = lazy(() => import("./pages/Recognisation-Cet-Nur-to-8"));
const AdmissionSubmission = lazy(() => import("./pages/AdmissionSubmission"));
const FacultyPage = lazy(() => import("./pages/FacultyPage"));
const AgeCriteria = lazy(() => import("./pages/AgeCriteria"));
const InNews = lazy(() => import("./pages/InNews"));
const HouseSystem = lazy(() => import("./pages/HouseSystem"));
const HolidayEngagement2026 = lazy(() => import("./pages/HolidayEngagement2026"));
const Error404 = lazy(() => import("./pages/Error404").then((m) => ({ default: m.Error404 })));

// Lazy-loaded Admin Components
const Dashboard = lazy(() => import("./admin/Dashboard").then((m) => ({ default: m.Dashboard })));
const AdminLogin = lazy(() => import("./admin/pages/auth/AdminLogin").then((m) => ({ default: m.AdminLogin })));
const ForgotPassword = lazy(() => import("./admin/pages/auth/ForgotPassword").then((m) => ({ default: m.ForgotPassword })));
const ViewContact = lazy(() => import("./admin/pages/contact/ViewContact").then((m) => ({ default: m.ViewContact })));
const AddJob = lazy(() => import("./admin/pages/job/AddJob").then((m) => ({ default: m.AddJob })));
const ViewJob = lazy(() => import("./admin/pages/job/ViewJob").then((m) => ({ default: m.ViewJob })));
const ViewAddmission = lazy(() => import("./admin/pages/admission/ViewAddmission").then((m) => ({ default: m.ViewAddmission })));
const ViewAdmissionApplication = lazy(() => import("./admin/pages/admissionApplication/ViewAdmissionApplication").then((m) => ({ default: m.ViewAdmissionApplication })));
const AddGallery = lazy(() => import("./admin/pages/gallery/AddGallery").then((m) => ({ default: m.AddGallery })));
const ViewGallery = lazy(() => import("./admin/pages/gallery/ViewGallery").then((m) => ({ default: m.ViewGallery })));
const AddFaculty = lazy(() => import("./admin/pages/faculty/AddFaculty").then((m) => ({ default: m.AddFaculty })));
const ViewFaculty = lazy(() => import("./admin/pages/faculty/ViewFaculty").then((m) => ({ default: m.ViewFaculty })));
const ViewJobApplication = lazy(() => import("./admin/pages/jobApplication/ViewJobApplication").then((m) => ({ default: m.ViewJobApplication })));
const ViewContent = lazy(() => import("./admin/pages/content/ViewContent").then((m) => ({ default: m.ViewContent })));
const AddContent = lazy(() => import("./admin/pages/content/AddContent").then((m) => ({ default: m.AddContent })));
const ViewAdmissionApplicationQuery = lazy(() => import("./admin/pages/admissionApplicationQuery/ViewAdmissionApplicationQuery").then((m) => ({ default: m.ViewAdmissionApplicationQuery })));
const ViewUser = lazy(() => import("./admin/pages/user/ViewUser").then((m) => ({ default: m.ViewUser })));
const AddUser = lazy(() => import("./admin/pages/user/AddUser").then((m) => ({ default: m.AddUser })));
const ViewPaymentTransaction = lazy(() => import("./admin/pages/paymentTransaction/ViewPaymentTransaction").then((m) => ({ default: m.ViewPaymentTransaction })));

// Lazy-loaded User / Student Portal Components
const UserDashboard = lazy(() => import("./user/UserDashboard").then((m) => ({ default: m.UserDashboard })));
const UserForgotPassword = lazy(() => import("./user/auth/UserForgetPassword").then((m) => ({ default: m.UserForgotPassword })));
const QueryForm = lazy(() => import("./user/forms/QueryForm"));
const PaymentFailure = lazy(() => import("./user/payment/PaymentFailure"));
const PaymentSuccess = lazy(() => import("./user/payment/PaymentSuccess"));
const MultiStepForm = lazy(() => import("./user/route/MultStepForm").then((m) => ({ default: m.MultiStepForm })));
const PaymentSummary = lazy(() => import("./user/payment/PaymentSummary"));
const StudentDataPdf = lazy(() => import("./user/submittedData/StudentDataPdf").then((m) => ({ default: m.StudentDataPdf })));
const PaymentReceipt = lazy(() => import("./user/payment/PaymentReceipt").then((m) => ({ default: m.PaymentReceipt })));

// Lightweight smooth loader for transition between pages
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#003963] border-t-transparent"></div>
  </div>
);

function App() {
  return (
    <FormProvider>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={"/"} element={<Home />} />
        <Route
          path={"/about/principal-message"}
          element={<PrincipalMessage />}
        />
        <Route path={"/about/Management"} element={<ManagementPage />} />
        <Route
          path={"/about/vision-and-mission"}
          element={<VisionAndMission />}
        />
        <Route
          path={"/about/mandatory-disclosure"}
          element={<MandatoryDisclosure />}
        />
        <Route
          path={"/privacy-policy"}
          element={<PrivacyPolicy />}
        />
        <Route
          path={"/school-policies"}
          element={<PrivacyPolicy />}
        />
        <Route
          path={"/about/school-policies"}
          element={<PrivacyPolicy />}
        />
        <Route
          path={"/academics/faculty-&-curriculum"}
          element={<FacultyAndCurriculum />}
        />
        <Route
          path={"/academics/teaching-methodology"}
          element={<TeachingMethodology />}
        />
        <Route
          path={"/academics/igniting-minds"}
          element={<IgnitingMindsPage />}
        />
        <Route
          path={"/academics/competition-&-awards"}
          element={<CompetitionAwards />}
        />
        <Route
          path={"/academics/authorised-book-seller"}
          element={<BookSeller />}
        />
        <Route
          path="/academics/holiday-engagement-2026"
          element={<HolidayEngagement2026 />}
        />
        <Route path={"/beyond-academics"} element={<BeyondAcademics />} />
        <Route
          path={"/our-campus/class-infrastructure"}
          element={<ClassInfrastructure />}
        />
        <Route
          path={"/our-campus/labs-and-library"}
          element={<LabsAndLibrary />}
        />
        <Route path={"/activities"} element={<Activities />} />
        <Route path="/in-news" element={<InNews />} />
        <Route
          path="/beyond-academics/house-system"
          element={<HouseSystem />}
        />
        <Route path={"/gallery"} element={<ImageGallery />} />
        <Route path={"/contact-us"} element={<ContactForm />} />
        <Route path={"/our-faculty"} element={<FacultyPage />} />
        <Route
          path={"/academics/goenkan-pursuits"}
          element={<GoenkanPursuits />}
        />
        <Route path={"/career/current-openings"} element={<CurrentOpening />} />
        <Route
          path={"/job-application-form"}
          element={<JobApplicationForm />}
        />
        <Route
          path={"/fee-payment/fees-structure"}
          element={<FeeStructure />}
        />

        <Route path={"/admission/age-criteria"} element={<AgeCriteria />} />

        <Route
          path={"/admission/application-form"}
          element={<AdmissionForm />}
        />
        <Route
          path="/admission/application-form/login"
          element={<AdmissionForm />}
        />
        <Route
          path={"/admission/application-submission"}
          element={<AdmissionSubmission />}
        />

        <Route
          path={"/user/forgot-password"}
          element={<UserForgotPassword />}
        />

        {/* User Protected Routes */}

        <Route
          path={"/user/dashboard"}
          element={
            <UserPrivateRoute>
              <UserDashboard />
            </UserPrivateRoute>
          }
        />

        {/* Query Form */}
        <Route
          path={"/user/admission-query"}
          element={<UserPrivateRoute>{<QueryForm />}</UserPrivateRoute>}
        />

        {/* Payment summary */}
        <Route
          path={"/user/payment-summary"}
          element={<UserPrivateRoute>{<PaymentSummary />}</UserPrivateRoute>}
        />
        <Route
          path="/user/steps"
          element={<UserPrivateRoute>{<MultiStepForm />}</UserPrivateRoute>}
        />
        <Route path={"/payment-success"} element={<PaymentSuccess />} />
        <Route path={"/payment-failure"} element={<PaymentFailure />} />

        <Route path={"/student-data"} element={<StudentDataPdf />} />
        <Route path={"/payment-receipt"} element={<PaymentReceipt />} />

        <Route
          path={"/about/mandatory-disclosure/RecognisationCet"}
          element={<RecognisationCet />}
        />

        {/* Admin Routes */}
        <Route path={"/admin"} element={<AdminLogin />} />
        <Route path={"/admin/forgot-password"} element={<ForgotPassword />} />

        {/* Admin Protected Routes */}
        {/* Dashboard */}
        <Route
          path={"/admin/dashboard"}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Admin  */}
        <Route
          path={"/admin/add-user"}
          element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
          }
        />
        <Route
          path={"/admin/view-user"}
          element={
            <PrivateRoute>
              <ViewUser />
            </PrivateRoute>
          }
        />
        {/* Contact */}
        <Route
          path={"/admin/view-contact"}
          element={
            <PrivateRoute>
              <ViewContact />
            </PrivateRoute>
          }
        />
        {/* Job  */}
        <Route
          path={"/admin/add-job"}
          element={
            <PrivateRoute>
              <AddJob />
            </PrivateRoute>
          }
        />
        <Route
          path={"/admin/view-job"}
          element={
            <PrivateRoute>
              <ViewJob />
            </PrivateRoute>
          }
        />
        {/* Admission Enquiry */}
        <Route
          path={"/admin/view-admission"}
          element={
            <PrivateRoute>
              <ViewAddmission />
            </PrivateRoute>
          }
        />
        {/* Admission Application */}
        <Route
          path={"/admin/view-admission-application"}
          element={
            <PrivateRoute>
              <ViewAdmissionApplication />
            </PrivateRoute>
          }
        />
        {/* Admission Application Query */}
        <Route
          path={"/admin/view-admission-application-query"}
          element={
            <PrivateRoute>
              <ViewAdmissionApplicationQuery />
            </PrivateRoute>
          }
        />
        {/* Admission Application Payment Transaction */}
        <Route
          path={"/admin/view-payment-transaction"}
          element={
            <PrivateRoute>
              <ViewPaymentTransaction />
            </PrivateRoute>
          }
        />
        {/* Gallery  */}
        <Route
          path={"/admin/add-gallery"}
          element={
            <PrivateRoute>
              <AddGallery />
            </PrivateRoute>
          }
        />

        <Route
          path={"/admin/view-gallery"}
          element={
            <PrivateRoute>
              <ViewGallery />
            </PrivateRoute>
          }
        />
        {/* Faculty  */}
        <Route
          path={"/admin/add-faculty"}
          element={
            <PrivateRoute>
              <AddFaculty />
            </PrivateRoute>
          }
        />
        <Route
          path={"/admin/view-faculty"}
          element={
            <PrivateRoute>
              <ViewFaculty />
            </PrivateRoute>
          }
        />
        {/* Content  */}
        <Route
          path={"/admin/add-content"}
          element={
            <PrivateRoute>
              <AddContent />
            </PrivateRoute>
          }
        />
        <Route
          path={"/admin/view-content"}
          element={
            <PrivateRoute>
              <ViewContent />
            </PrivateRoute>
          }
        />

        {/* Job Applications  */}
        <Route
          path={"/admin/view-job-applications"}
          element={
            <PrivateRoute>
              <ViewJobApplication />
            </PrivateRoute>
          }
        />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Suspense>
  </FormProvider>
);
}

export default App;
