const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4">
        {/* Garis tengah */}
        <div className="border-t border-gray-400 max-w-screen"></div>

        {/* Teks Footer */}
        <div className="text-center text-gray-600 text-sm mt-4">
          &copy; {new Date().getFullYear()} Kue Basah Tradisional. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
