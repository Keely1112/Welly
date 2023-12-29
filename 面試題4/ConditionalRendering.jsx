function ConditionalRendering({ isLoggedIn }) {
  return isLoggedIn ? <MainPage /> : <LoginPage />;
}

export default ConditionalRendering;
