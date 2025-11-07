import React from "react";
import { useAppContext } from "../common/utils/CustomHooks/useAppContext";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { appState, updateCount, updateText } = useAppContext();
  const { count, text } = appState;
  const { t, i18n } = useTranslation();

  const handleText = (value: string) => {
    updateText({ text: value });
  };

  const githubRepoUrl = "https://github.com/varuningle01/react-template";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center py-12 px-6 text-gray-800">
      {/* 🔤 Language Switcher */}
      <div className="w-full flex flex-wrap justify-center sm:justify-end gap-2 mb-6">
        {[
          { code: "english", label: "English" },
          { code: "hindi", label: "हिन्दी" },
          { code: "marathi", label: "मराठी" },
          { code: "german", label: "Deutsch" },
          { code: "french", label: "Français" },
          { code: "spanish", label: "Español" },
        ].map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-3 py-1 text-sm sm:text-base rounded transition-all duration-200 
        ${
          i18n.language === lang.code
            ? "bg-indigo-600 text-white shadow-md"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* 🏠 Header Section */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="text-gray-600 text-sm">{t("subtitle")}</p>

        {/* 🧭 GitHub Repo Button */}
        <a
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 font-medium text-white rounded-lg 
               bg-gradient-to-r from-indigo-500 to-pink-500 
               hover:from-pink-500 hover:to-indigo-500 
               transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Source on GitHub
        </a>
      </div>

      {/* 🧩 Features Section */}
      <div className="w-full max-w-3xl bg-white border border-gray-100 rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-xl font-bold text-pink-500 mb-6 text-center">
          {t("features_title")}
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>{t("feature_1")}</li>
          <li>{t("feature_2")}</li>
          <li>{t("feature_3")}</li>
          <li>{t("feature_4")}</li>
          <li>{t("feature_5")}</li>
          <li>{t("feature_6")}</li>
          <li>{t("feature_7")}</li>
          <li>{t("feature_8")}</li>
          <li>{t("feature_9")}</li>
        </ul>
      </div>

      {/* 🗂️ Folder Structure */}
      <div className="w-full max-w-3xl bg-white border border-gray-100 rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-xl font-bold text-indigo-500 mb-6 text-center">
          {t("folder_structure_title")}
        </h2>
        <pre className="bg-gray-900 text-green-400 text-sm rounded-lg p-4 overflow-x-auto">
          {`src/
├── actions/
│   ├── AppAction.ts
│   └── AppActionType.enum.ts
├── context/
│   └── AppContextProvider.tsx
├── reducers/
│   └── AppReducer.ts
├── state/
│   └── AppState.ts
├── i18n/
│   ├── i18n.ts
│   └── locales/
│       ├── english/translation.json
│       ├── hindi/translation.json
│       ├── marathi/translation.json
│       ├── german/translation.json
│       ├── french/translation.json
│       └── spanish/translation.json
├── common/
│   ├── components/
│   │   └── Fallback.tsx
│   └── utils/
│       └── CustomHooks/
│           └── useAppContext.ts
├── pages/
│   └── HomePage.tsx
├── App.tsx
└── index.tsx`}
        </pre>
      </div>

      {/* 🧰 Setup & Usage */}
      <div className="w-full max-w-3xl bg-white border border-gray-100 rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-xl font-bold text-green-600 mb-6 text-center">
          {t("setup_title")}
        </h2>
        <div className="space-y-4">
          <pre className="bg-gray-900 text-yellow-400 text-sm rounded-lg p-4 overflow-x-auto">{`npm install
npm start`}</pre>
          <p className="text-gray-600 text-sm text-center">
            {t("command_note")}
          </p>
        </div>
      </div>

      {/* 🔄 State Management Demo */}
      <div className="w-full max-w-lg bg-white border border-gray-100 rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-xl font-bold text-indigo-600 mb-4 text-center">
          {t("state_demo_title")}
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg">
            {t("count_label")}:{" "}
            <span className="font-bold text-indigo-600">{count}</span>
          </p>
          <button
            onClick={updateCount}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow transition"
          >
            {t("increase_button")}
          </button>

          <input
            type="text"
            placeholder={t("type_placeholder") || ""}
            value={text}
            onChange={(e) => handleText(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <p>
            {t("text_label")}:{" "}
            <span className="font-semibold text-gray-700">{text || "—"}</span>
          </p>
        </div>
      </div>

      {/* 🩶 Footer */}
      <footer className="text-center text-gray-500 text-sm">
        {t("footer")}
      </footer>
    </div>
  );
};
