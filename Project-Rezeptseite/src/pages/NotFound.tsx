const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white font-sans">
      <div className="text-center bg-white/80 p-8 rounded-2xl shadow-lg">
        <div className="text-9xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent animate-fadeIn">
          404
        </div>
        <div className="text-2xl mt-4 mb-8 animate-fadeInDelay">
          Hoppla! Wir können die gesuchte Seite nicht finden.
        </div>
        <a
          href="/"
          className="inline-block px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-teal-500 to-green-400 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default ForgetPassword;
