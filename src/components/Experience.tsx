"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFileAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: "FooDiary - 飲食日記與分析系統",
      company: "團隊專案",
      period: "2024",
      icon: "🍽️",
      color: "from-emerald-500 to-teal-700",
      description:
        "利用 RAG 技術串接 LLM，讓用戶可以輸入飲食內容，透過 AI 針對飲食內容進行詳細的分析與建議。",
      achievements: [
        "運用 React 與 Next.js 構建響應式前端界面",
        "設計並實現基於 MongoDB 的資料庫架構",
        "整合 RAG (Retrieval-Augmented Generation) 技術與 LLM",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/ZeoXer/FooDiary",
          icon: <FaGithub className="mr-2" />,
        },
        {
          name: "簡報",
          url: "https://www.canva.com/design/DAGbB4zs1zo/Pzx3Fmx3F2grwXBN_BcCeQ/edit",
          icon: <FaFileAlt className="mr-2" />,
        },
      ],
      technologies: ["React", "Next.js", "MongoDB", "RAG", "LLM"],
    },
    {
      title: "誰敢跟我桌隊 - 桌球賽事管理系統",
      company: "團隊專案",
      period: "2024",
      icon: "🏓",
      color: "from-blue-500 to-indigo-700",
      description:
        "開發桌球賽事管理系統，實現賽事報名、賽程安排與結果發布等功能。",
      achievements: [
        "使用 React 與 TypeScript 開發現代化前端界面",
        "實現賽事報名、賽程安排與結果發布等核心功能",
        "設計並開發權限管理系統，區分不同用戶角色",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Nody-Peng/NccuTT",
          icon: <FaGithub className="mr-2" />,
        },
        {
          name: "簡報",
          url: "https://github.com/Nody-Peng/NccuTT/blob/main/%E8%AA%B0%E6%95%A2%E8%B7%9F%E6%88%91%E6%A1%8C%E9%9A%8A.pdf",
          icon: <FaFileAlt className="mr-2" />,
        },
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    },
  ];

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
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">開發經驗</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeTab === index
                    ? "bg-white shadow-md text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <span className="mr-2">{exp.icon}</span>
                {exp.title.split(" - ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div
            className={`bg-gradient-to-r ${experiences[activeTab].color} p-8 text-white`}
          >
            <h3 className="text-3xl font-bold">
              {experiences[activeTab].title}
            </h3>
            <div className="flex items-center mt-3 space-x-4">
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>{experiences[activeTab].company}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{experiences[activeTab].period}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              {experiences[activeTab].description}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                主要成就
              </h4>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-3"
              >
                {experiences[activeTab].achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1">
                      <span className="text-sm font-bold">{i + 1}</span>
                    </div>
                    <span className="ml-3 text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                技術堆疊
              </h4>
              <div className="flex flex-wrap gap-2">
                {experiences[activeTab].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {experiences[activeTab].links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
