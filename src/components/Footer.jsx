export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-100 text-center py-8 ">
        <p className="text-gray-500 mb-4">
          &copy; 2025 Toorin. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms of Service
          </a>
        </div>
      </footer>
    </>
  );
}
