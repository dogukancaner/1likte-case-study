import CustomCard from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Header />
      <main>
        <CustomCard />
      </main>
      <Footer />
    </div>
  );
}
