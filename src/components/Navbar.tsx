import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadResume,
  onOpenResumeModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: "What's Next", href: '#whats-next' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#051424]/90 backdrop-blur-xl border-b border-[#1c2b3c]/60 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#1c2b3c] px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors group-hover:bg-[#273647]">
              <span className="font-mono text-[11px] font-bold text-[#d4e4fa] tracking-wider">
                {PERSONAL_INFO.initials}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#adc6ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#adc6ff]"></span>
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#010f1f] border border-[#1c2b3c]/80 text-[12px] font-mono">
            <span className="text-[#8c909f]">Status:</span>
            <span className="text-[#adc6ff] font-medium">{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#010f1f]/80 p-1 rounded-xl border border-[#1c2b3c]/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-[13px] text-[#c2c6d6] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Profile */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub: Dheeraj-Khakre"
            className="p-2 text-[#c2c6d6] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] rounded-lg transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>

          {/* LinkedIn Profile */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn: Dheeraj Khakre"
            className="p-2 text-[#c2c6d6] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] rounded-lg transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </a>

          {/* Resume PDF Action Button */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={onDownloadResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c2b3c] text-[#d4e4fa] hover:bg-[#273647] hover:text-[#adc6ff] text-[13px] font-medium transition-all shadow-sm"
              title="Download PDF Version"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Resume</span>
            </button>
            <button
              onClick={onOpenResumeModal}
              className="p-1.5 rounded-lg bg-[#1c2b3c]/60 text-[#8c909f] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] transition-all"
              title="Preview Full Resume"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
            </button>
          </div>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#adc6ff] text-[#002e6a] text-[13px] font-semibold hover:bg-[#4d8eff] hover:text-white transition-all shadow-[0_0_16px_-4px_rgba(77,142,255,0.4)] whitespace-nowrap"
          >
            <span>Let&apos;s Talk</span>
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#c2c6d6] hover:bg-[#1c2b3c] rounded-lg"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#051424] border-b border-[#1c2b3c] px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-[#c2c6d6] hover:bg-[#1c2b3c] hover:text-[#adc6ff]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#1c2b3c] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadResume();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1c2b3c] text-sm text-[#d4e4fa] hover:text-[#adc6ff]"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download PDF Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center gap-1 px-3 py-2 text-sm text-[#adc6ff]"
            >
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              <span>View Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
