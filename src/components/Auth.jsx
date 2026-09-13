
import { useState } from "react";
import { supabase } from "../lib/config.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  const resetMessages = () => {
    setError("");
    setMessage("");
  };

  // =========================
  // LOGIN
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();

    resetMessages();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }


  };

  // =========================
  // REGISTER
  // =========================
  const handleRegister = async (e) => {
    e.preventDefault();

    resetMessages();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
      emailRedirectTo: 'https://gamewp.netlify.app/',
  },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // Existing email
    if (data.user && data.user.identities?.length === 0) {
      setError("This email is already registered. Please login.");
      return;
    }

    // Email confirmation is required
    if (data.user && !data.session) {
      // Go back to login page
      navigate("/login", {
        replace: true,
        state: {
          message:
            "Registration successful! Please check your email to confirm your account.",
        },
      });

      return;
    }

    // If Supabase automatically logs the user in
    if (data.user && data.session) {
      navigate("/", { replace: true });
    }
  };

  // =========================
  // SWITCH TO REGISTER
  // =========================
  const showRegister = () => {
    resetMessages();
    setIsRegistering(true);
  };

  // =========================
  // SWITCH TO LOGIN
  // =========================
  const showLogin = () => {
    resetMessages();
    setIsRegistering(false);
  };


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030505] text-white">

      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,255,170,0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,170,0.35) 1px, transparent 1px)
        `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glow - top left */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />

      {/* Glow - bottom right */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.8)_50%)] bg-[length:100%_4px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">

        <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden border border-white/10 bg-[#070b0b]/90 shadow-[0_0_80px_rgba(0,255,170,0.08)] backdrop-blur-xl lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}

          <div className="relative hidden min-h-[650px] flex-col justify-between overflow-hidden border-r border-white/10 p-10 lg:flex">

            {/* Decorative circles */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-emerald-400/10" />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-emerald-400/10" />

            {/* Logo */}
            <div className="relative">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-emerald-400/40 bg-emerald-400/5 font-mono text-emerald-400">
                  &gt;_
                </div>

                <span className="font-mono text-xs tracking-[0.35em] text-emerald-400">
                  SYSTEM.ONLINE
                </span>
              </div>

              <h1 className="font-mono text-6xl font-black tracking-[-0.06em] text-white">
                THE
                <br />

                <span className="text-emerald-400 [text-shadow:0_0_30px_rgba(52,211,153,0.45)]">
                  GAMER
                </span>
              </h1>

              <div className="mt-6 max-w-md">
                <p className="font-mono text-sm leading-7 text-gray-500">
                  ENTER THE NETWORK.
                  <br />
                  BUILD YOUR SQUAD.
                  <br />
                  DOMINATE THE GAME.
                </p>
              </div>
            </div>

            {/* Terminal */}
            <div className="relative mt-10 border border-white/10 bg-black/40 p-5 font-mono text-xs">

              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2 w-2 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                <span className="h-2 w-2 rounded-full bg-green-500/70" />

                <span className="ml-2 text-gray-600">
                  gamer@network:~
                </span>
              </div>

              <div className="space-y-2 text-gray-500">
                <p>
                  <span className="text-emerald-400">$</span>{" "}
                  initialize gamer_protocol
                </p>

                <p>
                  <span className="text-emerald-400">[OK]</span>{" "}
                  secure connection established
                </p>

                <p>
                  <span className="text-emerald-400">[OK]</span>{" "}
                  gaming network online
                </p>

                <p>
                  <span className="text-emerald-400">[OK]</span>{" "}
                  waiting for player...
                  <span className="ml-1 animate-pulse text-emerald-400">
                    █
                  </span>
                </p>
              </div>
            </div>

            {/* Bottom status */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
              <span>SECURE NETWORK</span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                ONLINE
              </span>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex min-h-[650px] items-center justify-center p-6 sm:p-10">

            {/* Top code */}
            <div className="absolute right-8 top-7 hidden font-mono text-[9px] tracking-[0.2em] text-gray-700 sm:block">
              ACCESS_ID://{isRegistering ? "REGISTER" : "LOGIN"}
            </div>

            <div className="w-full max-w-md">

              {/* Mobile Logo */}
              <div className="mb-10 lg:hidden">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-emerald-400">
                    &gt;_
                  </span>

                  <span className="font-mono text-xs tracking-[0.3em] text-gray-500">
                    SYSTEM.ONLINE
                  </span>
                </div>

                <h1 className="font-mono text-4xl font-black tracking-tight">
                  THE{" "}
                  <span className="text-emerald-400">
                    GAMER
                  </span>
                </h1>
              </div>

              {/* Heading */}
              <div className="mb-8">

                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-emerald-400" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400">
                    {isRegistering
                      ? "New Player"
                      : "Player Authentication"}
                  </span>
                </div>

                <h2 className="font-mono text-3xl font-bold tracking-tight text-white">
                  {isRegistering
                    ? "Create your identity."
                    : "Welcome back, player."}
                </h2>

                <p className="mt-3 font-mono text-xs leading-6 text-gray-600">
                  {isRegistering
                    ? "// Register your account and enter the network."
                    : "// Authenticate to access your gaming network."}
                </p>
              </div>

              {/* ================= FORM ================= */}

              <div>

                {/* Error */}
                {error && (
                  <div className="mb-5 border border-red-500/20 bg-red-500/5 px-4 py-3 font-mono text-xs text-red-400">
                    <span className="mr-2 text-red-500">!</span>
                    {error}
                  </div>
                )}

                {/* Success */}
                {message && (
                  <div className="mb-5 border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 font-mono text-xs text-emerald-400">
                    <span className="mr-2">✓</span>
                    {message}
                  </div>
                )}

                <form
                  onSubmit={
                    isRegistering
                      ? handleRegister
                      : handleLogin
                  }
                  className="space-y-5"
                >

                  {/* Email */}
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                      Player ID / Email
                    </label>

                    <div className="group relative">

                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-emerald-500/60">
                        @
                      </span>

                      <input
                        type="email"
                        placeholder="player@example.com"
                        value={email}
                        disabled={loading}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="
                        w-full
                        border border-white/10
                        bg-black/40
                        px-11 py-4
                        font-mono text-sm
                        text-white
                        outline-none
                        placeholder:text-gray-700
                        transition
                        focus:border-emerald-400/50
                        focus:bg-emerald-400/[0.02]
                        focus:shadow-[0_0_25px_rgba(52,211,153,0.06)]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                      />

                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">

                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        Access Key
                      </label>

                      {!isRegistering && (
                        <button
                          type="button"
                          onClick={resetMessages}
                          className="font-mono text-[9px] uppercase tracking-wider text-gray-600 transition hover:text-emerald-400"
                        >
                          Forgot key?
                        </button>
                      )}

                    </div>

                    <div className="relative">

                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-emerald-500/60">
                        #
                      </span>

                      <input
                        type="password"
                        placeholder="••••••••••••"
                        value={password}
                        disabled={loading}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                        className="
                        w-full
                        border border-white/10
                        bg-black/40
                        px-11 py-4
                        font-mono text-sm
                        tracking-widest
                        text-white
                        outline-none
                        placeholder:text-gray-800
                        transition
                        focus:border-emerald-400/50
                        focus:bg-emerald-400/[0.02]
                        focus:shadow-[0_0_25px_rgba(52,211,153,0.06)]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                      />

                    </div>
                  </div>

                  {/* ================= LOGIN ================= */}

                  {!isRegistering && (
                    <>

                      <button
                        type="submit"
                        disabled={loading}
                        className="
                        group
                        relative
                        w-full
                        overflow-hidden
                        border border-emerald-400/40
                        bg-emerald-400
                        px-6 py-4
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-black
                        transition
                        hover:bg-emerald-300
                        hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                      >
                        <span className="relative z-10">
                          {loading
                            ? "[ AUTHENTICATING... ]"
                            : "[ ENTER NETWORK ]"}
                        </span>
                      </button>

                      <div className="flex items-center gap-4 py-1">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="font-mono text-[9px] text-gray-700">
                          NEW PLAYER?
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>

                      <button
                        type="button"
                        onClick={showRegister}
                        disabled={loading}
                        className="
                        w-full
                        border border-white/10
                        bg-white/[0.02]
                        px-6 py-4
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-gray-400
                        transition
                        hover:border-emerald-400/30
                        hover:bg-emerald-400/[0.04]
                        hover:text-emerald-400
                        disabled:opacity-40
                      "
                      >
                        [ CREATE PLAYER ]
                      </button>

                    </>
                  )}

                  {/* ================= REGISTER ================= */}

                  {isRegistering && (
                    <>

                      <button
                        type="submit"
                        disabled={loading}
                        className="
                        w-full
                        border border-emerald-400/40
                        bg-emerald-400
                        px-6 py-4
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-black
                        transition
                        hover:bg-emerald-300
                        hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                      >
                        {loading
                          ? "[ CREATING IDENTITY... ]"
                          : "[ INITIALIZE PLAYER ]"}
                      </button>

                      <button
                        type="button"
                        onClick={showLogin}
                        disabled={loading}
                        className="
                        w-full
                        border border-white/10
                        bg-white/[0.02]
                        px-6 py-4
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-gray-500
                        transition
                        hover:border-white/20
                        hover:text-white
                        disabled:opacity-40
                      "
                      >
                        [ RETURN TO LOGIN ]
                      </button>

                    </>
                  )}

                </form>
              </div>

              {/* Footer */}
              <div className="mt-10 border-t border-white/10 pt-5">

                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-gray-700">

                  <span>
                    THE_GAMER // 2026
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    ENCRYPTED
                  </span>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );


}

