import Header from "./Header";
import editorDesktop from "/src/images/illustration-editor-desktop.svg";
import editorMobile from "/src/images/illustration-editor-mobile.svg";
import laptopDesktop from "/src/images/illustration-laptop-desktop.svg";
import laptopMobile from "/src/images/illustration-laptop-mobile.svg";
import phones from "/src/images/illustration-phones.svg";
import circles from "/src/images/bg-pattern-circles.svg";
import patternDesktop from "/src/images/bg-pattern-intro-desktop.svg";
import patternMobile from "/src/images/bg-pattern-intro-mobile.svg";

function Section(props) {
  return (
    <>
      {props.name == "intro" && (
        <section
          className={`${props.name} bg-linear-to-r from-first-value-red to-second-value-red relative rounded-bl-[150px]`}>
          <div className="absolute w-full min-h-full rounded-bl-[150px] overflow-hidden">
            <picture className="absolute top-0 left-0 z-0 translate-x-[-30%] translate-y-[-5%] md:top-1/2 md:left-3/4 md:-translate-x-1/2 md:-translate-y-1/2">
              <source media="(min-width: 768px)" srcSet={patternDesktop} />
              <img className="max-w-none" src={patternMobile} alt="" />
            </picture>
          </div>
          <div className="container relative z-1">
            <Header />
            <div className="min-h-[90vh] md:min-h-[65vh] flex flex-col justify-center items-center text-white text-center">
              <h1 className="sr-only">Blogr is a modern publishing platform</h1>
              <h2 className="text-4xl md:text-6xl">A modern publishing platform</h2>
              <p className="mt-8 mb-12 font-light text-lg">Grow your audience and build your online brand</p>
              <div className="flex gap-4 items-center">
                <a
                  className="font-[Ubuntu] transition-all duration-200 hover:bg-light-cta-hover hover:text-white font-bold bg-white text-red-cta-text border-2 border-transparent py-2 px-4 rounded-[100px]"
                  href="#">
                  Start for Free
                </a>
                <a
                  className="font-[Ubuntu] transition-all duration-200 font-bold hover:text-light-cta-hover hover:bg-white  bg-transparent text-white border-2 border-white py-2 px-4 rounded-[100px]"
                  href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {props.name == "editor" && (
        <section className={`${props.name} text-center md:py-40`}>
          <div className="container">
            <h2 className="text-2xl text-titles mb-10 font-semibold md:text-4xl md:mb-20">Designed for the future</h2>
            <div className="space-y-10 text-body-text md:flex md:items-center relative md:justify-between md:text-left">
              <picture className="block md:shrink-0 md:w-2/3 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:translate-x-1/2">
                <source media="(min-width: 768px)" srcSet={editorDesktop} />
                <img className="mx-auto md:mx-0 md:w-full" src={editorMobile} alt="" />
              </picture>
              <div className="space-y-12 md:w-2/5">
                <div className="space-y-6">
                  <h3 className="text-2xl text-titles font-semibold md:text-3xl">Introducing an extensible editor</h3>
                  <p>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating
                    content. The editor supports management of multiple blogs and allows easy manipulation of embeds
                    such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add
                    functionality or change the looks of a blog.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl text-titles font-semibold md:text-3xl">Robust content management</h3>
                  <p>
                    Flexible content management enables users to easily move through posts. Increase the usability of
                    your blog by adding customized categories, sections, format, or flow. With this functionality,
                    you’re in full control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {props.name == "phones" && (
        <section
          className={`${props.name} relative text-center md:text-left bg-linear-to-r my-52 from-first-value-blue to-second-value-blue text-white rounded-tr-[100px] rounded-bl-[100px]`}>
          <div className="container relative md:flex md:justify-end md:p-0">
            <img
              className="absolute z-2 w-full max-w-xs top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 md:top-1/2 md:max-w-2xl md:left-0 md:-translate-y-1/2 md:translate-x-0 md:w-1/2"
              src={phones}
              alt=""
            />
            <div className="relative w-full md:flex md:justify-end overflow-hidden pt-52 pb-12 md:p-0">
              <div className="md:w-1/2 md:max-w-lg md:p-10">
                <h2 className="text-3xl md:text-4xl">State of the Art Infrastructure</h2>
                <p className="text-footer-text mt-6">
                  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                  connectivity. This ensures your site will load instantly, no matter where your readers are, keeping
                  your site competitive.
                </p>
                <img
                  className="absolute top-0 z-1 left-1/2 -translate-y-1/4 -translate-x-1/2 md:left-0 md:translate-x-0 md:-translate-y-1/2 w-1/2 brightness-125"
                  src={circles}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {props.name == "laptop" && (
        <section className={`${props.name} text-center md:py-40 mb-36`}>
          <div className="container">
            <div className="space-y-10 text-body-text md:flex md:flex-row-reverse md:items-center relative md:justify-between md:text-left">
              <picture className="block md:shrink-0 md:w-11/12 md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:-translate-x-1/2">
                <source media="(min-width: 768px)" srcSet={laptopDesktop} />
                <img className="mx-auto md:mx-0 md:w-full" src={laptopMobile} alt="" />
              </picture>
              <div className="space-y-12 md:w-2/5">
                <div className="space-y-6">
                  <h3 className="text-2xl text-titles font-semibold md:text-3xl">Free, open, simple</h3>
                  <p>
                    Blogr is a free and open source application backed by a large community of helpful developers. It
                    supports features such as code syntax highlighting, RSS feeds, social media integration, third-party
                    commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is
                    relatively easy to learn.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl text-titles font-semibold md:text-3xl">Powerful tooling </h3>
                  <p>
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and
                    deployment a breeze, but capable of producing even the most complicated sites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Section;
