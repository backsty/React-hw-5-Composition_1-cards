import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <h1 className="text-container">React Cards Demo</h1>
      </header>
      <main>{children}</main>
      <footer className="pt-3 mt-4 text-muted border-top">© 2024 React Cards Demo</footer>
    </div>
  );
};

export default Layout;
