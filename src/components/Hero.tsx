import Image from "next/image";
import { FaGithub, FaMedium, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-2/5 mb-12 md:mb-0 flex justify-center md:justify-end">
            <div className="relative">
              {/* 照片容器 */}
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-900/30 relative z-10">
                <Image
                  src="/image/headphoto.jpg"
                  alt="彭宗淳"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* 裝飾元素 */}
              <div className="absolute top-[-15px] right-[-15px] w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 opacity-70 blur-md z-0"></div>
              <div className="absolute bottom-[-10px] left-[-10px] w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70 blur-md z-0"></div>
            </div>
          </div>

          <div className="md:w-3/5 text-center md:text-left md:pl-12">
            <div className="inline-block mb-2 px-4 py-1 bg-blue-900/30 rounded-full text-blue-300 text-sm font-medium">
              遙感技術 | 空間資訊 | 程式開發
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              彭宗淳
              <span className="block text-2xl md:text-3xl font-normal text-blue-400 mt-2">
                國立政治大學地政所研究生
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6 hidden md:block"></div>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              畢業於國立政治大學地政學系土地測量與資訊組，
              目前就讀於國立政治大學地政所，持續深入研究遙感技術與地理資訊系統。
              熱衷於學習並且利用遙測技術解決或觀測大範圍地表相關議題與問題，並具備紮實的程式開發能力。
              從2025年起即在Medium平台撰寫諸篇相關於InSAR或Linux硬體相關的文章！
              <p className="block text-2xl md:text-1xl font-normal text-yellow-200 mt-2">
                目前想更深入研究衛星資料處理相關的知識!
              </p>
            </p>

            {/* 主要按鈕 */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-300 font-medium flex items-center"
              >
                聯絡我
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </a>
              <a
                href="https://medium.com/@ablecck12"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 font-medium flex items-center"
              >
                <FaMedium className="mr-2" />
                查看我的文章
              </a>
            </div>

            {/* 社交媒體連結 - 更好的位置 */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <span className="text-gray-400 text-sm hidden md:inline">
                相關連結：
              </span>
              <div className="flex gap-3">
                <a
                  href="https://medium.com/@ablecck12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 rounded-full p-2.5 hover:bg-white/20 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                  aria-label="Medium"
                  title="Medium"
                >
                  <FaMedium className="text-blue-300 text-lg group-hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/Nody-Peng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 rounded-full p-2.5 hover:bg-white/20 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub className="text-blue-300 text-lg group-hover:text-blue-400" />
                </a>
                <a
                  href="mailto:ablecck12@gmail.com"
                  className="bg-white/10 rounded-full p-2.5 hover:bg-white/20 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                  aria-label="Email"
                  title="Email"
                >
                  <FaEnvelope className="text-blue-300 text-lg group-hover:text-blue-400" />
                </a>
              </div>
            </div>

            {/* 滾動提示 */}
            <div className="hidden md:flex items-center mt-16 text-gray-400 text-sm">
              <div className="w-8 h-[1px] bg-gray-500 mr-3"></div>
              向下滾動以了解更多
              <div className="animate-bounce ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
