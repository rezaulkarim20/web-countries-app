const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-center bg-gray-500 p-4">
        <p>&copy; {currentYear} Developed by Rezaul karim. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
