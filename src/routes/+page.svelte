<script>
  import Header from "../components/Header.svelte";
  import Gallery from "../components/Gallery.svelte";
  import About from "../components/About.svelte";
  import Amenities from "../components/Amenities.svelte";
  import Room from "../components/Room.svelte";
  import Palm from "../components/Palm.svelte";
  import Explore from "../components/Explore.svelte";
  import Contact from "../components/Contact.svelte";
  import Fyqs from "../components/Fyqs.svelte";
  import Policies from "../components/Policies.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main class="flex flex-col">
  <Header />

  <section id="gallery">
    <Gallery />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="amenities">
    <Amenities />
  </section>

  <section id="rooms">
    <Room />
  </section>

  <section id="palm">
    <Palm />
  </section>

  <section id="explore">
    <Explore />
  </section>

  <section id="contact">
    <Contact />
  </section>

  <section id="faq">
    <Fyqs />
  </section>

  <section id="policies">
    <Policies />
  </section>

  <Footer />
</main>
