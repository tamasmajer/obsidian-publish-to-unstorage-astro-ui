import { signIn } from "@astro-auth/client";

const SignIn = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signIn({
            provider: "google",
          });
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;