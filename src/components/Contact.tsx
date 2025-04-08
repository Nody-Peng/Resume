"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaMedium } from "react-icons/fa";
import React from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  // 添加適當的型別註解
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // 添加適當的型別註解
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 使用 Formspree 端點
      const response = await fetch("https://formspree.io/f/xeoapono", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // 重置表單
        setTimeout(() => {
          setSubmitStatus(null);
          setFormState({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        setSubmitStatus("error");
        console.error("提交失敗:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("提交錯誤:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* 背景圖形裝飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-60 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">聯絡方式</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-xl mx-auto">
            有任何問題或合作機會，歡迎透過以下方式與我聯繫
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 左側聯絡資訊 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  與我連繫
                </h3>

                <div className="space-y-6 mb-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-all">
                      <FaEnvelope className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">電子郵件</p>
                      <a
                        href="mailto:ablecck12@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        ablecck12@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-all">
                      <FaGithub className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">GitHub</p>
                      <a
                        href="https://github.com/Nody-Peng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        https://github.com/Nody-Peng
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-all">
                      <FaMedium className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Medium</p>
                      <a
                        href="https://medium.com/@ablecck12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        medium.com/@ablecck12
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4 text-slate-300">
                    社群媒體
                  </h4>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://github.com/Nody-Peng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-900 transition-colors"
                    >
                      <FaGithub className="text-white" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://medium.com/@ablecck12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-900 transition-colors"
                    >
                      <FaMedium className="text-white" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://www.facebook.com/nody.peng/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-900 transition-colors"
                    >
                      <FaFacebook className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* 右側表單 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  發送訊息
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      您的姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="請輸入您的姓名"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      電子郵件
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="請輸入您的電子郵件"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      訊息內容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="請輸入您的訊息"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-all shadow-lg ${
                      isSubmitting
                        ? "bg-slate-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-blue-500/25"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        處理中...
                      </span>
                    ) : (
                      "發送訊息"
                    )}
                  </motion.button>

                  {/* 成功訊息 */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg"
                    >
                      <p className="text-green-400 text-sm text-center">
                        訊息已成功送出，我會盡快回覆您！
                      </p>
                    </motion.div>
                  )}

                  {/* 錯誤訊息 */}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg"
                    >
                      <p className="text-red-400 text-sm text-center">
                        發送訊息時發生錯誤，請稍後再試。
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
