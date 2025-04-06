export default function Skills() {
  const skillCategories = [
    {
      category: "程式語言",
      skills: [
        {
          name: "Python",
          level: "精熟",
          percentage: "90%",
          color: "from-blue-500 to-indigo-600",
        },
        {
          name: "JavaScript",
          level: "中等",
          percentage: "75%",
          color: "from-yellow-400 to-orange-500",
        },
        {
          name: "MATLAB",
          level: "中等",
          percentage: "60%",
          color: "from-red-400 to-pink-500",
        },
      ],
    },
    {
      category: "開發技能",
      skills: [
        {
          name: "前端設計",
          level: "精熟",
          percentage: "85%",
          color: "from-emerald-400 to-teal-600",
        },
        {
          name: "後端開發",
          level: "中等",
          percentage: "70%",
          color: "from-violet-500 to-purple-600",
        },
      ],
    },
    {
      category: "專業技術",
      skills: [
        {
          name: "GIS",
          level: "精熟",
          percentage: "80%",
          color: "from-green-500 to-teal-500",
        },
        {
          name: "InSAR技術",
          level: "精熟",
          percentage: "85%",
          color: "from-cyan-500 to-blue-600",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            專業技能
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-slate-700 border-b-2 border-slate-300 pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold text-slate-800">
                          {skill.name}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            skill.level === "精熟"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: skill.percentage }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        {skill.percentage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            其他技能
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "光學衛星影像處理",
              "遙感探測技術",
              "空間數據分析",
              "土地測量",
              "Linux/Ubuntu",
              "Git",
              "Docker",
              "資料視覺化",
              "網頁開發",
              "網頁後端監控",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
