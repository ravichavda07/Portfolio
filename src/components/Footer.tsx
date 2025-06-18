
export default function Footer() {
    return (
      <footer className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} - All rights reserved.
          </p>
        </div>
      </footer>
    );
  }