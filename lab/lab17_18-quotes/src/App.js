import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/Root";
import QuotesLayout from "./components/layout/Quotes";
import DetailLayout from "./components/layout/Detail";
import NewQuoteLayout from "./components/layout/NewQuote";
import NoQuotesFound from "./components/quotes/NoQuotesFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navigate to="/quotes" replace={true} /> },
      { path: "/quotes", element: <QuotesLayout /> },
      { path: "/quotes/:quoteId", element: <DetailLayout /> },
      { path: "/new-quote", element: <NewQuoteLayout /> },
      { path: "*", element: <NoQuotesFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
