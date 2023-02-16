import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
      </Link>
    </div>
  );
};

export default NotFoundPage;