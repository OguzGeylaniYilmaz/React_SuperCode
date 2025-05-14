import { Link } from "react-router-dom";
import icon from "../assets/images/Ico.png";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";

const Header = () => {
  const [showLoginMsg, setShowLoginMsg] = useState(false);

  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be wrapped with Provider before use!");
  }
  const { user, logout } = context;

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        setShowLoginMsg(true);
        setTimeout(() => setShowLoginMsg(false), 3000);
      }
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header>
      <div className="bg-yellow-300 h-[30px]" />
      <div className="bg-white h-[113px] px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={icon} alt="Logo" className="w-[28] h-[12]" />
            <span className="font-medium text-[26px]">Die Rezeptwelt</span>
          </div>
          <nav>
            <ul className="flex gap-18">
              <li className="text-[22px] font-medium">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[22px] font-medium">
                <Link to="/rezepte">Rezepte</Link>
              </li>
              <li className="text-[22px] font-medium">
                <Link to="/uber-uns">Über uns</Link>
              </li>

              {user ? (
                <>
                  {showLoginMsg && (
                    <li className="text-[22px] font-medium text-red-600">
                      User is currently logged in
                    </li>
                  )}

                  <li>
                    <button
                      onClick={logout}
                      className="text-[22px] font-medium"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="text-[22px] font-medium">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
