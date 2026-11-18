import { toast } from "sonner";
import { profile } from "@/content/portfolio";

export function openResume() {
  if (profile.resumeUrl) {
    const link = document.createElement("a");
    link.href = profile.resumeUrl;
    link.download = "Emmanuel-Ebenezer-Resume.pdf";
    document.body.append(link);
    link.click();
    link.remove();
  } else {
    toast("Resume coming soon", { description: "The downloadable resume will be available shortly." });
  }
}
