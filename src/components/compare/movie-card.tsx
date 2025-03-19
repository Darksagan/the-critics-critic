import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Movie } from "@/lib/compare/data";

interface MovieCardProps {
  movie: Movie;
  selected?: boolean;
  onClick?: () => void;
}

export function MovieCard({ movie, selected = false, onClick }: MovieCardProps) {
  return (
    <Card
      className={`cursor-pointer relative overflow-hidden transition-all hover:shadow-lg ${
        selected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      {selected && (
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground z-10 rounded-full p-1">
          <Check className="h-4 w-4" />
        </div>
      )}

      <div className="relative h-[180px]">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-bold truncate">{movie.title}</h3>
          <p className="text-white/80 text-sm">{movie.year} • {movie.director}</p>
        </div>
      </div>

      <CardContent className="p-3">
        <div className="flex flex-wrap gap-1 mt-1">
          {movie.genres.map(genre => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
