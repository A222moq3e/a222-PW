"use client";

/**
 * Shows an on-demand desktop iframe preview for project sites.
 */

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const desktopPreviewWidth = 1440;

export function ProjectPreviewDialog({ project, labels }) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(0.8);
  const frameWrapRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const fitPreview = () => {
      if (frameWrapRef.current) {
        setScale(frameWrapRef.current.clientWidth / desktopPreviewWidth);
      }
    };

    fitPreview();
    window.addEventListener("resize", fitPreview);

    return () => window.removeEventListener("resize", fitPreview);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {labels.preview}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[min(1180px,calc(100vw-32px))] max-w-none overflow-hidden p-0">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{labels.modalDescription}</DialogDescription>
        </DialogHeader>
        <div ref={frameWrapRef} className="relative h-[min(620px,72vh)] overflow-hidden bg-white">
          {open && (
            <iframe
              title={`${project.title} preview`}
              src={project.url}
              width="1440"
              height="900"
              className="absolute left-0 top-0 h-[900px] w-[1440px] origin-top-left border-0"
              style={{ transform: `scale(${scale})` }}
            />
          )}
        </div>
        <div className="flex justify-end border-t border-border p-4">
          <Button asChild>
            <a href={project.url} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" />
              {labels.open}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
