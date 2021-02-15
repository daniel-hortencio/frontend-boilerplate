import Link from 'next/link';

const WebsiteTemplate = ({ children }) => {
  return (
    <div>
      <header style={{ display: 'flex' }}>
        <h1>Logo Header </h1>
        <nav style={{ display: 'flex' }}>
          <Link href="/outra">
            <a>Home</a>
          </Link>
          <Link href="/"> Services </Link>
          <Link href="/"> About </Link>
          <Link href="/"> Contact </Link>
        </nav>
      </header>

      <main>{children}</main>
      <footer style={{ display: 'flex' }}>
        <h1>Logo Footer </h1>
        <nav style={{ display: 'flex' }}>
          <Link href="/">Home </Link>
          <Link href="/"> Services </Link>
          <Link href="/"> About </Link>
          <Link href="/"> Contact </Link>
        </nav>
      </footer>
    </div>
  );
};

export default WebsiteTemplate;
