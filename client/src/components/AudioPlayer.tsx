import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  src: string;
  title: string;
  testId?: string;
}

export default function AudioPlayer({ src, title, testId }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border" data-testid={testId}>
      <Button
        size="icon"
        variant="outline"
        onClick={togglePlay}
        className="flex-shrink-0"
        data-testid={`${testId}-button`}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{title}</p>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onEnded={handleEnded}
        className="hidden"
      />
    </div>
  );
}
