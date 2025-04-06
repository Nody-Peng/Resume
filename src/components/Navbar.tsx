import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">彭宗淳</div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="#about"
            className="text-gray-300 hover:text-white transition"
          >
            關於我
          </Link>
          <Link
            href="#education"
            className="text-gray-300 hover:text-white transition"
          >
            學歷成就
          </Link>
          <Link
            href="#skills"
            className="text-gray-300 hover:text-white transition"
          >
            專業技能
          </Link>
          <Link
            href="#experience"
            className="text-gray-300 hover:text-white transition"
          >
            工作經驗
          </Link>
          <Link
            href="#articles"
            className="text-gray-300 hover:text-white transition"
          >
            技術文章
          </Link>
          <Link
            href="#certificates"
            className="text-gray-300 hover:text-white transition"
          >
            證明文件
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            聯絡方式
          </Link>
        </div>
      </div>
    </nav>
  );
}
