"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaAward,
  FaGraduationCap,
  FaTrophy,
  FaFileAlt,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// 證書類型定義
type CertificateType = "活動證書" | "成績單" | "比賽證明" | "全部";

// 證書資料結構
interface Certificate {
  id: string;
  title: string;
  date: string;
  issuer: string;
  type: Exclude<CertificateType, "全部">;
  image: string;
  description: string;
}

export default function Certificates() {
  // 證書資料 (請替換成你自己的證書資料)
  const certificates: Certificate[] = [
    {
      id: "cert1",
      title: "第十屆 全國大專院校暨高中職 StoryMap 校園競賽 冠軍",
      date: "2024年7月",
      issuer: "ESRI",
      type: "比賽證明",
      image:
        "/certificates/大專組第一名 誰可以？YouBi可 — 臺北市 YouBike 2.0 系統與騎乘特性的時空分析 國立政治大-1.png", // 請替換成實際圖片路徑
      description:
        "透過比賽實戰百萬筆資料處理，python pandas、numpy實戰，以及資料視覺化。更加熟稔ArcGIS技術應用。",
    },
    {
      id: "cert2",
      title: "第九屆 全國大專院校暨高中職 StoryMap 校園競賽 季軍",
      date: "2023年7月",
      issuer: "ESRI",
      type: "比賽證明",
      image:
        "/certificates/大專組第三名_文山調茶局_國立政治大學_StoryMap校園競賽得獎獎狀-1.png", // 請替換成實際圖片路徑
      description:
        "透過組織比賽安排比賽，提生領導能力，並提升地理資訊系統與資料處理的能力。",
    },
    {
      id: "cert3",
      title:
        "The NCKU LiDAR Winter School 2025: High Density Scanning for Forest Carbon and Building Model",
      date: "2025年1月",
      issuer: "NCKU 國立成功大學",
      type: "活動證書",
      image: "/certificates/NCKU_2025.png", // 請替換成實際圖片路徑
      description:
        "對於LiDAR的資料處理有更深一步的認識，也加深了對於這項技術的應用層面的認知。",
    },
    {
      id: "cert4",
      title: "低軌衛星自由空間雷射光通訊科學體驗營",
      date: "2025年2月",
      issuer: "NYCU 國立陽明交通大學",
      type: "活動證書",
      image: "/certificates/低軌衛星.png", // 請替換成實際圖片路徑
      description: "對於光通訊以及雷達基站有更進一步的了解。",
    },
    // 可以繼續添加更多證書
  ];

  // 狀態管理
  const [activeType, setActiveType] = useState<CertificateType>("全部");
  const [activeCertificate, setActiveCertificate] =
    useState<Certificate | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 篩選證書
  const filteredCertificates = certificates.filter(
    (cert) =>
      (activeType === "全部" || cert.type === activeType) &&
      (cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // 打開證書詳情
  const openCertificate = (cert: Certificate) => {
    setActiveCertificate(cert);
  };

  // 關閉證書詳情
  const closeCertificate = () => {
    setActiveCertificate(null);
  };

  // 導覽到下一個或上一個證書
  const navigateCertificate = (direction: "next" | "prev") => {
    if (!activeCertificate) return;

    const currentIndex = filteredCertificates.findIndex(
      (cert) => cert.id === activeCertificate.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredCertificates.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredCertificates.length) %
        filteredCertificates.length;
    }

    setActiveCertificate(filteredCertificates[newIndex]);
  };

  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* 背景裝飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">證明文件</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-xl mx-auto">
            我的學術成就、專業認證與競賽成果
          </p>
        </motion.div>

        {/* 搜尋與篩選 */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 w-full md:w-auto">
              <FaSearch className="text-slate-400" />
              <input
                type="text"
                placeholder="搜尋證書..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-white w-full"
              />
            </div>

            <div className="flex space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {(
                ["全部", "活動證書", "成績單", "比賽證明"] as CertificateType[]
              ).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    activeType === type
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800/50 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {type === "活動證書" && <FaAward className="inline mr-2" />}
                  {type === "成績單" && (
                    <FaGraduationCap className="inline mr-2" />
                  )}
                  {type === "比賽證明" && <FaTrophy className="inline mr-2" />}
                  {type === "全部" && <FaFileAlt className="inline mr-2" />}
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 證書網格 */}
        {filteredCertificates.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => openCertificate(cert)}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700/50 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-blue-600/80 text-white">
                    {cert.type}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <FaFileAlt className="text-4xl text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400">沒有找到符合條件的證書</p>
          </div>
        )}
      </div>

      {/* 證書詳情彈窗 */}
      {activeCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-white z-10 hover:bg-slate-700 transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 p-6 flex items-center justify-center bg-slate-800">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-[600px]">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-600/80 text-white mb-4">
                  {activeCertificate.type}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {activeCertificate.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  {activeCertificate.issuer} • {activeCertificate.date}
                </p>
                <p className="text-slate-300 mb-8">
                  {activeCertificate.description}
                </p>

                {/* 導覽按鈕 */}
                <div className="flex justify-between mt-auto pt-4 border-t border-slate-700">
                  <button
                    onClick={() => navigateCertificate("prev")}
                    className="flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    <FaChevronLeft className="mr-2" /> 上一個
                  </button>
                  <button
                    onClick={() => navigateCertificate("next")}
                    className="flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    下一個 <FaChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
