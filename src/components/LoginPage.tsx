import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // You might need to install jwt-decode

function LoginPage() {
  const onSuccess = (credentialResponse: any) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Login Success:", decoded);
    // Handle successful login, e.g., store user data in state or send to backend
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <GoogleLogin data-size="small" onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default LoginPage;
