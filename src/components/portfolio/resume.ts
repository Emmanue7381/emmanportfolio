import { toast } from "sonner";
import { profile } from "@/content/portfolio";

export function openResume() {
  if (profile.resumeUrl) {
    window.open(profile.resumeUrl, "_blank", "noopener");
  } else {
    toast("Resume coming soon", { description: "The downloadable resume will be available shortly." });
  }
}
