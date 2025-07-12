"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "../Hooks/useInViewOnce";
import { Progress } from "@/components/ui/progress";

export default function SkillBar({ value, label, icon }) {
  const [ref, inView] = useInViewOnce();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setProgress(current);
        if (current >= value) {
          clearInterval(interval);
        }
      }, 10); // controls speed
    }
  }, [inView, value]);

  return (
    <div className="flex flex-col md:gap-4 gap-3" ref={ref}>
      <div className="flex justify-between text-xl">
        <div className="flex items-center gap-3">
          {icon}
          <p>{label}</p>
        </div>
        <p>{progress}%</p>
      </div>
      <div>
        <Progress
          value={progress}
          className="bg-[#494848] [&>div]:bg-white h-3"
        />
      </div>
    </div>
  );
}
