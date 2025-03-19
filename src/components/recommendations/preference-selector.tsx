import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserPreference } from "@/lib/recommendations/data";

interface PreferenceSelectorProps {
  preference: UserPreference;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  maxSelections?: number;
}

export function PreferenceSelector({
  preference,
  selectedValues,
  onChange,
  maxSelections = 3
}: PreferenceSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(item => item !== value));
    } else {
      if (selectedValues.length < maxSelections) {
        onChange([...selectedValues, value]);
      }
    }
  };

  const handleRemove = (value: string) => {
    onChange(selectedValues.filter(item => item !== value));
  };

  const importanceColor = {
    high: "text-red-500",
    medium: "text-amber-500",
    low: "text-green-500"
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>{preference.name}</CardTitle>
          <Badge variant="outline" className={importanceColor[preference.importance]}>
            {preference.importance} priority
          </Badge>
        </div>
        <CardDescription>{preference.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {selectedValues.length > 0
                  ? `${selectedValues.length} selected`
                  : "Select options..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-full" align="start">
              <Command>
                <CommandInput placeholder={`Search ${preference.name.toLowerCase()}...`} />
                <CommandEmpty>No option found.</CommandEmpty>
                <CommandGroup>
                  {preference.options.map((option) => (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={() => {
                        handleSelect(option);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedValues.includes(option) ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          {selectedValues.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedValues.map(value => (
                <Badge key={value} variant="secondary" className="pl-2 pr-1 py-1">
                  {value}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1"
                    onClick={() => handleRemove(value)}
                  >
                    <span className="sr-only">Remove</span>
                    <span className="text-xs ml-1">×</span>
                  </Button>
                </Badge>
              ))}
            </div>
          )}

          <p className="text-xs text-muted-foreground pt-2">
            Select up to {maxSelections} options
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
