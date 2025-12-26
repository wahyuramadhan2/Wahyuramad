import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        {/* Decorative elements */}
        <div className="shape-blob w-64 h-64 bg-primary/20 -top-20 -left-20" />
        <div className="shape-blob w-48 h-48 bg-accent/20 -bottom-10 -right-10" />
        
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button type="button" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Halaman Sebelumnya
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
