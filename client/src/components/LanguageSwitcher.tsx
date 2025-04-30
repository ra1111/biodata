import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Save selected language to localStorage
    localStorage.setItem('i18nextLng', lng);
  };
  
  // Get current language code (en, es, fr, zh)
  const currentLanguage = i18n.language.substring(0, 2).toLowerCase();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center justify-center p-1 min-w-[32px] min-h-[32px] rounded-full border border-gray-200 text-black bg-white hover:bg-gray-50"
        >
          <span className="text-xs font-medium uppercase">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 mt-1">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className={`cursor-pointer ${currentLanguage === lang.code ? 'font-bold bg-gray-100' : ''}`}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}