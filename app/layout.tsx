import "./globals.css";
import { ToastProvider } from "@/app/utils/toastContext";
import { ThemeProvider } from "@/app/utils/themeContext";
import GlowCursor from "@/app/components/ui/GlowCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-colors">
        <ThemeProvider>
          <ToastProvider>
            {/* 🔥 Floating Neon Cursor */}
            <GlowCursor />

            {/* App Content */}
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
