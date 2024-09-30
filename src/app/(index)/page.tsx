"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const IndexPage = () => {
  const [language, setLanguage] = React.useState("en");
  const router = useRouter();

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleConfirm = () => {
    router.push(`/${language}`);
  };
  return (
    <main className="min-h-screen flex items-center justify-center w-full">
      <Card className="w-[90%] max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Language Selection
          </CardTitle>
          <CardDescription>
            Welcome to my portfolio website, please select your language
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select onValueChange={handleLanguageChange} defaultValue={language}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">
                <div className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>English</span>
                </div>
              </SelectItem>
              <SelectItem value="ja">
                <div className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>日本語 (Japanese)</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleConfirm}>
            <Check className="mr-2 h-4 w-4" /> Confirm Selection
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default IndexPage;
