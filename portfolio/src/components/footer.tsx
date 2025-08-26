import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin } from "react-icons/fa";  // for GitHub + LinkedIn
import { FaXTwitter } from "react-icons/fa6";           // for Twitter (X)
import { IoIosStar } from "react-icons/io";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-green-100 text-gray-300 py-52 mt-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p className="text-sm text-green-800">&copy; {new Date().getFullYear()} Faiz Ahmed. All rights reserved.</p>

    <div className="flex gap-5 text-xl">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <FaGithub  />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <FaXTwitter />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <FaLinkedin />
      </a>
    </div>
  </div>
</footer>

  )
}
