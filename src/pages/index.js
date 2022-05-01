import CommunityJoin from "../components/cta/CommunityJoin";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout/Layout";
import BrowseCta from "../components/cta/BrowseCta";
import CodedTemplate from "../components/CodedTemplate";
import UiTemplate from "../components/UiTemplate";
import ElementorKit from "../components/ElementorKit";
import PrimaryNav from "../components/Layout/Nav/PrimaryNav";
import CategoryTab from "../components/tabs/CategoryTab";
import Testimonials from "../components/Testimonials";

export default function index() {
  return (
    <Layout title="UI Bucket">
      <PrimaryNav />
      <Hero />
      <CategoryTab />
      <CodedTemplate />
      <UiTemplate />
      <ElementorKit />
      <UiTemplate />
      <ElementorKit />
      <Testimonials />
      <CommunityJoin />
      <BrowseCta />
    </Layout>
  );
}
