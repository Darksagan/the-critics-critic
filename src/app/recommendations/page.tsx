"use client";

import React, { useState } from "react";
import { ChevronRight, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreferenceSelector } from "@/components/recommendations/preference-selector";
import { CriticCard } from "@/components/recommendations/critic-card";
import { userPreferences, getRecommendedCritics, criticProfiles, CriticProfile } from "@/lib/recommendations/data";

// Define an extended type for critics with match score
interface CriticWithMatchScore extends CriticProfile {
  matchScore: number;
}

export default function RecommendationsPage() {
  const [activeTab, setActiveTab] = useState("preferences");
  const [selectedPreferences, setSelectedPreferences] = useState<Record<string, string[]>>({});
  const [recommendedCritics, setRecommendedCritics] = useState<CriticWithMatchScore[]>([]);

  const handlePreferenceChange = (id: string, values: string[]) => {
    setSelectedPreferences({
      ...selectedPreferences,
      [id]: values
    });
  };

  const handleGetRecommendations = () => {
    // Check if user has selected at least one preference for each high importance category
    const highImportanceCategories = userPreferences.filter(pref => pref.importance === "high");
    const hasRequiredSelections = highImportanceCategories.every(pref =>
      selectedPreferences[pref.id] && selectedPreferences[pref.id].length > 0
    );

    if (!hasRequiredSelections) {
      alert("Please select at least one option for each high priority category before getting recommendations.");
      return;
    }

    const recommended = getRecommendedCritics(selectedPreferences);

    // Add a fake match score for UI demonstration
    setRecommendedCritics(
      recommended.map((critic, index) => ({
        ...critic,
        matchScore: Math.round(95 - (index * 7))
      }))
    );

    setActiveTab("results");
  };

  const handleReset = () => {
    setSelectedPreferences({});
  };

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Find Your Critics</h1>
        <p className="text-xl text-muted-foreground">
          Discover film critics whose tastes and perspectives align with yours
        </p>
      </div>

      <Tabs defaultValue="preferences" value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <span>1. Your Preferences</span>
            <ChevronRight className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="results" disabled={recommendedCritics.length === 0} className="flex items-center gap-2">
            <span>2. Your Critics</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="mt-6">
          <Card className="mb-8 border-primary/20">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                How it works
              </CardTitle>
              <CardDescription>
                Tell us about your film preferences, and we'll match you with critics who share similar tastes and perspectives.
                The more preferences you select, the more accurate your recommendations will be.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 text-primary font-bold h-5 w-5 flex items-center justify-center flex-shrink-0">1</div>
                  <p>Select your preferences for each category (choose up to 3 options per category)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 text-primary font-bold h-5 w-5 flex items-center justify-center flex-shrink-0">2</div>
                  <p>Red categories are high priority and required for good matches</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 text-primary font-bold h-5 w-5 flex items-center justify-center flex-shrink-0">3</div>
                  <p>Click "Get Recommendations" to see your personalized critic matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userPreferences.map(preference => (
              <PreferenceSelector
                key={preference.id}
                preference={preference}
                selectedValues={selectedPreferences[preference.id] || []}
                onChange={(values) => handlePreferenceChange(preference.id, values)}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={handleReset}>
              Reset Preferences
            </Button>
            <Button size="lg" onClick={handleGetRecommendations}>
              Get Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="results" className="mt-6">
          {recommendedCritics.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-2">Your Recommended Critics</h2>
              <p className="text-muted-foreground mb-6">
                Based on your preferences, these critics are most likely to align with your taste in film
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recommendedCritics.map(critic => (
                  <CriticCard
                    key={critic.id}
                    critic={critic}
                    matchScore={critic.matchScore}
                  />
                ))}
              </div>

              <Separator className="my-8" />

              <div className="text-center">
                <h3 className="text-lg font-medium mb-3">Not seeing what you expected?</h3>
                <Button onClick={() => setActiveTab("preferences")}>
                  Adjust Your Preferences
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No recommendations yet</h2>
              <p className="text-muted-foreground mb-6">
                Complete your preferences first to get personalized critic recommendations
              </p>
              <Button onClick={() => setActiveTab("preferences")}>
                Back to Preferences
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
