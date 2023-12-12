const ErrorPage = (props) => {
  let title = "An error occurred!";
  let message = "Something went wrong!";

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>;
    </>
  );
};

export default ErrorPage;
