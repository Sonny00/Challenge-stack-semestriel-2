import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>Je suis connecté </h1>
  ) : (
    <h1> Je ne suis pas connecté </h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
