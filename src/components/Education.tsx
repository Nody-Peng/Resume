import {
  FaGraduationCap,
  FaMedal,
  FaTrophy,
  FaUniversity,
  FaLaptopCode,
} from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800 relative">
          <span className="relative inline-block">
            學歷與成就
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* 學歷部分 */}
          <div className="mb-16">
            <div className="flex items-center mb-10">
              <FaUniversity className="text-3xl text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-slate-800">學術背景</h3>
            </div>

            <div className="relative">
              {/* 時間軸 */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-teal-400 transform md:translate-x-[-50%]"></div>

              {/* 第一個學歷 */}
              <div className="relative mb-16 md:mb-0">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-blue-600 shadow-lg transform translate-x-[8px]"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 shadow-lg transform translate-x-[-8px]"></div>
                    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-600 h-full transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center justify-end mb-2">
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          2024-至今
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        國立政治大學地政所
                      </h4>
                      <p className="text-gray-600 mb-3">碩士研究生</p>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">研究方向：</span>
                          衛星影像處理、InSAR技術應用
                        </p>
                        <p className="text-gray-700 text-sm mt-2">
                          <span className="font-semibold">入學成績：</span>
                          <span className="text-blue-600 font-medium">
                            逕行錄取第二名
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left md:mt-32">
                    <div className="hidden md:block absolute left-0 top-32 w-4 h-4 rounded-full bg-teal-500 shadow-lg transform translate-x-[-8px]"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-teal-500 shadow-lg transform translate-x-[-8px]"></div>
                    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-teal-500 h-full transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                          2020-2024
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        國立政治大學地政學系
                      </h4>
                      <p className="text-gray-600 mb-3">土地測量與資訊組學士</p>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">畢業成績：</span>
                          <span className="text-red-500 font-bold">
                            全系第一名
                          </span>
                        </p>
                        <p className="text-gray-700 text-sm mt-2">
                          <span className="font-semibold">大學GPA：</span>
                          <span className="text-blue-600 font-medium">
                            4.0/4.3
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 成就與榮譽部分 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* 獎學金與榮譽 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <FaTrophy className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  獎學金與榮譽
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      台灣大學土木工程所
                    </p>
                    <p className="text-sm text-gray-600">逕行錄取第三名</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">政治大學地政所</p>
                    <p className="text-sm text-gray-600">逕行錄取第二名</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      林熊徵學田基金會獎學金
                    </p>
                    <p className="text-sm text-gray-600">第72屆 (2023)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      地政學系畢業生代表
                    </p>
                    <p className="text-sm text-gray-600">2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      【講師】2024政誌指南：校史故事地圖線上策展競賽
                    </p>
                    <p className="text-sm text-gray-600">2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      【競賽】第九屆 全國大專院校暨高中職 StoryMap 校園競賽 季軍
                    </p>
                    <p className="text-sm text-gray-600">2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-blue-100 rounded-full mr-3 mt-1">
                    <FaMedal className="text-sm text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      【競賽】第十屆 全國大專院校暨高中職 StoryMap 校園競賽 冠軍
                    </p>
                    <p className="text-sm text-gray-600">2024</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 學術成就 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-100 rounded-full mr-4">
                  <FaGraduationCap className="text-2xl text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">參與計畫</h3>
              </div>
              <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    時空串連在地與遙測觀測監測邊坡災害
                  </h4>
                  <p className="text-xs text-gray-700">
                    計畫代號：113F113038
                    <span className="block mt-1 text-gray-500">
                      主持人：林士淵, 2024/02/07-2024/12/31
                    </span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    全國森林資源調查資料整合分析及報告編製計畫
                  </h4>
                  <p className="text-xs text-gray-700">
                    計畫代號：112A112164
                    <span className="block mt-1 text-gray-500">
                      主持人：詹進發, 2023/11/22-2024/08/30
                    </span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    再生能源政策與國土計畫體系接軌配套分析
                  </h4>
                  <p className="text-xs text-gray-700">
                    計畫代號：NSTC112-2119-M-004-001
                    <span className="block mt-1 text-gray-500">
                      主持人：鄭安廷, 2023/05/01-2024/08/31
                    </span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    氣候變遷與農業環境於蘭陽溪流域生態系統之衝擊與調適策略研究
                  </h4>
                  <p className="text-xs text-gray-700">
                    計畫代號：NSTC112-2321-B-004-001
                    <span className="block mt-1 text-gray-500">
                      主持人：詹進發, 2023/05/01-2024/04/30
                    </span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    整合民族科學與空間科學以建置調適循環型災害溝通機制
                  </h4>
                  <p className="text-xs text-gray-700">
                    計畫代號：NSTC112-2420-H-004-007
                    <span className="block mt-1 text-gray-500">
                      主持人：林士淵, 2023/01/01-2023/12/31
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 專業課程 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <FaLaptopCode className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">參與課程</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-slate-800 mb-1">
                    ISPRS Student Consortium Summer School 2023
                  </h4>
                  <p className="text-sm text-gray-600">
                    Tainan, 2023 November 3rd-8th
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-slate-800 mb-1">
                    NCKU LiDAR Winter School
                  </h4>
                  <p className="text-sm text-gray-600">2025 January 13-17</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-slate-800 mb-1">
                    中央遙測中心 <br />
                    雷達遙測實務工作坊 RS5020
                  </h4>
                  <p className="text-sm text-gray-600">2025 January 20-24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
