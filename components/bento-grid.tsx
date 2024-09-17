"use client";

import { useState, useEffect, useRef, Fragment, MouseEvent } from "react";
import { cn } from "../lib/utils";
import { PauseCircle, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Manage the currently playing song globally
let currentlyPlayingAudio: HTMLAudioElement | null = null;
let setGlobalPlayingState: ((isPlaying: boolean) => void) | null = null;

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[30rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header, // The artist cover (image or ReactNode)
  audio,
  artist, // Artist name
  cover,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  audio?: string;
  artist?: string;
  cover?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  // Toggle play and pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        currentlyPlayingAudio = null;
        setGlobalPlayingState = null;
      } else {
        if (
          currentlyPlayingAudio &&
          currentlyPlayingAudio !== audioRef.current
        ) {
          currentlyPlayingAudio.pause(); // Pause any currently playing audio
          if (setGlobalPlayingState) {
            setGlobalPlayingState(false); // Reset the playing state for the other component
          }
        }
        audioRef.current.play();
        currentlyPlayingAudio = audioRef.current;
        setGlobalPlayingState = setIsPlaying; // Set the global playing state handler
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => {
        setIsPlaying(false);
      };

      const updateProgress = () => {
        if (audioRef.current) {
          const currentTime = audioRef.current.currentTime;
          const duration = audioRef.current.duration;
          if (duration) setProgress((currentTime / duration) * 100);
        }
      };

      // Update progress during playback
      audioRef.current.addEventListener("timeupdate", updateProgress);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", updateProgress);
        }
      };
    }
  }, []);

  // Handle progress bar click to seek the audio
  const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickX = e.nativeEvent.offsetX;
      const progressBarWidth = progressBar.clientWidth;
      const clickPositionRatio = clickX / progressBarWidth;
      const newTime = clickPositionRatio * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <Fragment>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-pointer relative",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header (artist cover) */}
        <div className="relative">
          {header}
          {isHovered && (
            <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50 rounded-xl">
              <button
                onClick={togglePlayPause}
                className="p-2 text-white hover:text-gray-300 transition"
              >
                {isPlaying ? (
                  <PauseCircle className="w-12 h-12" />
                ) : (
                  <PlayCircle className="w-12 h-12" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Audio element */}
        {audio && <audio ref={audioRef} src={audio} id={`audio-${audio}`} />}

        {/* Title and description */}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
          {isHovered && artist && (
            <div className="font-sans font-medium text-blue-500 dark:text-blue-400 mt-1">
              {artist}
            </div>
          )}
        </div>
      </div>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-black dark:text-white p-4 shadow-2xl rounded-xl fixed bottom-4 right-4 z-50 w-72"
        >
          {/* Top section with image and controls */}
          <div className="flex items-center justify-between w-full">
            <Image
              src={cover as string}
              alt={title as string}
              width={48}
              height={48}
              className="rounded-lg"
            />

            <div className="flex flex-col justify-between text-left ml-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="font-bold text-sm">{title}</div>
                <button
                  onClick={togglePlayPause}
                  className="p-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
                >
                  {isPlaying ? (
                    <PauseCircle className="w-8 h-8" />
                  ) : (
                    <PlayCircle className="w-8 h-8" />
                  )}
                </button>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {description}
              </div>
              <div className="text-xs mt-1 text-gray-400">Now playing</div>
            </div>
          </div>

          {/* Progress bar at the bottom */}
          <div
            className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-4 cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </motion.div>
      )}
    </Fragment>
  );
};
