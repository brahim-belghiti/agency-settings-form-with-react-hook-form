function HeroImage() {
  return (
    <section className="col-span-4 relative h-full min-h-screen hidden lg:flex">
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50"></div>
      <picture>
        <source srcSet="heroimage.webp" type="image/webp" />
        <img
          loading="lazy"
          src="heroimage.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </picture>
    </section>
  );
}

export default HeroImage;
