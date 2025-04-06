"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaMediumM,
  FaSearch,
} from "react-icons/fa";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      title: "【InSAR_Learning】合成孔徑雷達成像基本原理",
      date: "2025-02-22",
      link: "https://medium.com/@ablecck12/insar-learning-%E5%90%88%E6%88%90%E5%AD%94%E5%BE%91%E9%9B%B7%E9%81%94%E6%88%90%E5%83%8F%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86-558e0a052d57",
      description: "深入淺出地解釋合成孔徑雷達成像的基本原理和工作方式。",
      category: "InSAR",
      image: "/image/principle.jpg", // 假設有這個圖片，如果沒有可以替換或移除相關程式碼
      fallbackImage: "https://source.unsplash.com/random/300x200/?satellite",
    },
    {
      title: "【InSAR_Learning】DInSAR Analysis with SNAP",
      date: "2025-02-02",
      link: "https://medium.com/@ablecck12/insra-learning-dinsar-analysis-with-snap-detecting-ground-deformation-from-the-2025-tingri-f9f9104d0bfd",
      description: "使用 SNAP 軟體進行 DInSAR 分析，檢測地表形變。",
      category: "InSAR",
      image: "/image/DInSAR_SNAP.jpg",
      fallbackImage: "https://source.unsplash.com/random/300x200/?radar",
    },
    {
      title: "【InSAR_Learning】How to get and merge DEM data?",
      date: "2025-02-02",
      link: "https://medium.com/@ablecck12/insar-learning-how-to-get-and-merge-dem-data-759a36dc1dc8",
      description: "針對地形資料(DEM)進行下載合併等拼接處理教學。",
      category: "InSAR",
      image: "/image/DEM_Merge.jpg",
      fallbackImage: "https://source.unsplash.com/random/300x200/?earth",
    },
    {
      title: "【Ubuntu24.04】如何掛載外接硬碟",
      date: "2025-03-14",
      link: "https://medium.com/@ablecck12/ubuntu24-04-%E5%A6%82%E4%BD%95%E6%8E%9B%E8%BC%89%E5%A4%96%E6%8E%A5%E7%A1%AC%E7%A2%9F-a2dae9d8348f",
      description: "詳細教學如何在 Ubuntu 24.04 系統中掛載外接硬碟。",
      category: "Linux",
      image: "/image/Linux_SSD.jpg",
      fallbackImage: "https://source.unsplash.com/random/300x200/?linux",
    },
  ];

  // 篩選文章
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 動畫變數
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="articles"
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">技術文章</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            分享我在遙感科學、InSAR 技術、GIS 與 Linux
            系統等領域的學習心得與技術教學
          </p>
        </motion.div>

        {/* 搜尋欄 */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜尋文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* 文章卡片 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredArticles.map((article, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.src = article.fallbackImage;
                    }}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    閱讀更多
                    <FaArrowRight className="ml-2 text-sm" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* 若無搜尋結果 */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              找不到符合「{searchTerm}」的文章
            </p>
          </div>
        )}

        {/* 查看更多按鈕 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://medium.com/@ablecck12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <FaMediumM className="mr-2" />
            查看我的 Medium 主頁
          </a>
        </motion.div>
      </div>
    </section>
  );
}
