function HeroImage() {
  return (
    <>
      <picture>
        <source srcSet="heroimage.webp" type="image/webp" />
        <img
          loading="lazy"
          src="heroimage.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </picture>
    </>
  );
}

export default HeroImage;
