export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Peng-Tsung-Chun</p>
        <p className="mt-2">National Chengchi University</p>
      </div>
    </footer>
  );
}
