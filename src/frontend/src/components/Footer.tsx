import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-purple/10 via-brand-pink/10 to-brand-orange/10 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2026. Built with{' '}
            <Heart className="w-4 h-4 text-brand-pink fill-brand-pink animate-pulse" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple hover:text-brand-pink transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
