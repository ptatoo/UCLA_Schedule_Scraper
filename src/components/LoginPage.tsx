import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // You might need to install jwt-decode

function LoginPage() {
  const onSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Login Success:", decoded);
    // Handle successful login, e.g., store user data in state or send to backend
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default LoginPage;
