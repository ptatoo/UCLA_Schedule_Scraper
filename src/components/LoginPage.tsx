import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // You might need to install jwt-decode

function LoginPage() {
  const onSuccess = async (credentialResponse: any) => {
    const credentials = credentialResponse.credential;

    //DELTE BOTTOM TWO LATER
    const decoded = jwtDecode(credentials);
    console.log("Login Success:", decoded);

    // sends cred to backend through /login route

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credentials }),
      credentials: "include",
    });

    const data = await res.json();
    console.log("Backend login:", data);
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
